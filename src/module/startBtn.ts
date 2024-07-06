import makeTag from './makeTag';
import { startWave } from './startAndEnd';

export function createStart(): HTMLElement {
  const startBtn: HTMLElement = makeTag('button', 'START') as HTMLButtonElement;
  startBtn.addEventListener('click', startWave);
  return startBtn;
}
