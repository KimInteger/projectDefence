import { BasicTowerProps } from '../../../interface/tower/basicTowerInterfac';

export const towerInfo: { [key: string]: BasicTowerProps } = {
  fire: { atk: 15, name: '불타입', dps: 2 },
  wind: { atk: 12, name: '바람타입', dps: 4 },
  ice: { atk: 13, name: '얼음타입', dps: 3 },
};
