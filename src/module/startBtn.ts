import insertText from './insertText';
import makeTag from './makeTag';
import { startWave } from './startAndEnd';

export function createStart(): HTMLElement {
  const startBtn: HTMLElement = makeTag('button') as HTMLButtonElement;
  insertText(startBtn, 'START');
  startBtn.addEventListener('click', startWave);
  return startBtn;
}
