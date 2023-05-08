/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation ContactUs($data: MessageCreateInput!) {\n  createMessage(data: $data) {\n    createdAt\n    email\n    id\n    message\n    name\n  }\n}\n": types.ContactUsDocument,
    "\nmutation SubscribeToNewsletter($data: NewsletterSubscriptionCreateInput!) {\n  createNewsletterSubscription(data: $data) {\n    id\n    name\n    email\n    createdAt\n  }\n}\n": types.SubscribeToNewsletterDocument,
    "\nmutation SigninWithGoogle($accessToken: String) {\n  signinWithGoogle(accessToken: $accessToken) {\n    accessToken\n    user {\n      id\n      firstname\n      lastname\n      avatar\n      gender\n      role\n      createdAt\n      email\n    }\n  }\n}\n": types.SigninWithGoogleDocument,
    "\nmutation SigninWithGithub($code: String) {\n  signinWithGithub(code: $code) {\n    accessToken\n    user {\n      id\n      firstname\n      lastname\n      avatar\n      gender\n      role\n      createdAt\n      email\n    }\n  }\n}\n": types.SigninWithGithubDocument,
    "\nmutation CreateForm($data: FormCreateInput!) {\n  createForm(data: $data) {\n    id\n    user {\n      id\n    }\n  }\n}\n": types.CreateFormDocument,
    "\nmutation CreateAnswer($data: AnswerCreateInput!) {\n  createAnswer(data: $data) {\n    data\n    id\n    form {\n      id\n    }\n    createdAt\n  }\n}\n": types.CreateAnswerDocument,
    "\nquery Me {\n  me {\n    id\n    firstname\n    lastname\n    avatar\n    gender\n    role\n    createdAt\n    email\n    verified\n    approved\n  }\n}\n": types.MeDocument,
    "\nquery Form($where: FormWhereUniqueInput!) {\n  form(where: $where) {\n    id\n    data\n    user {\n      id\n      verified\n      approved\n    }\n    answer {\n      id\n      data\n      createdAt\n    }\n    createdAt\n  }\n}\n": types.FormDocument,
    "\nquery FormAnswer($formId: String) {\n  formAnswer(formId: $formId) {\n    id\n    data\n    form {\n      id\n      data\n    }\n    createdAt\n  }\n}\n": types.FormAnswerDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation ContactUs($data: MessageCreateInput!) {\n  createMessage(data: $data) {\n    createdAt\n    email\n    id\n    message\n    name\n  }\n}\n"): (typeof documents)["\nmutation ContactUs($data: MessageCreateInput!) {\n  createMessage(data: $data) {\n    createdAt\n    email\n    id\n    message\n    name\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation SubscribeToNewsletter($data: NewsletterSubscriptionCreateInput!) {\n  createNewsletterSubscription(data: $data) {\n    id\n    name\n    email\n    createdAt\n  }\n}\n"): (typeof documents)["\nmutation SubscribeToNewsletter($data: NewsletterSubscriptionCreateInput!) {\n  createNewsletterSubscription(data: $data) {\n    id\n    name\n    email\n    createdAt\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation SigninWithGoogle($accessToken: String) {\n  signinWithGoogle(accessToken: $accessToken) {\n    accessToken\n    user {\n      id\n      firstname\n      lastname\n      avatar\n      gender\n      role\n      createdAt\n      email\n    }\n  }\n}\n"): (typeof documents)["\nmutation SigninWithGoogle($accessToken: String) {\n  signinWithGoogle(accessToken: $accessToken) {\n    accessToken\n    user {\n      id\n      firstname\n      lastname\n      avatar\n      gender\n      role\n      createdAt\n      email\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation SigninWithGithub($code: String) {\n  signinWithGithub(code: $code) {\n    accessToken\n    user {\n      id\n      firstname\n      lastname\n      avatar\n      gender\n      role\n      createdAt\n      email\n    }\n  }\n}\n"): (typeof documents)["\nmutation SigninWithGithub($code: String) {\n  signinWithGithub(code: $code) {\n    accessToken\n    user {\n      id\n      firstname\n      lastname\n      avatar\n      gender\n      role\n      createdAt\n      email\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation CreateForm($data: FormCreateInput!) {\n  createForm(data: $data) {\n    id\n    user {\n      id\n    }\n  }\n}\n"): (typeof documents)["\nmutation CreateForm($data: FormCreateInput!) {\n  createForm(data: $data) {\n    id\n    user {\n      id\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation CreateAnswer($data: AnswerCreateInput!) {\n  createAnswer(data: $data) {\n    data\n    id\n    form {\n      id\n    }\n    createdAt\n  }\n}\n"): (typeof documents)["\nmutation CreateAnswer($data: AnswerCreateInput!) {\n  createAnswer(data: $data) {\n    data\n    id\n    form {\n      id\n    }\n    createdAt\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery Me {\n  me {\n    id\n    firstname\n    lastname\n    avatar\n    gender\n    role\n    createdAt\n    email\n    verified\n    approved\n  }\n}\n"): (typeof documents)["\nquery Me {\n  me {\n    id\n    firstname\n    lastname\n    avatar\n    gender\n    role\n    createdAt\n    email\n    verified\n    approved\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery Form($where: FormWhereUniqueInput!) {\n  form(where: $where) {\n    id\n    data\n    user {\n      id\n      verified\n      approved\n    }\n    answer {\n      id\n      data\n      createdAt\n    }\n    createdAt\n  }\n}\n"): (typeof documents)["\nquery Form($where: FormWhereUniqueInput!) {\n  form(where: $where) {\n    id\n    data\n    user {\n      id\n      verified\n      approved\n    }\n    answer {\n      id\n      data\n      createdAt\n    }\n    createdAt\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery FormAnswer($formId: String) {\n  formAnswer(formId: $formId) {\n    id\n    data\n    form {\n      id\n      data\n    }\n    createdAt\n  }\n}\n"): (typeof documents)["\nquery FormAnswer($formId: String) {\n  formAnswer(formId: $formId) {\n    id\n    data\n    form {\n      id\n      data\n    }\n    createdAt\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;