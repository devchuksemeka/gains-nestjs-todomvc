import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import TaskListComponent from './components/TaskList';
import { useEffect } from 'react';

const client = new ApolloClient ({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const App = () => {

  return (
    <ApolloProvider
      client={client}
    >
      <div className="App">
        <h3>Task List</h3>
        <div className="">
          <TaskListComponent />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
