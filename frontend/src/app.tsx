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
  const [clickedElementInfo, setClickedElementInfo] = useState<string | null>(
    null,
  );
  const [spawnSectionChildCount, setSpawnSectionChildCount] =
    useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isDefeated, setIsDefeated] = useState<boolean>(false);

  const spawnSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      setClickedElementInfo(target.innerHTML);
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const spawnSectionElement = spawnSectionRef.current;
    if (!spawnSectionElement) return;

    setSpawnSectionChildCount(spawnSectionElement.children.length);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        setSpawnSectionChildCount(spawnSectionElement.children.length);
      });
    });

    observer.observe(spawnSectionElement, { childList: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  // 자식 수가 15를 넘으면 일시 정지 및 패배 상태로 설정
  useEffect(() => {
    if (spawnSectionChildCount > 15) {
      setIsPaused(true);
      setIsDefeated(true);
    }
  }, [spawnSectionChildCount]);

  // 다시하기 버튼 클릭 시 초기화
  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <>
      {isDefeated ? (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            fontSize: '2rem',
          }}
        >
          <p>패배하였습니다!</p>
          <button
            onClick={handleRestart}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              fontSize: '1.5rem',
              cursor: 'pointer',
            }}
          >
            다시하기
          </button>
        </div>
      ) : (
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
              <SpawnSection
                ref={spawnSectionRef}
                spawnSpeed={1000}
                spawnCount={20}
                isPaused={isPaused} // 일시 정지 상태 전달
              >
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
      )}
    </>
  );
};

export default App;
