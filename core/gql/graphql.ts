/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  comments?: Maybe<Array<Comment>>;
  commentsCount?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  parent?: Maybe<Comment>;
  post?: Maybe<Post>;
  reactions?: Maybe<Array<Reaction>>;
  reactionsCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CommentCommentsArgs = {
  orderBy?: Array<CommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CommentWhereInput;
};


export type CommentCommentsCountArgs = {
  where?: CommentWhereInput;
};


export type CommentReactionsArgs = {
  orderBy?: Array<ReactionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ReactionWhereInput;
};


export type CommentReactionsCountArgs = {
  where?: ReactionWhereInput;
};

export type CommentCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  comments?: InputMaybe<CommentRelateToManyForCreateInput>;
  content?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  parent?: InputMaybe<CommentRelateToOneForCreateInput>;
  post?: InputMaybe<PostRelateToOneForCreateInput>;
  reactions?: InputMaybe<ReactionRelateToManyForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentManyRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CommentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  create?: InputMaybe<Array<CommentCreateInput>>;
};

export type CommentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  create?: InputMaybe<Array<CommentCreateInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
};

export type CommentRelateToOneForCreateInput = {
  connect?: InputMaybe<CommentWhereUniqueInput>;
  create?: InputMaybe<CommentCreateInput>;
};

export type CommentRelateToOneForUpdateInput = {
  connect?: InputMaybe<CommentWhereUniqueInput>;
  create?: InputMaybe<CommentCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CommentUpdateArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  comments?: InputMaybe<CommentRelateToManyForUpdateInput>;
  content?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  parent?: InputMaybe<CommentRelateToOneForUpdateInput>;
  post?: InputMaybe<PostRelateToOneForUpdateInput>;
  reactions?: InputMaybe<ReactionRelateToManyForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  comments?: InputMaybe<CommentManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  parent?: InputMaybe<CommentWhereInput>;
  post?: InputMaybe<PostWhereInput>;
  reactions?: InputMaybe<ReactionManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CreateOrUpdatePost = {
  content?: InputMaybe<Scalars['JSON']>;
  cover?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  published?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  isSingleton: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Media = {
  __typename?: 'Media';
  file?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MediaInput = {
  file?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MessageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MessageOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  message?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type MessageUpdateArgs = {
  data: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  message?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type MessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<Comment>;
  createComments?: Maybe<Array<Maybe<Comment>>>;
  createMessage?: Maybe<Message>;
  createMessages?: Maybe<Array<Maybe<Message>>>;
  createNewsletterSubscription?: Maybe<NewsletterSubscription>;
  createNewsletterSubscriptions?: Maybe<Array<Maybe<NewsletterSubscription>>>;
  createPost?: Maybe<Post>;
  createPosts?: Maybe<Array<Maybe<Post>>>;
  createReaction?: Maybe<Reaction>;
  createReactions?: Maybe<Array<Maybe<Reaction>>>;
  createTag?: Maybe<Tag>;
  createTags?: Maybe<Array<Maybe<Tag>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteComment?: Maybe<Comment>;
  deleteComments?: Maybe<Array<Maybe<Comment>>>;
  deleteMessage?: Maybe<Message>;
  deleteMessages?: Maybe<Array<Maybe<Message>>>;
  deleteNewsletterSubscription?: Maybe<NewsletterSubscription>;
  deleteNewsletterSubscriptions?: Maybe<Array<Maybe<NewsletterSubscription>>>;
  deletePost?: Maybe<Post>;
  deletePosts?: Maybe<Array<Maybe<Post>>>;
  deleteReaction?: Maybe<Reaction>;
  deleteReactions?: Maybe<Array<Maybe<Reaction>>>;
  deleteTag?: Maybe<Tag>;
  deleteTags?: Maybe<Array<Maybe<Tag>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  signinWithGithub?: Maybe<SigninResult>;
  signinWithGoogle?: Maybe<SigninResult>;
  updateComment?: Maybe<Comment>;
  updateComments?: Maybe<Array<Maybe<Comment>>>;
  updateMessage?: Maybe<Message>;
  updateMessages?: Maybe<Array<Maybe<Message>>>;
  updateNewsletterSubscription?: Maybe<NewsletterSubscription>;
  updateNewsletterSubscriptions?: Maybe<Array<Maybe<NewsletterSubscription>>>;
  updatePost?: Maybe<Post>;
  updatePosts?: Maybe<Array<Maybe<Post>>>;
  updateReaction?: Maybe<Reaction>;
  updateReactions?: Maybe<Array<Maybe<Reaction>>>;
  updateTag?: Maybe<Tag>;
  updateTags?: Maybe<Array<Maybe<Tag>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  writePost?: Maybe<Post>;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateCommentsArgs = {
  data: Array<CommentCreateInput>;
};


export type MutationCreateMessageArgs = {
  data: MessageCreateInput;
};


export type MutationCreateMessagesArgs = {
  data: Array<MessageCreateInput>;
};


export type MutationCreateNewsletterSubscriptionArgs = {
  data: NewsletterSubscriptionCreateInput;
};


export type MutationCreateNewsletterSubscriptionsArgs = {
  data: Array<NewsletterSubscriptionCreateInput>;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreatePostsArgs = {
  data: Array<PostCreateInput>;
};


export type MutationCreateReactionArgs = {
  data: ReactionCreateInput;
};


export type MutationCreateReactionsArgs = {
  data: Array<ReactionCreateInput>;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateTagsArgs = {
  data: Array<TagCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteCommentsArgs = {
  where: Array<CommentWhereUniqueInput>;
};


export type MutationDeleteMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type MutationDeleteMessagesArgs = {
  where: Array<MessageWhereUniqueInput>;
};


export type MutationDeleteNewsletterSubscriptionArgs = {
  where: NewsletterSubscriptionWhereUniqueInput;
};


export type MutationDeleteNewsletterSubscriptionsArgs = {
  where: Array<NewsletterSubscriptionWhereUniqueInput>;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeletePostsArgs = {
  where: Array<PostWhereUniqueInput>;
};


export type MutationDeleteReactionArgs = {
  where: ReactionWhereUniqueInput;
};


export type MutationDeleteReactionsArgs = {
  where: Array<ReactionWhereUniqueInput>;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteTagsArgs = {
  where: Array<TagWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationSigninWithGithubArgs = {
  code?: InputMaybe<Scalars['String']>;
};


export type MutationSigninWithGoogleArgs = {
  accessToken?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateCommentsArgs = {
  data: Array<CommentUpdateArgs>;
};


export type MutationUpdateMessageArgs = {
  data: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationUpdateMessagesArgs = {
  data: Array<MessageUpdateArgs>;
};


export type MutationUpdateNewsletterSubscriptionArgs = {
  data: NewsletterSubscriptionUpdateInput;
  where: NewsletterSubscriptionWhereUniqueInput;
};


export type MutationUpdateNewsletterSubscriptionsArgs = {
  data: Array<NewsletterSubscriptionUpdateArgs>;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdatePostsArgs = {
  data: Array<PostUpdateArgs>;
};


export type MutationUpdateReactionArgs = {
  data: ReactionUpdateInput;
  where: ReactionWhereUniqueInput;
};


export type MutationUpdateReactionsArgs = {
  data: Array<ReactionUpdateArgs>;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateTagsArgs = {
  data: Array<TagUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};


export type MutationWritePostArgs = {
  data?: InputMaybe<CreateOrUpdatePost>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NewsletterSubscription = {
  __typename?: 'NewsletterSubscription';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type NewsletterSubscriptionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type NewsletterSubscriptionOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type NewsletterSubscriptionUpdateArgs = {
  data: NewsletterSubscriptionUpdateInput;
  where: NewsletterSubscriptionWhereUniqueInput;
};

export type NewsletterSubscriptionUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type NewsletterSubscriptionWhereInput = {
  AND?: InputMaybe<Array<NewsletterSubscriptionWhereInput>>;
  NOT?: InputMaybe<Array<NewsletterSubscriptionWhereInput>>;
  OR?: InputMaybe<Array<NewsletterSubscriptionWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
};

export type NewsletterSubscriptionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PaginatedPosts = {
  __typename?: 'PaginatedPosts';
  count?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Post>>;
  pages?: Maybe<Scalars['Int']>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  comments?: Maybe<Array<Comment>>;
  commentsCount?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['JSON']>;
  cover?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  metadata?: Maybe<Scalars['JSON']>;
  published?: Maybe<Scalars['Boolean']>;
  reactions?: Maybe<Array<Reaction>>;
  reactionsCount?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PostCommentsArgs = {
  orderBy?: Array<CommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CommentWhereInput;
};


export type PostCommentsCountArgs = {
  where?: CommentWhereInput;
};


export type PostReactionsArgs = {
  orderBy?: Array<ReactionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ReactionWhereInput;
};


export type PostReactionsCountArgs = {
  where?: ReactionWhereInput;
};


export type PostTagsArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type PostTagsCountArgs = {
  where?: TagWhereInput;
};

export type PostCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  comments?: InputMaybe<CommentRelateToManyForCreateInput>;
  content?: InputMaybe<Scalars['JSON']>;
  cover?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  published?: InputMaybe<Scalars['Boolean']>;
  reactions?: InputMaybe<ReactionRelateToManyForCreateInput>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PostManyRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  published?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PostRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  create?: InputMaybe<Array<PostCreateInput>>;
};

export type PostRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  create?: InputMaybe<Array<PostCreateInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
};

export type PostRelateToOneForCreateInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  create?: InputMaybe<PostCreateInput>;
};

export type PostRelateToOneForUpdateInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  create?: InputMaybe<PostCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type PostUpdateArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  comments?: InputMaybe<CommentRelateToManyForUpdateInput>;
  content?: InputMaybe<Scalars['JSON']>;
  cover?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  published?: InputMaybe<Scalars['Boolean']>;
  reactions?: InputMaybe<ReactionRelateToManyForUpdateInput>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  comments?: InputMaybe<CommentManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  published?: InputMaybe<BooleanFilter>;
  reactions?: InputMaybe<ReactionManyRelationFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Comment>>;
  commentsCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  me?: Maybe<User>;
  message?: Maybe<Message>;
  messages?: Maybe<Array<Message>>;
  messagesCount?: Maybe<Scalars['Int']>;
  newsletterSubscription?: Maybe<NewsletterSubscription>;
  newsletterSubscriptions?: Maybe<Array<NewsletterSubscription>>;
  newsletterSubscriptionsCount?: Maybe<Scalars['Int']>;
  paginatedPosts?: Maybe<PaginatedPosts>;
  post?: Maybe<Post>;
  postBySlug?: Maybe<Post>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']>;
  reaction?: Maybe<Reaction>;
  reactions?: Maybe<Array<Reaction>>;
  reactionsCount?: Maybe<Scalars['Int']>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryCommentsArgs = {
  orderBy?: Array<CommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CommentWhereInput;
};


export type QueryCommentsCountArgs = {
  where?: CommentWhereInput;
};


export type QueryMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type QueryMessagesArgs = {
  orderBy?: Array<MessageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: MessageWhereInput;
};


export type QueryMessagesCountArgs = {
  where?: MessageWhereInput;
};


export type QueryNewsletterSubscriptionArgs = {
  where: NewsletterSubscriptionWhereUniqueInput;
};


export type QueryNewsletterSubscriptionsArgs = {
  orderBy?: Array<NewsletterSubscriptionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: NewsletterSubscriptionWhereInput;
};


export type QueryNewsletterSubscriptionsCountArgs = {
  where?: NewsletterSubscriptionWhereInput;
};


export type QueryPaginatedPostsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostBySlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPostsArgs = {
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PostWhereInput;
};


export type QueryPostsCountArgs = {
  where?: PostWhereInput;
};


export type QueryReactionArgs = {
  where: ReactionWhereUniqueInput;
};


export type QueryReactionsArgs = {
  orderBy?: Array<ReactionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ReactionWhereInput;
};


export type QueryReactionsCountArgs = {
  where?: ReactionWhereInput;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type QueryTagsCountArgs = {
  where?: TagWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Reaction = {
  __typename?: 'Reaction';
  author?: Maybe<User>;
  comment?: Maybe<Comment>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  post?: Maybe<Post>;
  type?: Maybe<Scalars['String']>;
};

export type ReactionCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  comment?: InputMaybe<CommentRelateToOneForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  post?: InputMaybe<PostRelateToOneForCreateInput>;
  type?: InputMaybe<Scalars['String']>;
};

export type ReactionManyRelationFilter = {
  every?: InputMaybe<ReactionWhereInput>;
  none?: InputMaybe<ReactionWhereInput>;
  some?: InputMaybe<ReactionWhereInput>;
};

export type ReactionOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export type ReactionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  create?: InputMaybe<Array<ReactionCreateInput>>;
};

export type ReactionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  create?: InputMaybe<Array<ReactionCreateInput>>;
  disconnect?: InputMaybe<Array<ReactionWhereUniqueInput>>;
  set?: InputMaybe<Array<ReactionWhereUniqueInput>>;
};

export type ReactionUpdateArgs = {
  data: ReactionUpdateInput;
  where: ReactionWhereUniqueInput;
};

export type ReactionUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  comment?: InputMaybe<CommentRelateToOneForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  post?: InputMaybe<PostRelateToOneForUpdateInput>;
  type?: InputMaybe<Scalars['String']>;
};

export type ReactionWhereInput = {
  AND?: InputMaybe<Array<ReactionWhereInput>>;
  NOT?: InputMaybe<Array<ReactionWhereInput>>;
  OR?: InputMaybe<Array<ReactionWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  comment?: InputMaybe<CommentWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  post?: InputMaybe<PostWhereInput>;
  type?: InputMaybe<StringNullableFilter>;
};

export type ReactionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type SigninResult = {
  __typename?: 'SigninResult';
  accessToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  posts?: Maybe<Post>;
};

export type TagCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  label?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<PostRelateToOneForCreateInput>;
};

export type TagManyRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  label?: InputMaybe<OrderDirection>;
};

export type TagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
};

export type TagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  label?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<PostRelateToOneForUpdateInput>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  label?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostWhereInput>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Comment>>;
  commentsCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['JSON']>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']>;
  providers?: Maybe<Scalars['JSON']>;
  reactions?: Maybe<Array<Reaction>>;
  reactionsCount?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UserCommentsArgs = {
  orderBy?: Array<CommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CommentWhereInput;
};


export type UserCommentsCountArgs = {
  where?: CommentWhereInput;
};


export type UserPostsArgs = {
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PostWhereInput;
};


export type UserPostsCountArgs = {
  where?: PostWhereInput;
};


export type UserReactionsArgs = {
  orderBy?: Array<ReactionOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ReactionWhereInput;
};


export type UserReactionsCountArgs = {
  where?: ReactionWhereInput;
};

export type UserCreateInput = {
  comments?: InputMaybe<CommentRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['JSON']>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
  providers?: InputMaybe<Scalars['JSON']>;
  reactions?: InputMaybe<ReactionRelateToManyForCreateInput>;
  role?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  firstname?: InputMaybe<OrderDirection>;
  gender?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastname?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  comments?: InputMaybe<CommentRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['JSON']>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
  providers?: InputMaybe<Scalars['JSON']>;
  reactions?: InputMaybe<ReactionRelateToManyForUpdateInput>;
  role?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  comments?: InputMaybe<CommentManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstname?: InputMaybe<StringFilter>;
  gender?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IdFilter>;
  lastname?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
  reactions?: InputMaybe<ReactionManyRelationFilter>;
  role?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ContactUsMutationVariables = Exact<{
  data: MessageCreateInput;
}>;


export type ContactUsMutation = { __typename?: 'Mutation', createMessage?: { __typename?: 'Message', createdAt?: any | null, email?: string | null, id: string, message?: string | null, name?: string | null } | null };

export type SubscribeToNewsletterMutationVariables = Exact<{
  data: NewsletterSubscriptionCreateInput;
}>;


export type SubscribeToNewsletterMutation = { __typename?: 'Mutation', createNewsletterSubscription?: { __typename?: 'NewsletterSubscription', id: string, name?: string | null, email?: string | null, createdAt?: any | null } | null };

export type SigninWithGoogleMutationVariables = Exact<{
  accessToken?: InputMaybe<Scalars['String']>;
}>;


export type SigninWithGoogleMutation = { __typename?: 'Mutation', signinWithGoogle?: { __typename?: 'SigninResult', accessToken?: string | null, user?: { __typename?: 'User', id: string, firstname?: string | null, lastname?: string | null, avatar?: string | null, gender?: string | null, role?: string | null, createdAt?: any | null, email?: string | null } | null } | null };

export type SigninWithGithubMutationVariables = Exact<{
  code?: InputMaybe<Scalars['String']>;
}>;


export type SigninWithGithubMutation = { __typename?: 'Mutation', signinWithGithub?: { __typename?: 'SigninResult', accessToken?: string | null, user?: { __typename?: 'User', id: string, firstname?: string | null, lastname?: string | null, avatar?: string | null, gender?: string | null, role?: string | null, createdAt?: any | null, email?: string | null } | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, firstname?: string | null, lastname?: string | null, avatar?: string | null, gender?: string | null, role?: string | null, createdAt?: any | null, email?: string | null } | null };


export const ContactUsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ContactUs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MessageCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ContactUsMutation, ContactUsMutationVariables>;
export const SubscribeToNewsletterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubscribeToNewsletter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSubscriptionCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNewsletterSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<SubscribeToNewsletterMutation, SubscribeToNewsletterMutationVariables>;
export const SigninWithGoogleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SigninWithGoogle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signinWithGoogle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"accessToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<SigninWithGoogleMutation, SigninWithGoogleMutationVariables>;
export const SigninWithGithubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SigninWithGithub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signinWithGithub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<SigninWithGithubMutation, SigninWithGithubMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;