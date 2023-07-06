import styled from 'styled-components'
import backgroundAuth from '../../assets/backgroundAuth.png'

export const Container = styled.div`

  display: flex;
  height: 100vh;
  align-items: stretch;

`

export const Form = styled.form`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;

  padding: 0 136px;

  > h1{
    font-size: 4.8rem;
    line-height: 6.3rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p{

    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_LABEL};
  }

  > h2{

    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin: 4.8rem 0;
  }

  > button{
    margin-top: 1.6rem;
    margin-bottom: 4.2rem;
  }

  > a{
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    text-align: center;
    align-items: center;
    margin: 0 auto;
  }

  

`

export const Background = styled.div` 
    flex: 1;
    background: url(${backgroundAuth}) no-repeat center center;
    background-size: cover;
`