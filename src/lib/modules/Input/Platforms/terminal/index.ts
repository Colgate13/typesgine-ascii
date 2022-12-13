import { IInputFor } from '../../domain/interfaces/index';
import { getKeyName, IKeyMap } from '../../keyMap';

export class TerminalInput implements IInputFor {

  public KeyInput(Callback: Function): void {
    process.stdin.setRawMode(true);
    process.stdin.on('data', (buffer: Buffer) => {
      const keyName: IKeyMap = getKeyName(buffer.toJSON().data);

      if (keyName.keyName === 'Escape') process.exit();

      Callback(keyName.keyName || 'Unknown');
    });
  }
}

export default TerminalInput;