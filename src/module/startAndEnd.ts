import { Monster } from './monsterClass';

let waveInterval: NodeJS.Timeout | null = null;

export function startWave() {
  let count: number = 1;
  waveInterval = setInterval(() => {
    let monster = new Monster(
      `monsterNum${count}`,
      document.getElementById('root') as HTMLDivElement,
    );
    count++;
    monster.move(document.getElementById('root') as HTMLDivElement);
  }, 1000);
}

export function endWave() {
  if (waveInterval) {
    clearInterval(waveInterval);
    waveInterval = null;
  }
}
