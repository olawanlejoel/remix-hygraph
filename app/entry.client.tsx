import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";

function Client() {
  const client = new ApolloClient({
    // `restore` rehydrates the cache so it will match the cache on the server
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clgukv3zu05n101ulfk6u2lca/master",
  });

  return (
    <ApolloProvider client={client}>
      <RemixBrowser />
    </ApolloProvider>
  );
}

hydrate(<Client />, document);
