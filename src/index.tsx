import React from "react";
import ReactDOM from "react-dom";
import client from "./client";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
