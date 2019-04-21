import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

const client = new ApolloClient({
  uri: "/"
});

ReactDOM.render(
    <ApolloProvider client={client}>
    <App/>
    </ApolloProvider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
 