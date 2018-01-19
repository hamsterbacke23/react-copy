import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Copy extends PureComponent {
  static propTypes = {
    textToBeCopied: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    onCopy: PropTypes.func,
    style: PropTypes.object
  };

  static defaultProps = {
    onCopy: undefined,
    style: null
  };

  getDefaultStyle = () => ({
    wordWrap: 'break-word',
    width: '70%',
    display: 'inline-block',
    fontSize: '0.8em',
    opacity: 0.6
  });

  /**
   * Selects a text within a dom element
   */
  selectTextFromElement() {
    if (window.getSelection && document.createRange) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(this.urlSpan);
      selection.removeAllRanges();
      selection.addRange(range);
    } else if (document.selection && document.body.createTextRange) {
      const range = document.body.createTextRange();
      range.moveToElementText(this.urlSpan);
      range.select();
    }
  }

  /**
   * Try to copy the text within a dom element
   */
  copy() {
    this.selectTextFromElement();
    let success;
    let error;

    try {
      document.execCommand('copy');
      success = true;
    } catch (err) {
      success = false;
      error = err;
    }

    if (this.props.onCopy) {
      this.props.onCopy({
        success,
        error
      });
    }
  }

  render() {
    const child = React.Children.only(this.props.children);
    const copyMethod = this.copy.bind(this);
    const buttonElem = React.cloneElement(child, {
      ...child.props,
      onClick: copyMethod
    });
    return (
      <div className="copy">
        <span
          className="copy-content"
          ref={span => {
            this.urlSpan = span;
          }}
          style={this.props.style ? this.props.style : this.getDefaultStyle()}
        >
          {this.props.textToBeCopied}
        </span>
        {buttonElem}
      </div>
    );
  }
}

export default Copy;
