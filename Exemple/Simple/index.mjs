import typesgine from 'typesgine-ascii';

console.clear();

const render = () => {
  let final = '';
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 24; j++) {
      final += `${Math.round(Math.random() * (0 - 9) + 9)}`;
    }
  }

  return final;
}

const frameHandler = typesgine.FrameHandler.Handler((engineIo) => {
  engineIo.render(render(), 24, 16);
})

const inputHandler = typesgine.InputHandler.Handler((engineIo, keyPress) => {
  console.log("KeyPress: ", keyPress)
})

new typesgine.EngineIo({
  fps: 60,
  renderHandler: new typesgine.Render(new typesgine.RenderTerminal()),
  frameHandler: frameHandler,
  keypressHandler: inputHandler,
});