import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Vue from "vue";
import VueApollo from "vue-apollo";

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: "https://docuvaluate.myshopify.com",
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

Vue.use(VueApollo);
export default new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: "loading",
  },
});
