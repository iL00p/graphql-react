import React, { Component } from 'react';
// import { Query, Mutation } from "react-apollo";
import { client } from '../../client';

import {
    getStudentsQuery,
    createStudentQuery,
    updateStudentQuery,
    removeStudentQuery
} from '../../constants/queries';

const refetchQueries = [{
    query: getStudentsQuery,
}];

class Main extends Component {
    state = {
        id : '',
    };

    componentDidMount() {
        this.getStudents();
    }

    getStudents = async () => {
        const { data : { allStudents } } = await client.query({ query: getStudentsQuery, pollInterval: 0 });
        this.setState({ data: allStudents });
    }

    addStudent = async () => {
        const variables = {
            id: parseInt(Math.random() * 100),
            firstName: 'Arjun',
            lastName: 'Sreedhar',
            active: 'true'
        }
        try {
            await client.mutate({
                variables,
                refetchQueries,
                awaitRefetchQueries : true,
                mutation: createStudentQuery,
            });
            this.setState({ data : null }, this.getStudents);
        } catch (e) {
            console.log('Err::::', e)
        }
    }

    updateStudent = async () => {
        const { id, data } = this.state;
        if (!id || parseInt(id, 10) === NaN) return;
        const student = data.find(item => item.id === id);
        if (!student) return;

        const variables = {
            id: parseInt(id, 10),
            active: student.active === 'true' ? 'false' : 'true'
        }
        try {
            await client.mutate({
                variables,
                refetchQueries,
                awaitRefetchQueries: true,
                mutation: updateStudentQuery,
            });
            this.setState({ data : null }, this.getStudents);
        } catch (e) {
            console.log('Err::::', e)
        }
    }

    removeStudent = async () => {
        const { id } = this.state;
        if (!id || parseInt(id, 10) === NaN) return;
        const variables = {
            id : parseInt(id, 10),
        }
        try {
            await client.mutate({
                variables,
                refetchQueries,
                awaitRefetchQueries: true,
                mutation: removeStudentQuery,
            });
            this.setState({ data : null, id : '' }, this.getStudents);
        } catch (e) {
            console.log('Err::::', e)
        }
    }


    render() {
        const { data, id } = this.state;
        if(!data) return 'Loading....';

        return (
           <div>
               <h1>Students</h1>
               <pre>
                   {
                       JSON.stringify(data, null, 2)
                   }
               </pre>
               <button onClick={this.addStudent}>
                   Add Student
               </button>
               <input value={id} onChange={e => this.setState({ id : e.target.value })} />
                <button onClick={this.removeStudent}>
                    Remove Student
               </button>
               <button onClick={this.updateStudent}>
                   Toggle Active
               </button>
           </div>
        );
    }
}

export default Main;
