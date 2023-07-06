import styled from 'styled-components'

export const Container = styled.span`

  height: 2.4rem;
  padding: 0.5rem 1.6rem;
  border-radius: 0.8rem;
  margin-right: .8rem;
  

  background-color: ${({theme,isNote}) => isNote ? theme.COLORS.BACKGROUND_700 : theme.COLORS.PINK_BACKGROUND};

  color: ${({theme}) => theme.COLORS.WHITE_TAG};  
  font-size: 12px;
  line-height: 14px;
  
`