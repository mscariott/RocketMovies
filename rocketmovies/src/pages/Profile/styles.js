import styled from 'styled-components'

export const Container = styled.div`

  > header{
  height: 14.4rem;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.PINK_BACKGROUND};
  padding-left: 14.4rem;
  display: flex;
  align-items: center; 

  > a{
    display: flex;
    text-align: center;      
    color: ${({theme}) => theme.COLORS.PINK};
  }
  }

`

export const Form = styled.form`

  width: 34rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  > button{
    margin-top: 1.6rem;
  }

  > div:nth-child(4){
    margin-top: 1.6rem;
  }

`

export const Avatar = styled.div`

  position: relative;
  height: 18.6rem;
  width: 18.6rem;
  margin-top: -9rem;
  margin-bottom: 6.4rem;
 
  > img{

    height: 18.6rem;
    width: 18.6rem;
    border: none;
    border-radius: 50%;
  }

  > label{
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.GRAY_BUTTON};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: .7rem;
    right: .7rem;

    cursor: pointer;

    input{
      display: none;
    }
  }

`