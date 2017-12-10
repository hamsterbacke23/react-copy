## Simplistic copy-to-clipboard component
Works by selecting a string given as a prop and then copies it. Almost no dependencies.

### Usage
```
npm install react-copy --save
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

### Example
For a real world use-case checkout https://github.com/hamsterbacke23/movierater

### Alternatives to this component
Also check out https://github.com/nkbt/react-copy-to-clipboard
