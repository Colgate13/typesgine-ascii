import { EngineIo } from "../../shared/interfaces/IEngine";

export class FrameHandler {
  static Handler(callback: (engineIo: EngineIo) => void): (engine: EngineIo) => void {
    return callback;
  };
}