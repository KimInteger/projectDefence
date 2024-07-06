import assginStyle from './assginStyle';
import makeTag from './makeTag';

export class Monster {
  element: HTMLDivElement;
  constructor(name: string, element: HTMLElement) {
    this.element = makeTag('div') as HTMLDivElement;
    this.element.textContent = name;
    assginStyle(this.element);
    element.appendChild(this.element);
  }
  move(element: HTMLElement): void {
    let movePoint: number = 0;
    let interval: NodeJS.Timeout;
    interval = setInterval((): void => {
      if (movePoint === 0) {
        this.element.style.right = `${movePoint}px`;
      } else if (movePoint > 1000) {
        clearInterval(interval);
        element.removeChild(this.element);
      } else {
        movePoint++;
        this.element.style.right = `${movePoint}px`;
      }
    }, 16);
  }
}
