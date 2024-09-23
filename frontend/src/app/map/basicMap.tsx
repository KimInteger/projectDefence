import React from 'react';
import { BasicMapProps } from '../../interface/map/basicMapInterface';

const BasicMap: React.FC<BasicMapProps> = ({ children }) => {
  return (
    <>
      <div
        style={{
          width: '1000px',
          height: '1000px',
          position: 'absolute',
          border: '1px solid black',
          zIndex: `0`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {children}
        <p
          style={{
            position: 'absolute',
            color: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          테스트용 기초 맵입니다.
        </p>
      </div>
    </>
  );
};

export default BasicMap;
