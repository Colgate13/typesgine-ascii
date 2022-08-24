import { FrameHandler } from './Render/FrameRender';
import { EngineIo } from './Engine/domain/EngineIo';
import { EngineIoFactoryProps } from './Engine/domain/interfaces/IEngineIo';
import { Render } from './Render/domain/Render';
import { IRenderFor } from './Render/domain/interfaces/IRender';
import { RenderTerminal } from '../modules/Render/Platforms/terminal/index';
import { BrowserFactory as RenderBrowser } from '../modules/Render/Platforms/browser/index';

import { TerminalInput } from '../modules/Input/Platforms/terminal';
import { BrowserInput } from '../modules/Input/Platforms/browser';

import { Input } from './Input/domain/Input';

export class EngineFactory {

  protected engine: EngineIo;

  constructor(engineIoFactoryProps: EngineIoFactoryProps) {

    this.engine = new EngineIo({
      keypressHandler: engineIoFactoryProps.keypressHandler || (() => {}),
      frameHandler: engineIoFactoryProps.frameHandler || (() => {}),
      fps: engineIoFactoryProps.fps,
      renderHandler: new Render(globalThis.window ? new RenderBrowser() : new RenderTerminal()),
      InputListener: new Input(globalThis.window ? new BrowserInput() : new TerminalInput())
    })
  }

}