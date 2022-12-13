import { IRender } from '../../../../shared/interfaces/IRender'
import { EngineIo } from '../EngineIo';
export { IRender } from '../../../../shared/interfaces/IRender'
import { IInput } from '../../../../modules/Input/domain/interfaces/'

export interface EngineIoProps extends EngineIoFactoryProps {
  renderHandler: IRender;
  fps: number;
  frameHandler: (engine: EngineIo) => void;
  callBackInput: (keyPress: string) => void;
  inputHandler: IInput;
}

export interface EngineIoFactoryProps {
  fps: number;
  frameHandler: (engine: EngineIo) => void;
  callBackInput: (keyPress: string) => void;
}