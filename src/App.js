import React, { Component } from 'react';
import { Query, Mutation } from "react-apollo";

import {
  getStudentsQuery,
  createStudentQuery,
  updateStudentQuery,
  removeStudentQuery
} from './constants/queries';


class App extends Component {
  render() {

    return (
      <Query
        query={getStudentsQuery}
      >
        {
          ({ loading, error, data }) => {
            if (loading) return 'Loading... Query';
            if(error) return 'Has errored!';
           
            return(
              <Mutation mutation={createStudentQuery}>
                {
                  (createStudent, {loading, error}) => {
                    if (loading) return 'Loading... Mutation';
                    if (error) return 'Has errored! Mutation';

                    return (
                      <div className="App">
                          <h1>Students</h1>
                          <pre>
                            {JSON.stringify(data, null, 2)}
                          </pre>
                          <button
                            onClick={() => createStudent({ variables : {
                              id : 9,
                              firstName : 'Arjun',
                              lastName : 'Sreedhar',
                              active : 'true'
                            }, refetchQueries: { getStudentsQuery }})}
                          >
                            Add Student
                          </button>
                      </div>
                    )
                  }
                }
              </Mutation>
            )
          }
        }
      </Query>
    );
  }
}

export default App;
