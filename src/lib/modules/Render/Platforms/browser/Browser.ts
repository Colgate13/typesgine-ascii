export interface IBrowser {
  RootElementId?: string,
  data?: string;
}
export const getElementById = (id: string): HTMLElement => {
  
  const IsBrowser = globalThis.window ? true : false;

  if (IsBrowser) {
    
    let element = document.getElementById(id);

    if (!element) {
      element = document.createElement("pre");
      element.id = id;
      document.body.appendChild(element);
    }

    if(!element) {
      throw new Error(`Element by id = ${id} dont exist`);
    }

    return element;

  }


  throw new Error(`You in Terminal`);

};

export class Browser {
  
  static write(value: string): void {
    const domElement: HTMLElement = getElementById('root');

    if (domElement) {
      domElement.innerHTML = domElement.innerHTML + value;
    }
  }

  static clear(): void {
    const domElement: HTMLElement = getElementById('root');

    if (domElement) {
      domElement.innerHTML = '';
    }
  }

}