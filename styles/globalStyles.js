import styled from 'styled-components'

export const theme = {
  current: 'dark',
  light: {
    bg: {
      bgColor: 'white',
    },
    font: {
      color: 'gray',
    }
  },
  dark: {
    bg: {
      bgColor: 'rgb(38,	50,	56)',
    },
    font: {
      color: 'white ',
    }
  }
}

export const AlignTotallyCenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const TextStandard = styled.Text`
  color: white;
  font-size: 40px;
`

