import { root } from '../element';
import { Monster } from './monsterClass';

let waveInterval: NodeJS.Timeout | null = null;

export function startWave(parent: HTMLElement) {
  let count: number = 1;
  waveInterval = setInterval(() => {
    if (count === 41) {
      clearInterval(waveInterval as NodeJS.Timeout);
      waveInterval = null;
    } else {
      let monster = new Monster(`${count}`, parent);
      count++;
      monster.move(parent);
    }
  }, 1000);
}

export function endWave() {
  if (waveInterval) {
    clearInterval(waveInterval);
    waveInterval = null;
  }
}
