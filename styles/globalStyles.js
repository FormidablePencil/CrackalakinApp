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

export const TextInput = styled.TextInput`
  background-color: #FDE09D;
  width: 80%;
  align-self: center;
  margin-bottom: 10px;
`;