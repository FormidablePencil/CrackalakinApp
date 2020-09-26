import styled from 'styled-components';

export const AlignTotallyCenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const ItemInCol = styled.View`
  margin-top: 50px; flex-direction: row; justify-content: space-evenly; width: 100%;
 `;
export const ItemInColOptions = styled.View`
    background-color: rgb(23, 22, 21); width: 100%; 
 `;
export const JustifyCenterView = styled.View`
  align-items: center;
`;
export const Bg = styled.View`
  height: 80%;
  justify-content: space-evenly;
  align-items: center;
`;
export const Field = styled.View`
  z-index: 20;
  background-color: rgba(255,	255,	255, .8);
  width: 90%;
  padding: 20px;
  border-radius: 25px;
  align-self: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;
export const Field2 = styled(Field)`
  align-items: center;
  justify-content: center;
`;
