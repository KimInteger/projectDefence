export const allStyle = {
  basicMonsterStyle: (isHovered: boolean) => ({
    position: 'absolute' as 'absolute',
    width: '100px',
    height: '100px',
    border: isHovered ? '2px solid red' : '1px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: isHovered ? 'pointer' : 'default',
  }),

  basicTowerStyle: (isHovered: boolean) => ({
    width: '200px',
    height: '200px',
    backgroundColor: 'black',
    color: 'white',
    border: isHovered ? '3px solid green' : '1px solid black',
    cursor: isHovered ? 'pointer' : 'default',
  }),
};
