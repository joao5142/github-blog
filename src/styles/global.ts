import styled, { createGlobalStyle } from "styled-components";
import { ColorsTypes } from "./themes/defaultTheme";

export const GlobalStyles = createGlobalStyle`
   *{
    box-sizing: border-box;
    margin: 0;
    padding:0;
   }

   body{
      -webkit-font-smoothing:antialiased;

      background: ${(props) => props.theme.colors["base-background"]};

      color:${(props) => props.theme.colors["base-text"]}
   }
   body,textarea,input,select{
        font-family: 'Nunito',sans-serif;
        font-size: 1rem;
   }        
`;

interface CardContainerProps {
	background: ColorsTypes;
}
export const Card = styled.div<CardContainerProps>`
	padding: 2rem;

	background: ${(props) => props.theme.colors[props.background]};
`;
