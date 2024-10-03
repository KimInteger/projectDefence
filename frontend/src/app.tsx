import React, { useState, useEffect } from 'react';
import SpawnMonster from './app/spawnMonster';
import { waveInfo } from './static/dataInformation/monster/waveMonsterInformation';
import BasicMap from './app/map/basicMap';
import SpawnSection from './app/map/section/spawnSection';
import TowerBuildSection from './app/map/section/towerSection';
import BuildTower from './app/buildTower';
import { towerInfo } from './static/dataInformation/tower/towerInfo';
import PlayerControlSection from './app/map/section/playerSection';

const App: React.FC = () => {
  // 클릭된 요소의 정보를 관리하는 상태
  const [clickedElementInfo, setClickedElementInfo] = useState<string | null>(
    null,
  );
  useEffect(() => {
    // 클릭 이벤트 핸들러 정의
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      setClickedElementInfo(target.innerHTML);
    };

    // document에 클릭 이벤트 리스너 추가
    document.addEventListener('click', handleDocumentClick);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <>
      <div
        style={{
          width: '80vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <BasicMap>
          <SpawnSection spawnSpeed={1000} spawnCount={20}>
            <SpawnMonster hp={waveInfo[1].hp} name={waveInfo[1].name} />
          </SpawnSection>
          <TowerBuildSection buildSpeed={2000}>
            <BuildTower
              atk={towerInfo['fire'].atk}
              name={towerInfo['fire'].name}
              dps={towerInfo['fire'].dps}
              targetClass={waveInfo[1].name}
            />
          </TowerBuildSection>
        </BasicMap>
      </div>
      <div
        id="PlayerSection"
        style={{
          width: '20vw',
          height: '100vh',
          backgroundColor: 'red',
        }}
      >
        <PlayerControlSection clickedElementInfo={clickedElementInfo}>
          <p>이곳은 일단은 그거 뭐냐 그거다.</p>
        </PlayerControlSection>
      </div>
    </>
  );
};

export default App;
