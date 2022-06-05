import { IRender } from '../../../../shared/interfaces/IRender'
import { EngineIo } from '../EngineIo';
export { IRender } from '../../../../shared/interfaces/IRender'

export interface EngineIoProps {
  fps: number;
  renderHandler: IRender;
  frameHandler: (engine: EngineIo) => void;
  keypressHandler: (engine: EngineIo, keyPress: string) => void;
}