import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* outline: 1px solid red; */
 
}
html {
  font-size: 16px;
}
body {
  background: ${({ theme }) => theme.colors.white};
@media (max-width:576px){
  overflow-x:hidden ;
}

}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  max-width: 100%;
  display: block;
}

a{
  text-decoration:none;
}

.container {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 300px) {
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 476px) {
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 768px) {
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 992px) {
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 1200px) {
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 476px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 720px;
    max-width: 100%;
  }
  @media (min-width: 992px) {
    width: 960px;
    max-width: 100%;
  }
  @media (min-width: 1200px) {
    width: 1140px;
    max-width: 100%;
  }
  @media (min-width: 1400px) {
    width: 1320px;
    max-width: 100%;
  }
  /* @media (min-width: 1680px) {
    width: 1400px;
    max-width: 100%;
  } */
}


`;
