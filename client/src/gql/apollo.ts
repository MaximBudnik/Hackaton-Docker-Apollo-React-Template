import {ApolloClient, gql, InMemoryCache} from '@apollo/client';
import {config} from "../constants/config";

export const client = new ApolloClient({
    uri: config.graphqlServerUrl,
    cache: new InMemoryCache()
});
