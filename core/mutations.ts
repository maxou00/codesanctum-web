import { gql } from "@apollo/client";

export const MUTATION_CONTACT_US = gql`
mutation ContactUs($data: MessageCreateInput!) {
  createMessage(data: $data) {
    createdAt
    email
    id
    message
    name
  }
}
`

export const MUTATION_SUBSCRIBE_TO_NEWSLETTER = gql`
mutation SubscribeToNewsletter($data: NewsletterSubscriptionCreateInput!) {
  createNewsletterSubscription(data: $data) {
    id
    name
    email
    createdAt
  }
}
`;

export const MUTATION_SIGNIN_WITH_GOOGLE = gql`
mutation SigninWithGoogle($accessToken: String) {
  signinWithGoogle(accessToken: $accessToken) {
    accessToken
    user {
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
}
`

export const MUTATION_SIGNIN_WITH_GITHUB = gql`
mutation SigninWithGithub($code: String) {
  signinWithGithub(code: $code) {
    accessToken
    user {
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
}
`;

export const MUTATION_CREATE_FORM = gql`
mutation CreateForm($data: FormCreateInput!) {
  createForm(data: $data) {
    id
    user {
      id
    }
  }
}
`

export const MUTATION_CREATE_ANSWER = gql`
mutation CreateAnswer($data: AnswerCreateInput!) {
  createAnswer(data: $data) {
    data
    id
    form {
      id
    }
    createdAt
  }
}
`;