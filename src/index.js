import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import defaultStyle from './defaultStyle';

class Copy extends PureComponent {
  static propTypes = {
    textToBeCopied: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    onCopy: PropTypes.func,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  }

  static defaultProps = {
    onCopy: undefined,
    style: null,
  }

  static defaultStyle = {
    wordWrap: 'break-word',
    width: '70%',
    display: 'inline-block',
    fontSize: '0.8em',
    opacity: 0.6,
  }

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
        error,
      });
    }
  }

  render() {
    const child = React.Children.only(this.props.children);
    const copyMethod = this.copy.bind(this);
    const buttonElem = React.cloneElement(child, { ...child.props, onClick: copyMethod });

    return (
      <div>
        <span
          className="Copy"
          ref={(span) => { this.urlSpan = span; }}
          style={this.props.style ? this.props.style : defaultStyle}
        >
          {this.props.textToBeCopied}
        </span>
        {buttonElem}
      </div>
    );
  }
}


export default Copy;
