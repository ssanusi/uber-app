import React from "react";
import ReactDOM from "react-dom";
import client from "./client";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from './global-styles';

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
