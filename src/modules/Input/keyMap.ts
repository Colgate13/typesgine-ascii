// Get base logic for Robert Rypuła and add new keys
// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/terminal-game-io
// License: MIT

export type KeyName = IKeyMap;

export interface IKeyMap {
  data: number[][];
  keyName: string;
}

const Key = {
  Unknown: '',

  // Letters
  q: 'q',
  w: 'w',
  e: 'e',
  r: 'r',
  t: 't',
  y: 'y',
  u: 'u',
  i: 'i',
  o: 'o',
  p: 'p',
  a: 'a',
  s: 's',
  d: 'd',
  f: 'f',
  g: 'g',
  h: 'h',
  j: 'j',
  k: 'k',
  l: 'l',
  z: 'z',
  x: 'x',
  c: 'c',
  v: 'v',
  b: 'b',
  n: 'n',
  m: 'm',


  // other Ascii
  Backspace: 'Backspace',
  Tab: 'Tab',
  Enter: 'Enter',
  Escape: 'Escape',
  Space: 'Space',
  Delete: 'Delete',

  // arrows
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowRight: 'ArrowRight',
  ArrowLeft: 'ArrowLeft',

  // cursor position
  Home: 'Home',
  Insert: 'Insert',
  End: 'End',
  PageUp: 'PageUp',
  PageDown: 'PageDown',

  // functional
  F1: 'F1',
  F2: 'F2',
  F3: 'F3',
  F4: 'F4',
  F5: 'F5',
  F6: 'F6',
  F7: 'F7',
  F8: 'F8',
  F9: 'F9',
  F10: 'F10',
  F11: 'F11',
  F12: 'F12'
}

export const getKeyName = (data: number[]): IKeyMap => {
  let match: IKeyMap[];

  match = keyMap.filter((entry) => {
    const innerResult = entry.data.filter((subEntry) => subEntry.join(',') === data.join(','));

    return innerResult.length > 0;
  });

  if (match.length === 1) {
    return match[0];
  }

  return {
    data: [],
    keyName: Key.Unknown
  };
};

export const keyMap: IKeyMap[] = [

  // letters
  { data: [[113]], keyName: Key.q },
  { data: [[119]], keyName: Key.w },
  { data: [[101]], keyName: Key.e },
  { data: [[114]], keyName: Key.r },
  { data: [[116]], keyName: Key.t },
  { data: [[121]], keyName: Key.y },
  { data: [[117]], keyName: Key.u },
  { data: [[105]], keyName: Key.i },
  { data: [[111]], keyName: Key.o },
  { data: [[112]], keyName: Key.p },
  { data: [[97]], keyName: Key.a },
  { data: [[115]], keyName: Key.s },
  { data: [[100]], keyName: Key.d },
  { data: [[102]], keyName: Key.f },
  { data: [[103]], keyName: Key.g },
  { data: [[104]], keyName: Key.h },
  { data: [[106]], keyName: Key.j },
  { data: [[107]], keyName: Key.k },
  { data: [[108]], keyName: Key.l },
  { data: [[122]], keyName: Key.z },
  { data: [[120]], keyName: Key.x },
  { data: [[99]], keyName: Key.c },
  { data: [[118]], keyName: Key.v },
  { data: [[98]], keyName: Key.b },
  { data: [[110]], keyName: Key.n },
  { data: [[109]], keyName: Key.m },

  // other ASCII
  { data: [[8], [127]], keyName: Key.Backspace }, // ssh connection via putty generates 127 for Backspace - weird...
  { data: [[9]], keyName: Key.Tab },
  { data: [[13]], keyName: Key.Enter },
  { data: [[27]], keyName: Key.Escape },
  { data: [[32]], keyName: Key.Space },
  { data: [[27, 91, 51, 126]], keyName: Key.Delete },
  // arrows
  { data: [[27, 91, 65]], keyName: Key.ArrowUp },
  { data: [[27, 91, 66]], keyName: Key.ArrowDown },
  { data: [[27, 91, 67]], keyName: Key.ArrowRight },
  { data: [[27, 91, 68]], keyName: Key.ArrowLeft },
  // cursor position
  { data: [[27, 91, 49, 126]], keyName: Key.Home },
  { data: [[27, 91, 50, 126]], keyName: Key.Insert },
  { data: [[27, 91, 52, 126]], keyName: Key.End },
  { data: [[27, 91, 53, 126]], keyName: Key.PageUp },
  { data: [[27, 91, 54, 126]], keyName: Key.PageDown },
  // functional
  { data: [[27, 91, 91, 65], [27, 91, 49, 49, 126]], keyName: Key.F1 },
  { data: [[27, 91, 91, 66], [27, 91, 49, 50, 126]], keyName: Key.F2 },
  { data: [[27, 91, 91, 67], [27, 91, 49, 51, 126]], keyName: Key.F3 },
  { data: [[27, 91, 91, 68], [27, 91, 49, 52, 126]], keyName: Key.F4 },
  { data: [[27, 91, 91, 69], [27, 91, 49, 53, 126]], keyName: Key.F5 },
  { data: [[27, 91, 49, 55, 126]], keyName: Key.F6 },
  { data: [[27, 91, 49, 56, 126]], keyName: Key.F7 },
  { data: [[27, 91, 49, 57, 126]], keyName: Key.F8 },
  { data: [[27, 91, 50, 48, 126]], keyName: Key.F9 },
  { data: [[27, 91, 50, 49, 126]], keyName: Key.F10 },
  { data: [[27, 91, 50, 51, 126]], keyName: Key.F11 },
  { data: [[27, 91, 50, 52, 126]], keyName: Key.F12 }
];