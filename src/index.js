import React from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from './globalStyle';
//import Home from "./containers/Home";
import Users from "./containers/Users";


const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <>
      <Users />
      <GlobalStyle />
    </>
  </React.StrictMode>
);
