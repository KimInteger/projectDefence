import { BasicMonsterProp } from '../../interface/monster/basicMonsterInterface';

class BasicMonster implements BasicMonsterProp {
  hp: number;
  name: string;

  constructor(hp: number, name: string) {
    this.hp = hp;
    this.name = name;
  }
}
