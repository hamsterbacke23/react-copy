let clipboard = '';
let selection = '';

function __setSelection(text) {
  selection = text;
}

function __getClipboard() {
  return clipboard;
}

function execCommand(cmd) {
  if (cmd === 'copy') {
    clipboard = selection;
  }
}

Object.defineProperty(document, 'execCommand', {
  value: execCommand
});
Object.defineProperty(document, '__setSelection', {
  value: __setSelection
});
Object.defineProperty(document, '__getClipboard', {
  value: __getClipboard
});
