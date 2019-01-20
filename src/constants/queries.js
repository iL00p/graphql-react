import gql from "graphql-tag";

const getStudentsQuery = gql`
  query allStudents {
    allStudents {
      id
      firstName
      lastName
      active
    }
  }
`

const createStudentQuery = gql`
  mutation createStudent($id: ID!, $firstName: String!, $lastName: String!,$active: String!) {
    createStudent(id: $id, firstName: $firstName, lastName: $lastName, active: $active) {
      id
      firstName
      lastName
      active
    }
  }
`;

const updateStudentQuery = gql`
  mutation updateStudent($id : ID!, $active: String!) {
      updateStudent(id: $id, active: $active) {
          id,
          firstName,
          lastName,
          active
      }
  }
`;

const removeStudentQuery = gql`
  mutation removeStudent($id : ID!) {
      removeStudent(id : $id)
  }
`

export {
    getStudentsQuery,
    createStudentQuery,
    updateStudentQuery,
    removeStudentQuery
}