import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { AuthContextProvider } from "./context/AuthContextProvider";

import App from "./App";
import { ThemeContextProvider } from "./context/ThemeContextProvider";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
    <ThemeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeContextProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
