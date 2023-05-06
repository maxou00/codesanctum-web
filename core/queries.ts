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
  }
}
`