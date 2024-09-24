import React, { useState, useRef, useEffect } from 'react';
import { BasicTowerProps } from '../interface/tower/basicTowerInterfac';
import { allStyle } from '../static/allStyle';

const BuildTower: React.FC<BasicTowerProps> = ({
  atk,
  name,
  dps,
  targetClass,
}) => {
  const [isAtk, setIsAtk] = useState<boolean>(false);
  const attackIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  let atkDps: number = 1000 / dps;

  useEffect(() => {
    if (isAtk && !attackIntervalRef.current) {
      attackIntervalRef.current = setInterval((): void => {
        const target = document.querySelector(`.${targetClass}`);
        if (target) {
          const currentHpElement = target.querySelector('p:last-child');
          if (currentHpElement) {
            const currentHp = parseInt(
              currentHpElement.textContent?.split(' : ')[1] || '0',
            );
            const newHp = currentHp - atk;
            currentHpElement.textContent = `체력 : ${newHp}`;

            if (newHp <= 0) {
              target.parentElement?.remove();
            }
          }
        } else {
          console.log(`타겟 ${targetClass}을(를) 찾을 수 없습니다.`);
        }
      }, atkDps);
    }

    return () => {
      if (attackIntervalRef.current) {
        clearInterval(attackIntervalRef.current);
        attackIntervalRef.current = null;
      }
    };
  }, [isAtk, atk, atkDps, targetClass]);

  const attack = (): void => {
    if (!isAtk) {
      setIsAtk(true);
    }
  };

  const handleStopAtk = () => {
    setIsAtk(false);
  };

  const towerStyle = allStyle.basicTowerStyle(isHovered);

  return (
    <div
      id="tower"
      style={towerStyle}
      onMouseEnter={() => setIsHovered(true)} // 마우스가 들어올 때 hover 상태 변경
      onMouseLeave={() => setIsHovered(false)} // 마우스가 나갈 때 hover 상태 변경
    >
      <p>이름 : {name}</p>
      <p>공격력 : {atk}</p>
      <br />
      <button onClick={attack}>공격해!</button>
      <button onClick={handleStopAtk}>멈춰!</button>
    </div>
  );
};

export default BuildTower;
