<h1 align="center">typesgine-ascii - Game ASCII engine for terminal</h1>

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

Typesgine is engine for create games ascii into terminal with IO, FPS and render.

## technologies 🐱‍🏍🎂

<div id="technologies"></div>

- [Node](http://nodejs.org/) - Nodejs
- [typescript](https://www.typescriptlang.org/) - Super Javascript

### Features

<div id="Features"></div>

- [x] [FPS](#fps)
- [x] [IO](#io)
- [x] [Render](#render)

<div id="Funcs"></div>

## Functions

- FrameHandler.Handler

This function is called every frame. It's used to render the game.
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

It's used to handle the input. Because this function return a Keypress

```typescript
/// typesgine.InputHandler.Handler(callback(engineIo, keyPress))

const inputHandler = typesgine.InputHandler.Handler((engineIo, keyPress) => {
  console.log("KeyPress: ", keyPress);

  if (keyPress === "a") console.log("Moving player");
  if (keyPress === "Escape") process.exit();
});
```

- EngineIo

It's used to handle the input. Because this function return a Keypress

```typescript
new typesgine.EngineIo({
  fps: 60, // Frame per second

  //Set the render handler, use peer default is typesgine.RenderTerminal for terminal.
  renderHandler: new typesgine.Render(new typesgine.RenderTerminal()),

  frameHandler: frameHandler, // - FrameHandler.Handler
  keypressHandler: inputHandler, // - InputHandler.Handler
});
```

<div id="Examples"></div>

## Exemple

See Folder Exemple in the root of the project to see how to use the engine.

### Simplest example

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

### Simplest example, using Arrays for render

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
