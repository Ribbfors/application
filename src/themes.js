import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "white",
  secondaryBodyColor: "lightblue",
  headerColor: "black",
  secondaryHeaderColor: "black",
  textColor: "black",
  secondaryTextColor: "black",
  headerFontSize: "2rem",
  secondaryHeaderFontSize: "3rem",
  fontSize: "1rem",
  width: "80%",
  icon: "pink",
  cardTextColor: "black",
  timelineIconBackground: "lightblue",
  timelineIcon: "white",
  largeHeaderFontSize: "3rem",
};

export const darkTheme = {
  body: "black",
  secondaryBodyColor: "pink",
  headerColor: "white",
  secondaryHeaderColor: "black",
  textColor: "white",
  secondaryTextColor: "black",
  headerFontSize: "2rem",
  secondaryHeaderFontSize: "3rem",
  fontSize: "1rem",
  width: "80%",
  icon: "yellow",
  cardTextColor: "black",
  timelineIconBackground: "pink",
  timelineIcon: "black",
  largeHeaderFontSize: "3rem",
};

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-size: border-box;
}

  body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.textColor};
  }

h1{
  color: ${(props) => props.theme.secondaryTextColor};
}

  h2{
    color: ${(props) => props.theme.headerColor};
    font-size: ${(props) => props.theme.secondaryHeaderFontSize};

  }

  p {
    color: ${(props) => props.theme.textColor};
    font-size: ${(props) => props.theme.fontSize};
  }
`;
