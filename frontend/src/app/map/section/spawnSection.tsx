import React, { useEffect, useState, forwardRef } from 'react';
import { SpawnSectionProps } from '../../../interface/map/monsterSpawnInterface';

type PropsWithPause = SpawnSectionProps & { isPaused: boolean }; // isPaused prop 추가

const SpawnSection = forwardRef<HTMLDivElement, PropsWithPause>(
  ({ children, spawnCount, spawnSpeed, isPaused }, ref) => {
    const [count, setCount] = useState<number>(0);
    const [spawnedChildren, setSpawnedChildren] = useState<React.ReactNode[]>(
      [],
    );

    useEffect(() => {
      if (isPaused) return; // 일시 정지 중이면 아무 동작도 하지 않음

      const intervalId = setInterval(() => {
        if (count < spawnCount) {
          setCount((prevCount) => prevCount + 1);
          setSpawnedChildren((prevChildren) => [...prevChildren, children]);
        } else {
          clearInterval(intervalId);
        }
      }, spawnSpeed);

      return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 interval 정리
    }, [count, spawnSpeed, children, isPaused]); // isPaused가 변경되면 effect 재실행

    return (
      <div
        ref={ref} // ref를 div 요소에 전달
        style={{
          width: '800px',
          height: '800px',
          position: 'absolute',
          border: '1px solid black',
          zIndex: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {spawnedChildren.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
    );
  },
);

export default SpawnSection;
