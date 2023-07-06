import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
overflow-y: hidden;
`

export const Content = styled.div`
  width: 90vw;
  margin: 0 auto;
  margin-top: 4rem;
  height: 100vh;
  overflow-y: auto;


  > span{
    margin-top: 4rem;
  }

  > p{
    margin-top: 4rem;
    font-size: 1.6rem;
    line-height: 2.1rem;
    text-align: justify;
  }

  > a{
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.6rem;
    line-height: 2.1rem;
  }

  &::-webkit-scrollbar {
  width: 22px;
  }

  &::-webkit-scrollbar-thumb {
  background-color: transparent;
  box-shadow: inset 0 0 0px 6px ${({ theme }) => theme.COLORS.PINK};
  border-radius: 10rem; 
  border: solid 8px transparent; 
  }

`

export const Update = styled.div`

  display: flex;
  align-items: center;
  gap: .8rem;
  

  > img{
    width: 1.6rem;
    height: 1.6rem;

    border-radius: 50%;
  }

  > svg{
  color: ${({ theme }) => theme.COLORS.PINK}
  }

  > p {
    font-size: 1.6rem;
    line-height: 1.9rem;
  }


margin-bottom: 4rem;
`

export const Wrap = styled.div`

display: flex;
align-items: center;
gap: .8rem;



  >h1{
    margin: 2.4rem 0;
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
    margin-right: 1.9rem;
  }

`