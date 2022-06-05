import { EngineIo } from "../../shared/interfaces/IEngine";

export class InputHandler {
  static Handler(callback: (engineIo: EngineIo, keyPress: string) => void): (engine: EngineIo, keyPress: string) => void {
    return callback;
  };
}