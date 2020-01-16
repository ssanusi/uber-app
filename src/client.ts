import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { Operation, ApolloLink, concat } from "apollo-link";
import { withClientState } from "apollo-link-state";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000/graphql",
  //credentials:'include'

});


const requestLink = new ApolloLink(
  (operation:Operation, forward) => {
    operation.setContext({
      headers: {
        token: localStorage.getItem("token") || ""
      }
    })
    return forward(operation)
  });

const localLinkState = withClientState({
  defaults: {
    auth: {
      __typename: "Auth",
      isLoggedIn: Boolean(localStorage.getItem("token"))
    }
  },
  resolvers: {
    Mutation: {
      logUserOut: (_, __, { cache }) => {
        localStorage.removeItem("token");
        cache.writeData({
          data: {
            __typename: "Auth",
            isLoggedIn: false
          }
        });

        return null;
      },
      logUserIn: (_, { token }, { cache }) => {
        localStorage.setItem("token", token);
        cache.writeData({
          data: {
            __typename: "Auth",
            isLoggedIn: true
          }
        });
        return null;
      }
    }
  },
  cache
});

const client = new ApolloClient({
  link: ApolloLink.from([localLinkState, concat(requestLink, link)]),
  resolvers: {
    Mutation: {
      logUserOut: (_, __, { cache }) => {
        localStorage.removeItem("token");
        cache.writeData({
          data: {
            __typename: "Auth",
            isLoggedIn: false
          }
        });

        return null;
      },
      logUserIn: (_, { token }, { cache }) => {
        localStorage.setItem("token", token);
        cache.writeData({
          data: {
            __typename: "Auth",
            isLoggedIn: true
          }
        });
        return null;
      }
    }
  },
  cache,
});

export default client;