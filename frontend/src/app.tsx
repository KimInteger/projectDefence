import React from 'react';
import SpawnMonster from './app/spawnMonster';
import { waveInfo } from './static/dataInformation/monster/waveMonsterInformation';

const App: React.FC = () => {
  return (
    <>
      <SpawnMonster hp={waveInfo[1].hp} name={waveInfo[1].name} />
    </>
  );
};

export default App;
