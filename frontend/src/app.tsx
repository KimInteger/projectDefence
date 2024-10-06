import React, { useState, useEffect, useRef } from 'react';
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
  const [spawnSectionChildCount, setSpawnSectionChildCount] =
    useState<number>(0);

  // SpawnSection의 ref 설정
  const spawnSectionRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const spawnSectionElement = spawnSectionRef.current;
    if (!spawnSectionElement) return;

    // 초기 자식 수 설정
    setSpawnSectionChildCount(spawnSectionElement.children.length);

    // MutationObserver 설정
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        // 자식 요소가 변경될 때마다 상태 업데이트
        setSpawnSectionChildCount(spawnSectionElement.children.length);
      });
    });

    // 관찰할 옵션 설정: 자식 노드의 추가/제거 변화 감지
    observer.observe(spawnSectionElement, { childList: true });

    // 컴포넌트 언마운트 시 옵저버 해제
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        style={{
          width: '70vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <BasicMap>
          <SpawnSection ref={spawnSectionRef} spawnSpeed={1000} spawnCount={20}>
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
          width: '30vw',
          height: '100vh',
          backgroundColor: 'red',
        }}
      >
        <PlayerControlSection clickedElementInfo={clickedElementInfo}>
          <p>SpawnSection 자식 수: {spawnSectionChildCount}</p>
        </PlayerControlSection>
      </div>
    </>
  );
};

export default App;
