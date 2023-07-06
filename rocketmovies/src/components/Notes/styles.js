import styled from 'styled-components'


export const Container = styled.div`

width: 100%;
height: 22.28rem;
background-color: ${({theme}) => theme.COLORS.PINK_BACKGROUND};
padding:3.2rem;

border: none;
border-radius: 1.6rem;
margin-bottom: 2.4rem;



> a{
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: 2.4rem;
  font-weight: 700;
}

> div{
  margin-bottom: 1.5rem;
  margin-top: .8rem;
}


 >p{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: ${({theme}) => theme.COLORS.GRAY_TEXT};
  font-size: 1.6rem;
  line-height: 2rem;
 }

 >footer{
  margin-top: 1.5rem;
 }
`