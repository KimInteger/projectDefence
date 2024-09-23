import React, { useState } from 'react';
import { TowerBuildSeciontProps } from '../../../interface/map/towerBuildInterface';

const TowerBuildSection: React.FC<TowerBuildSeciontProps> = ({
  children,
  buildSpeed,
}) => {
  const [isBuild, setIsBuild] = useState<boolean>(false);

  const handleBuildTower = (): void => {
    setTimeout(() => {
      setIsBuild(true);
    }, buildSpeed);
  };

  return (
    <>
      <div
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid blakc',
          backgroundColor: 'whitesmoke',
        }}
      >
        {isBuild ? (
          children
        ) : (
          <button
            style={{
              width: '50px',
              height: '50px',
              fontSize: '20px',
            }}
            onClick={handleBuildTower}
          >
            버턴을 눌러서 타워 생성
          </button>
        )}
      </div>
    </>
  );
};

export default TowerBuildSection;
