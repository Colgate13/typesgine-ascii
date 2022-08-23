import { IRender } from '../../../../shared/interfaces/IRender'
import { EngineIo } from '../EngineIo';
export { IRender } from '../../../../shared/interfaces/IRender'

export interface EngineIoProps extends EngineIoFactoryProps {
  renderHandler: IRender;
  fps: number;
  frameHandler: (engine: EngineIo) => void;
  keypressHandler: (engine: EngineIo, keyPress: string) => void;
}

export interface EngineIoFactoryProps {
  fps: number;
  frameHandler: (engine: EngineIo) => void;
  keypressHandler: (engine: EngineIo, keyPress: string) => void;
}