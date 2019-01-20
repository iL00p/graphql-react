import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { BASE_URL } from '../constants/config';
import Main from '../containers/main';

export const client = new ApolloClient({
    uri: BASE_URL
});

const Root = () => (
    <ApolloProvider client={client}>
        <Main />
    </ApolloProvider>
)

export default Root;