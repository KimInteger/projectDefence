import React, { useEffect, useRef } from 'react';
import { BasicMonsterProp } from '../interface/monster/basicMonsterInterface';
import { monsterMoveToSquare } from '../module/lib/monsterMoveToSquare';

const SpawnMonster: React.FC<BasicMonsterProp> = ({ hp, name }) => {
  const monsterRef = useRef<HTMLDivElement>(null);

  // 컴포넌트가 렌더링된 후에 몬스터가 자동으로 움직이게 하기
  useEffect(() => {
    if (monsterRef.current) {
      monsterMoveToSquare(monsterRef.current);
    }
  }, []);

  return (
    <div
      ref={monsterRef}
      className={name}
      style={{
        position: 'absolute', // 위치 이동을 위해 absolute로 설정
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
