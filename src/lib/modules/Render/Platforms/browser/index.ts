import { Browser } from './Browser';
import { IRenderFor } from '../../domain/interfaces/IRender';

export class BrowserFactory extends Browser implements IRenderFor  {

  public write(data: string): void {
    Browser.write(data);
  }

  public clear(): void {
    Browser.clear();
  }

  public exit(): void {
    console.log("exit")
  }

}

export default BrowserFactory;