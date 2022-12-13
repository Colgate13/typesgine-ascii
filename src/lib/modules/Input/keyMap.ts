// Get base logic for Robert Rypuła and add new keys
// Copyright (c) 2018 Robert Rypuła - https://github.com/robertrypula/terminal-game-io
// License: MIT

export type KeyName = IKeyMap;

export interface IKeyMap {
  data: number[][];
  keyName: string;
}

export const Key = {
  Unknown: '',

  // Letters Lowercase
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
  e: 'e',
  f: 'f',
  g: 'g',
  h: 'h',
  i: 'i',
  j: 'j',
  k: 'k',
  l: 'l',
  m: 'm',
  n: 'n',
  o: 'o',
  p: 'p',
  q: 'q',
  r: 'r',
  s: 's',
  t: 't',
  u: 'u',
  v: 'v',
  w: 'w',
  x: 'x',
  y: 'y',
  z: 'z',

  // Letters Uppercase
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G',
  H: 'H',
  I: 'I',
  J: 'J',
  K: 'K',
  L: 'L',
  M: 'M',
  N: 'N',
  O: 'O',
  P: 'P',
  Q: 'Q',
  R: 'R',
  S: 'S',
  T: 'T',
  U: 'U',
  V: 'V',
  W: 'W',
  X: 'X',
  Y: 'Y',
  Z: 'Z',

  // numbers
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '=',
  Backquote: '`',

  // symbols
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  Semicolon: ';',
  Quote: '\'',
  Comma: ',',
  Period: '.',
  Slash: '/',

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

  // letters lowercase
  { data: [[97]], keyName: Key.a },
  { data: [[98]], keyName: Key.b },
  { data: [[99]], keyName: Key.c },
  { data: [[100]], keyName: Key.d },
  { data: [[101]], keyName: Key.e },
  { data: [[102]], keyName: Key.f },
  { data: [[103]], keyName: Key.g },
  { data: [[104]], keyName: Key.h },
  { data: [[105]], keyName: Key.i },
  { data: [[106]], keyName: Key.j },
  { data: [[107]], keyName: Key.k },
  { data: [[108]], keyName: Key.l },
  { data: [[109]], keyName: Key.m },
  { data: [[110]], keyName: Key.n },
  { data: [[111]], keyName: Key.o },
  { data: [[112]], keyName: Key.p },
  { data: [[113]], keyName: Key.q },
  { data: [[114]], keyName: Key.r },
  { data: [[115]], keyName: Key.s },
  { data: [[116]], keyName: Key.t },
  { data: [[117]], keyName: Key.u },
  { data: [[118]], keyName: Key.v },
  { data: [[119]], keyName: Key.w },
  { data: [[120]], keyName: Key.x },
  { data: [[121]], keyName: Key.y },
  { data: [[122]], keyName: Key.z },

  // letters uppercase
  { data: [[65]], keyName: Key.A },
  { data: [[66]], keyName: Key.B },
  { data: [[67]], keyName: Key.C },
  { data: [[68]], keyName: Key.D },
  { data: [[69]], keyName: Key.E },
  { data: [[70]], keyName: Key.F },
  { data: [[71]], keyName: Key.G },
  { data: [[72]], keyName: Key.H },
  { data: [[73]], keyName: Key.I },
  { data: [[74]], keyName: Key.J },
  { data: [[75]], keyName: Key.K },
  { data: [[76]], keyName: Key.L },
  { data: [[77]], keyName: Key.M },
  { data: [[78]], keyName: Key.N },
  { data: [[79]], keyName: Key.O },
  { data: [[80]], keyName: Key.P },
  { data: [[81]], keyName: Key.Q },
  { data: [[82]], keyName: Key.R },
  { data: [[83]], keyName: Key.S },
  { data: [[84]], keyName: Key.T },
  { data: [[85]], keyName: Key.U },
  { data: [[86]], keyName: Key.V },
  { data: [[87]], keyName: Key.W },
  { data: [[88]], keyName: Key.X },
  { data: [[89]], keyName: Key.Y },
  { data: [[90]], keyName: Key.Z },

  // numbers
  { data: [[49]], keyName: Key.Digit1 },
  { data: [[50]], keyName: Key.Digit2 },
  { data: [[51]], keyName: Key.Digit3 },
  { data: [[52]], keyName: Key.Digit4 },
  { data: [[53]], keyName: Key.Digit5 },
  { data: [[54]], keyName: Key.Digit6 },
  { data: [[55]], keyName: Key.Digit7 },
  { data: [[56]], keyName: Key.Digit8 },
  { data: [[57]], keyName: Key.Digit9 },
  { data: [[48]], keyName: Key.Digit0 },

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