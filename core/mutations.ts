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