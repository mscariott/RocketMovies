import styled from "styled-components"

export const Container = styled.button`

height: 4.8rem;
padding: 1.35rem 2rem;
font-size: 1.6rem;
line-height: 2.1rem;
font-weight: 500;
border: none;
border-radius: .8rem;

display: flex;
align-items: center;
justify-content: center;


${({variant, theme}) => variant === "secondary" ? ` 
  color: ${theme.COLORS.PINK};
  background-color: ${theme.COLORS.BACKGROUND_900};` 
  : 
  `color: ${theme.COLORS.GRAY_BUTTON};
  background-color: ${theme.COLORS.PINK};`}


> svg{
  margin-right: .8rem;
}

&:disabled{
  opacity: 0.5;
}

`