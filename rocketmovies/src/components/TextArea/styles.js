import styled from 'styled-components'

export const Container = styled.textarea`

  width: 100%;
  height: 27.4rem;
  border: none;
  resize: none;

  border-radius: 1rem;
  padding: 1.9rem 1.6rem;
  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.WHITE};

  
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_PLACEHOLDER};
  }
`