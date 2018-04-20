import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Copy extends PureComponent {
  static propTypes = {
    textToBeCopied: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    onCopy: PropTypes.func
  };

  static defaultProps = {
    onCopy: undefined
  };

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
    const { textToBeCopied, onCopy, children, ...otherProps } = this.props;
    const child = React.Children.only(children);
    const copyMethod = this.copy.bind(this);
    const buttonElem = React.cloneElement(child, {
      ...child.props,
      onClick: copyMethod
    });

    return (
      <React.Fragment>
        <span
          {...otherProps}
          ref={span => {
            this.urlSpan = span;
          }}
        >
          {textToBeCopied}
        </span>
        {buttonElem}
      </React.Fragment>
    );
  }
}

export default Copy;
