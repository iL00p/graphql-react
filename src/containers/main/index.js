import React, { Component } from 'react';
// import { Query, Mutation } from "react-apollo";
import { client } from '../../client';

import {
    getStudentsQuery,
    createStudentQuery,
    updateStudentQuery,
    removeStudentQuery
} from '../../constants/queries';


class Main extends Component {
    state = {};

    componentDidMount() {
        this.getStudents();
    }

    getStudents = async () => {
        const { data } = await client.query({ query : getStudentsQuery });
        console.log('data::', data);
        this.setState({ data });
    }

    render() {
        const { data } = this.state;
        if(!data) return 'Loading....';

        return (
           <div>
               <h1>Students</h1>
               <pre>
                   {
                       JSON.stringify(data, null, 2)
                   }
               </pre>
               <button>
                   
               </button>
           </div>
        );
    }
}

export default Main;
