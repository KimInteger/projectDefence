export function monsterMoveToSquare(monster: HTMLElement): void {
  if (!monster || !monster.parentElement?.parentElement) {
    console.error("Monster or parent's parent element not found.");
    return;
  }

  const parentElement = monster.parentElement as HTMLElement;
  // 부모의 부모 요소(이하 SpawnSection)을 참조.
  const grandParent = monster.parentElement.parentElement as HTMLElement;

  // SpawnSection의 크기를 확인.
  const grandParentWidth = grandParent.offsetWidth;
  const grandParentHeight = grandParent.offsetHeight;

  let currentTop = 0;
  let currentLeft = 0;
  const step = 2; // 몬스터가 움직이는 속도 (px 단위) 60프레임으로 이동하는 px값

  // 현재 위치에서 다음 좌표를 업데이트하는 함수
  const moveMonster = setInterval(() => {
    if (currentLeft === 0 && currentTop < grandParentHeight - 100) {
      // 위에서 아래로 이동 (top 0, left 0 -> top 100, left 0)
      currentTop = Math.min(currentTop + step, grandParentHeight - 100);
    } else if (
      currentTop === grandParentHeight - 100 &&
      currentLeft < grandParentWidth - 100
    ) {
      // 왼쪽에서 오른쪽으로 이동 (top 100, left 0 -> top 100, left 100)
      currentLeft = Math.min(currentLeft + step, grandParentWidth - 100);
    } else if (currentLeft === grandParentWidth - 100 && currentTop > 0) {
      // 아래에서 위로 이동 (top 100, left 100 -> top 0, left 100)
      currentTop = Math.max(currentTop - step, 0);
    } else if (currentTop === 0 && currentLeft > 0) {
      // 오른쪽에서 왼쪽으로 이동 (top 0, left 100 -> top 0, left 0)
      currentLeft = Math.max(currentLeft - step, 0);
    }

    // 새로운 위치로 몬스터 이동
    monster.style.top = `${currentTop}px`;
    monster.style.left = `${currentLeft}px`;
  }, 16); // 60fps 기준 (16ms 마다 실행)
}
