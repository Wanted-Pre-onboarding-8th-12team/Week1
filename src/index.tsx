import { StrictMode } from "react";

import ReactDOM from "react-dom/client";

import Router from "@router";

import { GlobalStyle } from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <GlobalStyle />
    <Router />
  </StrictMode>,
);
