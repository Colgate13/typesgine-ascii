import { EngineIo } from './Engine/domain/EngineIo';
import { EngineIoFactoryProps } from './Engine/domain/interfaces/IEngineIo';
import { Render } from './Render/domain/Render';
import { RenderTerminal } from '../modules/Render/Platforms/terminal/index';
import { BrowserFactory as RenderBrowser } from '../modules/Render/Platforms/browser/index';

import { TerminalInput } from '../modules/Input/Platforms/terminal';
import { BrowserInput } from '../modules/Input/Platforms/browser';

import { Input } from './Input/domain/Input';

export class EngineFactory {

  protected engine: EngineIo;

  constructor(engineIoFactoryProps: EngineIoFactoryProps) {
    this.engine = new EngineIo({
      fps: engineIoFactoryProps.fps,
      frameHandler: engineIoFactoryProps.frameHandler || (() => { }),
      callBackInput: engineIoFactoryProps.callBackInput || (() => { }),
      renderHandler: new Render(globalThis.window ? new RenderBrowser() : new RenderTerminal()),
      inputHandler: new Input(globalThis.window ? new BrowserInput() : new TerminalInput())
    })
  }

}