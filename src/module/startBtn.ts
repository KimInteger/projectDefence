import { mainMap } from './mainMap';
import makeTag from './makeTag';
import { startWave } from './startAndEnd';
import { timer } from './timer';

export function createStart(): HTMLElement {
  const startBtn: HTMLElement = makeTag('button', 'START') as HTMLButtonElement;
  const moveMap = mainMap();
  const root: HTMLElement = document.getElementById('root') as HTMLDivElement;
  root.appendChild(moveMap);
  startBtn.addEventListener('click', function () {
    startWave(moveMap);
    timer();
    let interval: NodeJS.Timeout;
    interval = setInterval(() => {
      startWave(moveMap);
    }, 60000);
  });
  return startBtn;
}
