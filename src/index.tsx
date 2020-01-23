import React from "react";
import ReactDOM from "react-dom";
import client from "./client";
import { ApolloProvider } from "@apollo/react-hooks";
import {MuiThemeProvider } from "@material-ui/core"
import App from "./App";
import "typeface-roboto";
import theme from "./theme";

console.log(theme);

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
