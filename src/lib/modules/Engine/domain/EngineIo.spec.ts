import { EngineIo } from './EngineIo';
import { RenderTerminal } from '../../Render/Platforms/terminal';
import { FrameHandler } from '../../Render/FrameRender';
import { InputHandler } from '../../Input/InputHandler';
import { Render } from '../../Render/domain/Render';
import { Input } from '../../Input/domain/Input';
import TerminalInput from '../../Input/Platforms/terminal';

console.clear();

let letter = 'A';
let Commander = false;

const render = () => {
  let final = '';

  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 24; j++) {
      if (Commander) {
        final += `${letter}`;
      } else {
        final += `0`;
      }
    }
  }

  return final;
}

const frameHandler = FrameHandler.Handler((engineIo: EngineIo) => {
  engineIo.render(render(), 24, 16);
})

const inputHandler = InputHandler.Handler((keyPress: string) => {

  if (keyPress === 'a') {
    Commander = true;
  }

  if (keyPress === 'd') {
    Commander = false;
  }
})

new EngineIo({
  fps: 1,
  renderHandler: new Render(new RenderTerminal()),
  frameHandler: frameHandler,
  callBackInput: inputHandler,
  inputHandler: new Input(new TerminalInput())
});