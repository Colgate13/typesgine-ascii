import { Render, RenderTerminal } from '../../main';
import { EngineIo } from './domain/EngineIo';
import { EngineIoFactoryProps } from './domain/interfaces/IEngineIo';

export class EngineFactory {

  protected engine: EngineIo;

  constructor(engineIoFactoryProps: EngineIoFactoryProps) {
    this.engine = new EngineIo({
      keypressHandler: engineIoFactoryProps.keypressHandler || (() => {}),
      frameHandler: engineIoFactoryProps.frameHandler || (() => {}),
      fps: engineIoFactoryProps.fps,
      renderHandler: new Render(new RenderTerminal())
    })
  }

  
}