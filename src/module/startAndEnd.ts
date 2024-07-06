import { root } from '../element';
import { Monster } from './monsterClass';

let waveInterval: NodeJS.Timeout | null = null;

export function startWave() {
  let count: number = 1;
  waveInterval = setInterval(() => {
    let monster = new Monster(`monsterNum${count}`, root);
    count++;
    monster.move(root);
  }, 1000);
}

export function endWave() {
  if (waveInterval) {
    clearInterval(waveInterval);
    waveInterval = null;
  }
}
