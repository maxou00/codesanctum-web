import { gql } from "@apollo/client";

export const GET_ME = gql`
query Me {
  me {
    id
    firstname
    lastname
    avatar
    gender
    role
    createdAt
    email
    verified
    approved
  }
}
`

export const GET_FORM = gql`
query Form($where: FormWhereUniqueInput!) {
  form(where: $where) {
    id
    data
    user {
      id
      verified
      approved
    }
    answer {
      id
      data
      createdAt
    }
    createdAt
  }
}
`

export const GET_FORM_ANSWER = gql`
query FormAnswer($formId: String) {
  formAnswer(formId: $formId) {
    id
    data
    form {
      id
      data
    }
    createdAt
  }
}
`;