import React from 'react';
import { BasicMonsterProp } from '../interface/monster/basicMonsterInterface';

const SpawnMonster: React.FC<BasicMonsterProp> = ({ hp, name }) => {
  return (
    <>
      <div
        style={{
          width: '100px',
          height: '100px',
          border: '1px solid black',
        }}
      >
        <p>이름 : {name}</p>
        <p>체력 : {hp}</p>
      </div>
    </>
  );
};

export default SpawnMonster;
