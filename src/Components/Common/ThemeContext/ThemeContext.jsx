import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const initialStyles = {
  fonts: {
    main: `'Roboto', sans-serif;`,
  },
  colors: {
    primary: "rgb(0, 117, 107)",
    secondary: " rgba(0, 117, 107,0.2)",
    ternary: "#8BC4BF",
    main: "#8F1CFD",
    second: "#F5F5F5",
    black: "#000",
    white: "#fff",
    yellow: "#ffc404",
    teal: "#2a333a",
    gray: " #D9D9D9",
    grayOne: " #A2A2A2",
  },
  gradients: {},
};

const ThemeContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(initialStyles);

  useEffect(() => {
    const prepareState = () => {
      setIsLoading(true);

      setIsLoading(false);
    };
    prepareState();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <ThemeProvider theme={theme} setTheme={setTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeContext;

const Loader = () => <p>Loading</p>;

const colors = [
  {
    id: nanoid(),
    primary: "rgb(0, 117, 107)",
    secondary: " rgba(0, 117, 107,0.2)",
    ternary: "#8BC4BF",
  },
  {
    id: nanoid(),
    primary: "#EE5E4D",
    secondary: " rgb(54, 120, 222)",
    ternary: "rgb(206, 225, 254)",
    // ternary: "rgb(206, 225, 254)",
  },
  {
    id: nanoid(),
    primary: "rgb(2, 71, 178)",
    secondary: "rgba(2, 71, 178,0.2)",
    ternary: "rgb(45, 103, 189)",
  },
  {
    id: nanoid(),
    primary: "rgb(237, 132, 19)",
    secondary: "rgba(237, 132, 19,0.2)",
    ternary: "rgb(247, 183, 51)",
  },
  {
    id: nanoid(),
    primary: "rgb(143, 28, 253)",
    secondary: "rgba(144, 28, 253, 0.2)",
    ternary: "rgb(159, 91, 255)",
  },
  {
    id: nanoid(),
    primary: "rgb(158, 255, 61)",
    secondary: "rgba(158, 255, 61, 0.2)",
    ternary: "rgb(158, 255, 61)",
  },
  {
    id: nanoid(),
    primary: "rgb(156, 37, 77)",
    secondary: "rgba(156, 37, 77, 0.2)",
    ternary: "rgb(212, 76, 122)",
  },
  {
    id: nanoid(),
    primary: "rgb(134, 58, 111)",
    secondary: "rgba(134, 58, 111, 0.2)",
    ternary: "rgb(206, 80, 168)",
  },
  {
    id: nanoid(),
    primary: "rgb(79, 160, 149)",
    secondary: "rgba(79, 160, 149, 0.2)",
    ternary: "rgb(81, 218, 199)",
  },
];
