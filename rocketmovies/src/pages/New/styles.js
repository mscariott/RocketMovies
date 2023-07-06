import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
`

export const Main = styled.div`
  width: 90vw;
  margin: 0 auto;

  > h2{
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${({theme}) => theme.COLORS.GRAY_TEXT};
    margin-bottom: 2.4rem;
    
  }
`
export const Form = styled.form`

  margin-top: 4rem;

  > a{
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.6rem;
    line-height: 2.1rem;
  }


 > h1{
    margin-top: 2.4rem;
    margin-bottom: 4rem;
  }

  > textarea{
    margin-bottom: 4rem;
  }
`

export const Wrap = styled.div`
display: flex;
gap:4rem;
margin-bottom: 4rem;

`

export const Notes = styled.div`
display: flex;
gap: 2.4rem;
margin-bottom: 2.4rem;
width: 100%;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
padding: 1.6rem;
border-radius: .8rem;
`