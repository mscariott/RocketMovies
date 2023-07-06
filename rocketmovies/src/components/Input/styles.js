import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
  align-items: center;
 

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  width: 100%;

  padding: 1.2rem 1.9rem;
  border-radius: 1rem;
  height: 5.6rem;
  margin-bottom: .8rem;

  >input {
    width: 100%;
    margin-left: 1.2rem;
    background: transparent;
    border: none;

    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  >svg {
    margin-left: 1.2rem;
  }

  
`