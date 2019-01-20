import React, { Component } from 'react';
import { request } from 'graphql-request';

const BASE_URL = 'http://localhost:3100/graphql';

const query = `query allStudents {
  allStudents {
    id
    firstName
    lastName
    Courses {
      id
      name
      description
    }
  }
}`


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Students' };
  }

  componentDidMount = async () => {
    const data = await request(BASE_URL, query); //todo query
    this.setState({ data });
  }

  render() {
    if (!this.state) return 'Loading...';

    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <pre>{JSON.stringify(this.state.data)}</pre>
      </div>
    );
  }
}

export default App;
