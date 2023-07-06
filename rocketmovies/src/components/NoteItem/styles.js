import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
  align-items: center;
  padding: 1.6rem;
  border-radius: 1rem;
  
  > input{
    font-size: 1.6rem;
    line-height: 1.9rem;
    background: transparent;
    border: none;
    color: ${({theme}) => theme.COLORS.WHITE};
    
  }


  > button{
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  ${({variant, theme}) => variant === "new" 
  ? `background-color: transparent;
    border: 2px dashed ${theme.COLORS.GRAY_PLACEHOLDER}`
  : `background-color: ${theme.COLORS.BACKGROUND_800}};`}
  

`