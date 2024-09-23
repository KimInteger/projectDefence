import React from 'react';
import SpawnMonster from './app/spawnMonster';
import { waveInfo } from './static/dataInformation/monster/waveMonsterInformation';
import BasicMap from './static/dataInformation/map/basicMap';

const App: React.FC = () => {
  return (
    <>
      <BasicMap>
        <SpawnMonster hp={waveInfo[1].hp} name={waveInfo[1].name} />
      </BasicMap>
    </>
  );
};

export default App;
