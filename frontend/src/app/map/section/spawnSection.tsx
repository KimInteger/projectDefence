import React, { useEffect, useState, forwardRef } from 'react';
import { SpawnSectionProps } from '../../../interface/map/monsterSpawnInterface';

const SpawnSection = forwardRef<HTMLDivElement, SpawnSectionProps>(
  ({ children, spawnCount, spawnSpeed, isPaused }, ref) => {
    const [count, setCount] = useState<number>(0);
    const [spawnedChildren, setSpawnedChildren] = useState<React.ReactNode[]>(
      [],
    );

    useEffect(() => {
      if (isPaused) return;

      const intervalId = setInterval(() => {
        if (count < spawnCount) {
          setCount((prevCount) => prevCount + 1);
          setSpawnedChildren((prevChildren) => [...prevChildren, children]);
        } else {
          clearInterval(intervalId);
        }
      }, spawnSpeed);

      return () => clearInterval(intervalId);
    }, [count, spawnSpeed, children, isPaused]);

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
