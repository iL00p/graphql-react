const getStudentsQuery = `
  query allStudents {
    allStudents {
      id
      firstName
      lastName
      active
    }
  }
`

const createStudentQuery = `
  mutation createStudent($id: ID!, $firstName: String!, $lastName: String!,$active: String!) {
    createStudent(id: $id, firstName: $firstName, lastName: $lastName, active: $active) {
      id
      firstName
      lastName
      active
    }
  }
`;

const updateStudentQuery = `
  mutation updateStudent($id : ID!, $active: String!) {
      updateStudent(id: $id, active: $active) {
          id,
          firstName,
          lastName,
          active
      }
  }
`;

const removeStudentQuery = `
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