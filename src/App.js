import React, { Component } from 'react';

import { request } from 'graphql-request'

import {
  getStudentsQuery,
  createStudentQuery,
  updateStudentQuery,
  removeStudentQuery
} from './queries';

const BASE_URL = 'http://localhost:3100/graphql';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Students' };
  }

  componentWillMount() {
    this.getStudents();
  }

  getStudents = async () => {
    const data = await request(BASE_URL, getStudentsQuery);
    this.setState({ data });
  }

  addStudent = async () => {
    const objToSend = { 
      id: 666,
      firstName: 'Arjun',
      lastName: 'Sreedhar',
      active: 'true'
    }
    try {
      await request(BASE_URL, createStudentQuery, objToSend);
      this.setState({ data : null }, this.getStudents);
    } catch (e) {
      console.log('Err::::', e)
    }
  }

  updateStudent = async () => {
    const objToSend = {
      id: "4",
      // firstName: 'Arjun',
      // lastName: 'Sreedhar',
      active: 'true'
    }
    try {
      await request(BASE_URL, updateStudentQuery, objToSend);
      this.setState({ data: null }, this.getStudents);
    } catch (e) {
      console.log('Err::::', e)
    }
  }

  removeStudent = async () => {
    const objToSend = {
      id: 666,
    }
    try {
      await request(BASE_URL, removeStudentQuery, objToSend);
      this.setState({ data: null }, this.getStudents);
    } catch (e) {
      console.log('Err::::', e)
    }
  }

  render() {
    if (!this.state) return 'Loading...';

    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div style={{textAlign: 'left'}}>
          <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
        </div>
        <button onClick={this.removeStudent}>Remove Student</button>
      </div>
    );
  }
}

export default App;
