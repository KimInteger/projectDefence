import { BasicTowerProps } from '../../interface/tower/basicTowerInterfac';

class BasicTower implements BasicTowerProps {
  atk: number;
  name: string;
  dps: number;

  constructor(atk: number, name: string, dps: number) {
    this.atk = atk;
    this.name = name;
    this.dps = dps;
  }
}
