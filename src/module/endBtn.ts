import makeTag from './makeTag';
import { endWave } from './startAndEnd';

export function createEnd(): HTMLElement {
  const endBtn: HTMLElement = makeTag('button', 'End') as HTMLButtonElement;
  endBtn.addEventListener('click', endWave);
  return endBtn;
}
