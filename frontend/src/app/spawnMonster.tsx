import React from 'react';
import { BasicMonsterProp } from '../interface/monster/basicMonsterInterface';

const SpawnMonster: React.FC<BasicMonsterProp> = ({ hp, name }) => {
  return (
    <div
      className={name}
      style={{
        width: '100px',
        height: '100px',
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p>이름 : {name}</p>
      <p>체력 : {hp}</p>
    </div>
  );
};

export default SpawnMonster;
