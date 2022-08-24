import { IKeyMap } from "../../keyMap";

export interface IInput {
  ListenInputs(Callback: Function): void;
}

export interface IInputFor {
  KeyInput(Callback: Function): void;
}
