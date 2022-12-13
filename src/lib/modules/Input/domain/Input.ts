import { IKeyMap } from "../keyMap";
import { IInput, IInputFor } from "./interfaces";

export class Input implements IInput {

  protected KeyInput: IInputFor;

  constructor(KeyInput: IInputFor) {
    this.KeyInput = KeyInput;
  }

  public ListenInputs(Callback: Function): void {
    this.KeyInput.KeyInput(Callback)
  }

}