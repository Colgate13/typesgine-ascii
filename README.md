<h1 align="center">typesgine-ascii - Render ASCII's into terminal with FPS and I/O</h1>

<p align="center">
  <a href="#about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Use">Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Examples">Examples</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Funcs">Functions</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

## :notebook: About

<div id="about"></div>

Typesgine is engine render, controll FPS and I/O into Terminal or Browser. This project can use to create games, menus or beautiful cli programs and MORE

### Use

<div id="Use"></div>

### NPM - Backend

```bash
npm i typesgine-ascii
```
### Static - Frontend

```
<script src="https://unpkg.com/typesgine-ascii@2.0.0/dist/main.js"></script>
```

## technologies 🐱‍🏍🎂

<div id="technologies"></div>

- [Node](http://nodejs.org/) - Nodejs
- [typescript](https://www.typescriptlang.org/) - Super Javascript

### Features

<div id="Features"></div>

- [x] [Render](#render)
- [x] [FPS](#fps)
- [x] [IO](#io)
- [x] [CrossPlatform](#html) -> Use in Terminal or Browser

<div id="Examples"></div>

## Exemple

See Folder Exemple in the root of the project to see how to use the engine.

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
const frameHandler = (engineIo) => {
  engineIo.render(render(), 24, 16);
};

const inputHandler = (keyPress) => {
  console.log("KeyPress: ", keyPress);
};

new typesgine.EngineIo({
  fps: 60,
  frameHandler: frameHandler,
  callBackInput: inputHandler,
});
```

### Simplest example using String

```typescript
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

const frameHandler = (engineIo) => {
  engineIo.render(render(), 24, 16);
};

const inputHandler = (keyPress) => {
  console.log("KeyPress: ", keyPress);
};

new typesgine.EngineIo({
  fps: 60,
  frameHandler: frameHandler,
  callBackInput: inputHandler,
});
```

### Html Exemple

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Typesgine</title>
</head>
<body>
  <h1>Clique no "A" para mudar a renderizaçao</h1>
  <h1>Clique no "B" para mudar a renderizaçao</h1>
  <script src="https://unpkg.com/typesgine-ascii@2.0.0/dist/main.js"></script>
  <script>

console.clear();
let controllerToRender = false;

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
    final[i][final[i].length - 1] = '\n';
  }

  let Graph = [
    ["~", "2", "㊗", "㊗", "\n"],
    ["㊗", "㊗", "㊗", "㊗", "\n"],
    ["㊗", "㊗", "㊗", "㊗", "\n"],
  ];

  return final;
}

const frameHandler = ((engineIo) => {
  engineIo.render(controllerToRender ? render() : "㊗2㊗㊗㊗㊗3㊗㊗4㊗㊗", 3, 4);
});

const inputHandler = (keyPress) => {
  if (keyPress == "a") {
    console.clear()
    controllerToRender = true;
  }

  if (keyPress == "b") {
    console.clear()
    controllerToRender = false;
  }

  console.log("KeyPress: ", keyPress)

}

new TypesgineAscii.EngineIo({
  fps: 60,
  frameHandler: frameHandler,
  callBackInput: inputHandler,
});

  </script>
</body>
</html>
```

### Use with typescript

```typescript
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

const inputHandler = typesgine.InputHandler.Handler((keyPress) => {
  console.log("KeyPress: ", keyPress);
});

new typesgine.EngineIo({
  fps: 60,
  frameHandler: frameHandler,
  callBackInput: inputHandler,
});
```

<div id="Funcs"></div>

## Functions

- EngineIo

Main function, with which rendering, fps control and I/O are started

```typescript
new typesgine.EngineIo({
  fps: 60, // Frame per second
  frameHandler: frameHandler, // - FrameHandler.Handler
  callBackInput: inputHandler, // - InputHandler.Handler
});
```

- FrameHandler.Handler

This function is called every frame. It's used to render.
It must execute the render function that needs to receive an Array [][] / [[]] or a String containing the ASCII to be rendered.

If Array [][] / [[]] dont set the width and height of the screen, the engine will set it automatically.

If String set the width and height of the screen.

```typescript
/// FrameHandler.Handler(callback(engineIo))

const frameHandler = (engineIo) => {
  engineIo.render("1234", 1, 4);
};

let Graph = [
  ["㊗", "2", "㊗", "㊗", "\n"],
  ["㊗", "㊗", "3", "㊗", "\n"],
  ["㊗", "4", "㊗", "㊗", "\n"],
];

const frameHandler = (engineIo) => {
  engineIo.render(Graph);
};
```

- InputHandler.Handler

It's used to handle the input. this functions get a keypress into keyboard

```typescript
/// InputHandler.Handler(callback(keyPress))

const inputHandler = (keyPress) => {
  console.log("KeyPress: ", keyPress);

  if (keyPress === "a") console.log("Moving player");
  if (keyPress === "Escape") process.exit();
};
```


## License

<div id="license"></div>

MIT [LICENSE](LICENSE.md)
