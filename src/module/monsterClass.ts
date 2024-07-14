import { allStyle } from '../../static/allStyle';
import assginStyle from './assginStyle';
import makeTag from './makeTag';

export class Monster {
  element: HTMLDivElement;
  mapWidth: number;
  mapHeight: number;
  constructor(name: string, element: HTMLElement) {
    this.element = makeTag('div') as HTMLDivElement;
    this.element.textContent = name;
    this.mapWidth = element.clientWidth;
    this.mapHeight = element.clientHeight;
    assginStyle(this.element, allStyle.monsterStyle);
    element.appendChild(this.element);
  }
  move(element: HTMLElement): void {
    let movePoint: number = 0;
    let interval: NodeJS.Timeout;

    interval = setInterval((): void => {
      if (movePoint < this.mapHeight) {
        this.element.style.left = '0px';
        this.element.style.top = `${movePoint}px`;
        movePoint++;
      } else if (movePoint < this.mapWidth + this.mapHeight) {
        this.element.style.left = `${movePoint - this.mapHeight}px`;
        this.element.style.top = `${this.mapHeight}px`;
      } else if (movePoint < 2 * this.mapWidth + this.mapHeight) {
        this.element.style.left = `${this.mapWidth}px`;
        this.element.style.top = `${movePoint - (this.mapWidth + this.mapHeight)}px`;
      } else if (movePoint < 2 * (this.mapWidth + this.mapHeight)) {
        this.element.style.left = `${movePoint - 2 * this.mapWidth + this.mapHeight}px`;
        this.element.style.top = `0px`;
      }

      if (movePoint > 1000) {
        clearInterval(interval);
        element.removeChild(this.element);
      }
    }, 16);
  }
}
