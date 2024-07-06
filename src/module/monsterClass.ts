import makeTag from './makeTag';

export class Monster {
  element: HTMLDivElement;
  constructor(name: string, element: HTMLDivElement) {
    this.element = makeTag('div') as HTMLDivElement;
    this.element.textContent = name;
    element.appendChild(this.element);
  }
}
