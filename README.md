## Simplistic copy-to-clipboard component [![Build Status](https://travis-ci.org/hamsterbacke23/react-copy.svg?branch=master)](https://travis-ci.org/hamsterbacke23/react-copy)
Works by selecting a string given as a prop and then copies it. Almost no dependencies.

### Usage
```
npm install react-copy --save
```

or

```
yarn add react-copy
```
```
import Copy from 'react-copy';

...

<Copy textToBeCopied={this.state.text}>
    <button>
      Copy the text please please
    </button>
</Copy>
```

## Properties

#### `textToBeCopied`

Type: `PropTypes.string.isRequired`

The text that should be copied on button click

#### `children`

Type: `PropTypes.element.isRequired`

Exactly one child is required as a click handler for copying, e.g. a button

#### `onCopy`

Type: `PropTypes.func`

A callback function called when copy function is called

#### `style`

Type: `PropTypes.object`

Optional style object


### Example
For a real world use-case checkout https://github.com/hamsterbacke23/movierater

### Alternatives to this component
Also check out
- https://github.com/nkbt/react-copy-to-clipboard
- https://github.com/tableflip/react-copy-text

