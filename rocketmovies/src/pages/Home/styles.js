import styled from "styled-components"


export const Container = styled.div`

height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

export const Menu = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10.6rem;
  
  
  h1{
    margin-right: 67%;
    font-size: 3.2rem;
    line-height: 4.2rem;
    white-space: nowrap;
    font-weight: 400; 
    
  }
`

export const Content = styled.div`
  height: 100vh;
  margin-top: 3.7rem;
  overflow-y: auto;
  width: 90vw;

  &::-webkit-scrollbar {
  width: 22px;
}

&::-webkit-scrollbar-thumb {
  background-color: transparent;
  box-shadow: inset 0 0 0px 6px ${({theme}) => theme.COLORS.PINK};
  border-radius: 8rem; 
  border: solid 8px transparent; 
}




`