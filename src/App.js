import React, { Component } from 'react';

import { request } from 'graphql-request'

const BASE_URL = 'http://localhost:3100/graphql';

const fragment = `fragment course on Course {
    id
    name
  }`

const query = `query allStudents {
    allStudents {
    id
    firstName
     Courses {
      ...course
    }
   }
  }
  ${fragment}
  `;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Students' };
  }

  componentWillMount = async () => {
    const data = await request(BASE_URL, query);
    this.setState({ data });
  }

  render() {
    if (!this.state) return 'Loading...';

    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div style={{textAlign: 'left'}}>
          <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default App;
