import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`

display: flex;
justify-content: space-evenly;
gap: 6.4rem;
align-items: center;

width: 100%;
height: 11.6rem;
padding: 2.4rem 12.3rem;

border-bottom: solid 1px ${({ theme }) => theme.COLORS.BACKGROUND_800}; 

>h1{
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 700;
  
  color: ${({ theme }) => theme.COLORS.PINK}
}
`

export const Profile = styled(Link)`

  display: flex;
  align-items: center;

    
    img{
      border-radius: 50%;
      height: 6.4rem;
      width: 6.4rem;
      margin: .9rem;
    }

    .text{
      display: flex;
      flex-direction: column; 
  
      h2{
        width: 100%;
        white-space: nowrap;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.4rem;
        line-height: 1.8rem;     
      }

     
    }
   
`

export const Logout = styled.div`
  display: flex;
  justify-content: right;
      a{
        color: ${({ theme }) => theme.COLORS.GRAY_PLACEHOLDER};  
        font-size: 1.4rem;
        line-height: 1.8rem;   
      }
`


