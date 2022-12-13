import { IInputFor } from '../../domain/interfaces/index';
import { getKeyName, IKeyMap } from '../../keyMap';

export class BrowserInput implements IInputFor {

  public KeyInput(Callback: Function): void {

    document.addEventListener('keypress', (event) => {
      Callback(event.key);
    });


  }
}

export default BrowserInput;