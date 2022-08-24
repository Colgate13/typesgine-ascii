import { EngineIo } from "../../shared/interfaces/IEngine";

export class InputHandler {
  static Handler(callback: (keyPress: string) => void): (keyPress: string) => void {
    return callback;
  };
}