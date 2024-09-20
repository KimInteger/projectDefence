import { root } from '../element';

export function timer(): void {
  let timer: NodeJS.Timeout;

  let timeCount: number = 60;

  const timeDiv: HTMLElement = document.createElement('div') as HTMLDivElement;
  timeDiv.textContent = `${timeCount}`;
  root.appendChild(timeDiv);

  timer = setInterval(() => {
    if (timeCount === 0) {
      timeCount = 60;
    }
    timeDiv.textContent = `${timeCount}`;
    timeCount--;
  }, 1000);
}
