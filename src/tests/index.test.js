import Copy from '../index.js';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

const textToBeCopied = 'blablub!@#$$#$@!';

const component = shallow(
  <Copy textToBeCopied={textToBeCopied}>
    <button>copyme</button>
  </Copy>
);

test('Component contains given text', () => {
  expect(component.contains(textToBeCopied)).toEqual(true);
});

test('Component copies text to clipboard', () => {
  document.__setSelection(textToBeCopied); // fake selection
  component.instance().copy();
  expect(component.contains(textToBeCopied)).toEqual(true);
  expect(document.__getClipboard()).toEqual(textToBeCopied);
});
