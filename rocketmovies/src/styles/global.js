import { createGlobalStyle} from "styled-components"

export default createGlobalStyle`
  *{
   
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  :root{
    font-size: 62.5%;
    font-family: 'Roboto Slab', serif;
    --webkit-font-smoothing: antialiased;
    outline: none;
  }

  body{
    font-size: 1.6rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme})=> theme.COLORS.WHITE};

  }

  textarea:focus, input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}

  a {
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }
  
  button:hover, a:hover{
    filter: brightness(0.9);
  }




`