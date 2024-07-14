import { root } from '../element';
import { Monster } from './monsterClass';

let waveInterval: NodeJS.Timeout | null = null;

export function startWave() {
  let count: number = 1;
  waveInterval = setInterval(() => {
    if (count === 41) {
      clearInterval(waveInterval as NodeJS.Timeout);
      waveInterval = null;
    } else {
      let monster = new Monster(`${count}`, root);
      count++;
      monster.move(root);
    }
  }, 1000);
}

export function endWave() {
  if (waveInterval) {
    clearInterval(waveInterval);
    waveInterval = null;
  }
}
