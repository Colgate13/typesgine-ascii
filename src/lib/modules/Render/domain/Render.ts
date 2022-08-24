import { IRenderFor, IRender } from './interfaces/IRender';

export class Render implements IRender {

  protected Renders: IRenderFor;

  constructor(Renders: IRenderFor) {
    this.Renders = Renders;
  }

  public write(data: string): void { 
    this.Renders.write(data);
  }

  public clear(): void { 
    this.Renders.clear();
  }

  public exit(): void { 
    this.Renders.exit();
  }
}