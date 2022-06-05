import { IRenderFor } from './domain/interfaces/IRender';

const CSI = String.fromCharCode(27) + '[';

export const cursorPosition = (x: number, y: number) => `${CSI}${y + 1};${y + 1}H`;

export class RenderTerminal implements IRenderFor{
  public write(data: string): void {
    process.stdout.write(data);
  }

  public clear(): void {
    process.stdout.write(cursorPosition(0,0));
  }
}