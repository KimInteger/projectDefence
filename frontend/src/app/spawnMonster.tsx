import React, { useEffect, useRef, useState } from 'react';
import { BasicMonsterProp } from '../interface/monster/basicMonsterInterface';
import { monsterMoveToSquare } from '../module/lib/monsterMoveToSquare';
import { allStyle } from '../static/allStyle';

const SpawnMonster: React.FC<BasicMonsterProp> = ({ hp, name }) => {
  const monsterRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 인라인 스타일 정의
  const monsterStyle = allStyle.basicMonsterStyle(isHovered);

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
      style={monsterStyle}
      onMouseEnter={() => setIsHovered(true)} // 마우스가 들어올 때 hover 상태 변경
      onMouseLeave={() => setIsHovered(false)} // 마우스가 나갈 때 hover 상태 변경
    >
      <p>이름 : {name}</p>
      <p>체력 : {hp}</p>
    </div>
  );
};

export default SpawnMonster;
