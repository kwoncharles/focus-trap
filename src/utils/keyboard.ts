type KeyList = 'backspace' | 'enter' | 'spaceBar' | 'arrowDown' | 'esc' | 'escape' | 'tab' | 'shift';

export const keyNames: Record<KeyList, string> = {
  backspace: 'Backspace',
  enter: 'Enter',
  spaceBar: ' ',
  arrowDown: 'ArrowDown',
  // IE 혹은 Firefox 36 아래 버전에는 'Esc'가 아니라 'Escape'를 사용
  esc: 'Esc',
  escape: 'Escape',
  tab: 'Tab',
  shift: 'Shift',
};

export const keyCodes: Record<KeyList, number> = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  esc: 27,
  escape: 27,
  spaceBar: 32,
  arrowDown: 40,
};
