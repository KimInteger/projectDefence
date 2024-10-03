import React from 'react';
import { BasicMapProps } from '../../interface/map/basicMapInterface';

const BasicMap: React.FC<BasicMapProps> = ({ children }) => {
  return (
    <>
      <div
        style={{
          width: '800px',
          height: '800px',
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
      </div>
    </>
  );
};

export default BasicMap;
