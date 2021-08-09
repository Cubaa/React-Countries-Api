import { createGlobalStyle} from "styled-components"


export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-size: 16px;
}
  body {
    background: ${props => props.theme.colors.bodyBackground};
    color: ${props => props.theme.colors.fontColor};
    font-family: 'Nunito Sans', sans-serif;
    /* transition: all 0.50s linear; */
  }
  `