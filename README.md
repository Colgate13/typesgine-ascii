<h1 align="center">typesgine-ascii - Render ASCII's into terminal with FPS and I/O</h1>

<p align="center">
  <a href="#about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Examples">Examples</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Funcs">Functions</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

## :notebook: About

<div id="about"></div>

Typesgine is engine render, controll FPS and I/O into terminal. This project can use to create games, menus or beautiful cli programs and MORE

## technologies 🐱‍🏍🎂

<div id="technologies"></div>

- [Node](http://nodejs.org/) - Nodejs
- [typescript](https://www.typescriptlang.org/) - Super Javascript

### Features

<div id="Features"></div>

- [x] [Render](#render)
- [x] [FPS](#fps)
- [x] [IO](#io)

<div id="Funcs"></div>

## Functions

- FrameHandler.Handler

This function is called every frame. It's used to render.
It must execute the render function that needs to receive an Array [][] / [[]] or a String containing the ASCII to be rendered.

If Array [][] / [[]] dont set the width and height of the screen, the engine will set it automatically.

If String set the width and height of the screen.

```typescript
/// typesgine.FrameHandler.Handler(callback(engineIo))

const frameHandler = typesgine.FrameHandler.Handler((engineIo) => {
  engineIo.render("1234", 24, 16);
});

let Graph = [
  ["㊗", "2", "㊗", "㊗", "\n"],
  ["㊗", "㊗", "3", "㊗", "\n"],
  ["㊗", "4", "㊗", "㊗", "\n"],
];

const frameHandler = typesgine.FrameHandler.Handler((engineIo) => {
  engineIo.render(Graph);
});
```

- InputHandler.Handler

It's used to handle the input. this functions get a keypress into keyboard

```typescript
/// typesgine.InputHandler.Handler(callback(engineIo, keyPress))

const inputHandler = typesgine.InputHandler.Handler((engineIo, keyPress) => {
  console.log("KeyPress: ", keyPress);

  if (keyPress === "a") console.log("Moving player");
  if (keyPress === "Escape") process.exit();
});
```

- EngineIo

Main function, with which rendering, fps control and I/O are started

```typescript
new typesgine.EngineIo({
  fps: 60, // Frame per second

  //Set the render handler, use peer default is typesgine.RenderTerminal for terminal.
  renderHandler: new typesgine.Render(new typesgine.RenderTerminal()),

  frameHandler: frameHandler, // - FrameHandler.Handler
  keypressHandler: inputHandler, // - InputHandler.Handler
});
```

- Render

This is handleHlander, use to create a EngineIo for render. This Need to receive a specific renderer, such as the "new typesgine.RenderTerminal()"
```typescript
new typesgine.Render(new typesgine.RenderTerminal())
```

- RenderTerminal

Specific renderer for terminal, for now the only one in the library, we will provide integrations and other specific renderers
```typescript
new typesgine.RenderTerminal()
```

<div id="Examples"></div>

## Exemple

See Folder Exemple in the root of the project to see how to use the engine.

### Simplest exemple using String

```javascript
import typesgine from "typesgine-ascii";

console.clear();

const render = () => {
  let final = "";
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 24; j++) {
      final += `${Math.round(Math.random() * (0 - 9) + 9)}`;
    }
  }

  return final;
};

const frameHandler = typesgine.FrameHandler.Handler((engineIo) => {
  engineIo.render(render(), 24, 16);
});

const inputHandler = typesgine.InputHandler.Handler((engineIo, keyPress) => {
  console.log("KeyPress: ", keyPress);
});

new typesgine.EngineIo({
  fps: 60,
  renderHandler: new typesgine.Render(new typesgine.RenderTerminal()),
  frameHandler: frameHandler,
  keypressHandler: inputHandler,
});
```

### Simplest example using Array

```javascript
import typesgine from "typesgine-ascii";

console.clear();

const render = () => {
  let final = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 24; j++) {
      final[i][j] = Math.round(Math.random() * (0 - 9) + 9);
    }
    final[i][final[i].length - 1] = "\n";
  }

  return final;
};

const frameHandler = typesgine.FrameHandler.Handler((engineIo) => {
  engineIo.render(render(), 24, 16);
});

const inputHandler = typesgine.InputHandler.Handler((engineIo, keyPress) => {
  console.log("KeyPress: ", keyPress);
});

new typesgine.EngineIo({
  fps: 60,
  renderHandler: new typesgine.Render(new typesgine.RenderTerminal()),
  frameHandler: frameHandler,
  keypressHandler: inputHandler,
});
```

## License

<div id="license"></div>

MIT [LICENSE](LICENSE.md)
