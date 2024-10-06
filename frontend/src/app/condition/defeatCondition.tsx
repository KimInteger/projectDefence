import React from 'react';
import { DefeatInterface } from '../../interface/condition/defeatInterface';

const DefeatScreen: React.FC<DefeatInterface> = ({ onclick }) => {
  return (
    <>
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
          onClick={onclick}
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
    </>
  );
};

export default DefeatScreen;
