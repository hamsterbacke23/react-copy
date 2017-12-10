import React, { Component, PropTypes } from 'react';
import defaultStyle from './defaultStyle';

class Copy extends Component {
  /**
   * Selects a text within a dom element
   * @param {object} domElement
   */
  static selectTextFromElement(domElement) {
    if (window.getSelection && document.createRange) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(domElement);
      selection.removeAllRanges();
      selection.addRange(range);
    } else if (document.selection && document.body.createTextRange) {
      const range = document.body.createTextRange();
      range.moveToElementText(domElement);
      range.select();
    }
  }

  /**
   * Try to copy the text within a dom element
   * @param {object} domElement
   */
  copy(domElement) {
    this.selectTextFromElement(domElement);
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
    const copyMethod = this.copy.bind(this, this.urlSpan);
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

Copy.propTypes = {
  textToBeCopied: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onCopy: PropTypes.func,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Copy.defaultProps = {
  onCopy: undefined,
  style: {},
};

export default Copy;
