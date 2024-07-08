import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

:root {
  //colors
  --text-color: #000000;
  --orange: #FFAA00;
  --yellow: #FFE55E;
  --cream: #FFFAE5;
  --complementary-dark-green: #124C5F;
  --complementary-light-blue: #A0D6E7;
  --complementary-bottle-green: #C7E7E1;
  --white: #FFFFFF;


  //fonts
  --display: "Roboto", sans-serif;
  --playfair: "Playfair Display", serif;

}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--display);
    overflow-x: hidden;
  }

  h1{
    font-size: 40px;
    font-weight: 700;
  }

  h2{
    font-size: 32px;
  }

  h3{
    font-size: 24px;
  }

  p{
    font-size: 20px
  }


  html,
  body,
  button {
  font-family: var(--display);
  color: var(--text-color);
}
  a {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
  position: relative;
  width: min-content;
  }
  ol,
  ul {
  list-style: none;
  }
  button{
    width: 146px;
    height: 49px;
    gap: 0px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.75px;
    border: none;
    background: var(--complementary-bottle-green);
    color: var(--complementary-dark-green);
    cursor: pointer;
  }
 
`;
