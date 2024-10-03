import React, { useState } from 'react';
import { PlayerControlSectionPros } from '../../../interface/map/playerControlInterface';

const PlayerControlSection: React.FC<PlayerControlSectionPros> = ({
  children,
  clickedElementInfo,
}) => {
  return (
    <>
      <div id="playerControlContainer">
        {/* 클릭된 요소의 정보를 렌더링 */}
        {clickedElementInfo && <div>{clickedElementInfo}</div>}
        {children}
      </div>
    </>
  );
};

export default PlayerControlSection;
