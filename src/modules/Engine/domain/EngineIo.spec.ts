import { EngineIo } from './EngineIo';
import { RenderTerminal } from '../../Render/RenderTerminal';
import { FrameHandler } from '../../Render/FrameRender';
import { InputHandler } from '../../Input/InputHandler';
import { Render } from '../../Render/domain/Render';

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

const frameHandler = FrameHandler.Handler((engineIo: EngineIo) => {
  engineIo.render(render(), 24, 16);
})

const inputHandler = InputHandler.Handler((engineIo: EngineIo, keyPress: string) => {
  console.log("KeyPress: ", keyPress)
})

new EngineIo({
  fps: 60,
  renderHandler: new Render(new RenderTerminal()),
  frameHandler: frameHandler,
  keypressHandler: inputHandler,
});