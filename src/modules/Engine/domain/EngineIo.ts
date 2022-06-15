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
  protected frameHandler(engine: EngineIo): void { };
  protected keypressHandler: (engine: EngineIo, keyPress: string) => void;
  protected intervalId: any;
  protected startTime: number;
  protected active = false;
  protected currentFrameData: string | string[][] = '';


  constructor({ fps, keypressHandler, renderHandler, frameHandler }: EngineIoProps) {
    this.frameDuration = Math.round(1000 / fps);
    this.renderHandler = renderHandler;
    this.startTime = new Date().getTime();

    this.frameHandler = frameHandler;
    this.keypressHandler = keypressHandler;

    this.initialize();
    setTimeout(() => this.frameHandler(this), 0);
  }

  protected initialize(): void {
    this.inputHandler();
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

  public clear(): void {
    this.renderHandler.clear();
  }

  public exit(): void {
    this.active = false;
    process.stdin.removeAllListeners();
    process.exit();
  }

  protected inputHandler(): void {
    process.stdin.setRawMode(true);
    process.stdin.on('data', (buffer: Buffer) => {

      const keyName: IKeyMap = getKeyName(buffer.toJSON().data);

      if (keyName.keyName === 'Escape') process.exit();

      this.keypressHandler(this, keyName.keyName);
    });
  }

  public triggerKeypress(keyName: any): void {

  }
}