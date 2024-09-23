import React from 'react';
import SpawnMonster from './app/spawnMonster';
import { waveInfo } from './static/dataInformation/monster/waveMonsterInformation';
import BasicMap from './app/map/basicMap';
import SpawnSection from './app/map/section/spawnSection';
import TowerBuildSection from './app/map/section/towerSection';

const App: React.FC = () => {
  return (
    <>
      <BasicMap>
        <SpawnSection spawnSpeed={1000} spawnCount={20}>
          <SpawnMonster hp={waveInfo[1].hp} name={waveInfo[1].name} />
        </SpawnSection>
        <TowerBuildSection buildSpeed={2000}>
          <div>Tower</div>
        </TowerBuildSection>
      </BasicMap>
    </>
  );
};

export default App;
