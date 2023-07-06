import styled from 'styled-components'


export const Container = styled.div`

  color: ${({theme}) => theme.COLORS.PINK};
  display: flex;
  gap: .6rem;
 

  >svg:first-child{
    ${({grade, theme}) => grade >= 1 
    ? `fill: ${theme.COLORS.PINK}` 
    : `fill: transparent`}
  }

  >svg:nth-child(2){
    ${({grade, theme}) => grade >= 2 
    ? `fill: ${theme.COLORS.PINK}` 
    : `fill: transparent`}
  }

  >svg:nth-child(3){
    ${({grade, theme}) => grade >= 3 
    ? `fill: ${theme.COLORS.PINK}` 
    : `fill: transparent`}
  }

  >svg:nth-child(4){
    ${({grade, theme}) => grade >= 4 
    ? `fill: ${theme.COLORS.PINK}` 
    : `fill: transparent`}
  }

  >svg:nth-child(5){
    ${({grade, theme}) => grade == 5 
    ? `fill: ${theme.COLORS.PINK}` 
    : `fill: transparent`}
  }

`