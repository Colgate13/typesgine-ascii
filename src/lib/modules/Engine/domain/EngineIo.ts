import { IInput } from '../../Input/domain/interfaces';
import { getKeyName, IKeyMap } from '../../Input/keyMap';
import { IAbstractIo } from './interfaces/IAbstractEngineIo';
import { EngineIoProps, IRender, } from './interfaces/IEngineIo';

/**
 * @class - EngineIo
 * @implements IAbstractIo
 * 
 * @description This class FPS Manager, render ASCII's and handle keyPresses.
 */

export class EngineIo implements IAbstractIo {
  protected frameDuration: number;
  protected renderHandler: IRender;
  protected inputHandler: IInput;
  protected frameHandler(engine: EngineIo): void { };
  protected callBackInput: (keyPress: string) => void;
  protected intervalId: any;
  protected startTime: number;
  protected active = false;
  protected currentFrameData: string | string[][] = '';

  constructor({ fps, callBackInput, renderHandler, frameHandler, inputHandler }: EngineIoProps) {
    this.frameDuration = Math.round(1000 / fps);
    this.renderHandler = renderHandler;
    this.startTime = new Date().getTime();

    this.frameHandler = frameHandler;
    this.callBackInput = callBackInput;
    this.inputHandler = inputHandler;

    this.initialize();
    setTimeout(() => this.frameHandler(this), 0);
  }

  protected initialize(): void {
    this.input();
    this.intervalId = setInterval(() => this.frameHandler(this), this.frameDuration);
    this.active = true;
  }

  public render(data: string[][] | string, width: number = 0, height: number = 0): void {

    if (this.currentFrameData === data) {
      return;
    }

    this.clear();

    this.renderHandler.write(
      typeof data === 'string'
        ?
        this.renderString(data, width, height)
        :
        this.renderArray(data));

    this.currentFrameData = data;
  }

  public renderArray(dataArray: string[][]): string {
    let fullFrame = '';

    if (!(dataArray.length > 0)) {
      throw new Error('Frame data is not > 0');
    }

    dataArray.forEach((line) => {
      line.forEach((char) => {
        fullFrame += char === '\n' ? '\n' : char;
      })
    })
    return fullFrame;
  }

  public renderString(data: string, width: number, height: number): string {
    let fullFrame = '';
    let index = 0;
    let line: string;

    if (data.length !== width * height) {
      throw new Error('Frame data is not matching drawFrame dimensions');
    }

    for (let y = 0; y < height; y++) {
      line = '';
      for (let x = 0; x < width; x++) {
        line += data[index++];
      }
      fullFrame += (line/* + '\n'*/);
    }
    return fullFrame;
  }

  protected input(): void {
    this.inputHandler.ListenInputs(this.callBackInput)
  }

  public clear(): void {
    this.renderHandler.clear();
  }

  public exit(): void {
    this.active = false;
    this.renderHandler.exit();
  }

  public triggerKeypress(keyName: any): void {

  }
}