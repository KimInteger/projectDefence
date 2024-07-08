import makeTag from './makeTag';
import { startWave } from './startAndEnd';
import { timer } from './timer';

export function createStart(): HTMLElement {
  const startBtn: HTMLElement = makeTag('button', 'START') as HTMLButtonElement;
  startBtn.addEventListener('click', function () {
    startWave();
    timer();
    let interval: NodeJS.Timeout;
    interval = setInterval(() => {
      startWave();
    }, 60000);
  });
  return startBtn;
}
