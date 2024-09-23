import React, { useEffect, useState } from 'react';
import { SpawnSectionProps } from '../../../interface/map/monsterSpawnInterface';

const SpawnSection: React.FC<SpawnSectionProps> = ({
  children,
  spawnCount,
  spawnSpeed,
}) => {
  const [count, setCount] = useState<number>(0);
  const [spawnedChildren, setSpawnedChildren] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < spawnCount) {
        setCount((prevCount) => prevCount + 1);
        setSpawnedChildren((prevChildren) => [...prevChildren, children]);
      } else {
        clearInterval(intervalId);
      }
    }, spawnSpeed);

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 interval 정리
  }, [count, spawnSpeed, children]);

  return (
    <div
      style={{
        width: '1000px',
        height: '1000px',
        position: 'absolute',
        border: '1px solid black',
        zIndex: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {spawnedChildren.map((child, index) => (
        <div id={`test${index}`} key={index}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default SpawnSection;
