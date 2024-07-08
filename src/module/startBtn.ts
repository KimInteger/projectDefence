import makeTag from './makeTag';
import { startWave } from './startAndEnd';

export function createStart(): HTMLElement {
  const startBtn: HTMLElement = makeTag('button', 'START') as HTMLButtonElement;
  startBtn.addEventListener('click', function () {
    startWave();
    let interval: NodeJS.Timeout;
    interval = setInterval(() => {
      startWave();
    }, 60000);
  });
  return startBtn;
}
