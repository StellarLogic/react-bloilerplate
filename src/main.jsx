import "antd/dist/reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeContext from "./Components/Common/ThemeContext/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <ThemeContext>
      <App />
    </ThemeContext>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
