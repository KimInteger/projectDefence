import { BasicMapProps } from './basicMapInterface';

export interface SpawnSectionProps extends BasicMapProps {
  spawnSpeed: number;
  spawnCount: number;
  isPaused: boolean;
}
