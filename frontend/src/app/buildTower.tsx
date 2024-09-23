import React, { useState, useRef, useEffect } from 'react';
import { BasicTowerProps } from '../interface/tower/basicTowerInterfac';

const BuildTower: React.FC<BasicTowerProps> = ({
  atk,
  name,
  dps,
  targetClass,
}) => {
  const [isAtk, setIsAtk] = useState<boolean>(false);
  const attackIntervalRef = useRef<NodeJS.Timeout | null>(null);
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

  return (
    <div
      id="tower"
      style={{
        width: '200px',
        height: '200px',
        border: '1px solid black',
        backgroundColor: 'black',
        color: 'white',
      }}
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
