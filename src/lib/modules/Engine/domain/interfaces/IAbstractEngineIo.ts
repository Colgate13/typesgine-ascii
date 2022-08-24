export interface IAbstractIo {
  render(data: string[][] | string): void;
  renderArray(data: string[][]): void;
  renderString(data: string, width: number, height: number): void;
  triggerKeypress(keyName: any): void;
  clear(): void;
  exit(): void;
}