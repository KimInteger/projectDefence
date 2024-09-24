이 파일의 이름은 monsterMoveToSquare.ts입니다.
이 파일의 경로는 (workSpace)/frontend/src/module/lib/monsterMoveToSquare.ts입니다.
이 파일은 TypeScript로 작성됩니다.
이 파일은 Type을 엄격하게 지키며 any를 사용하지 않습니다.
이 파일은 React로 렌더링되는 xml요소의 객체에 이벤트로 할당될  기능을 작성할 파일입니다.

기능은 다음과 같습니다.
이 파일의 기능은 몬스터로 지정된 객체가 움직이는 역할을 합니다.
해당 기능은 export되어서 객체에 addEventListener로 할당될 예정입니다.
이 기능은 부모를 인식해야합니다.
매개변수로 부모를 받을 필요는 없습니다.
해당 기능이  할당된 객체는 부모를 인식하고,
부모의 top 0, left 0.의 위치에서 top 100, left 0의 위치로 setInterval로 이동,
top 100, left 0 의 위치에 도달했다면, top 100, left 100의 위치로 이동,
이동했다면 top 0, left 100의 위치로 이동,
마지막으로 top 0, left 0 의 위치로 이동하면 객체가 삭제됩니다.
정리하자면, 부모 객체 요소를 반시계방향으로 순회하고 기존에 있던 자리로 돌아오면 삭제되는 기능이어야합니다.