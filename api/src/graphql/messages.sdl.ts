export const schema = gql`
  type Message {
    id: Int!
    text: String!
    channel: Channel!
    channelId: Int!
    user: User!
    userId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    messages(id: Int!): [Message!]! @requireAuth
    message(id: Int!): Message @requireAuth
  }

  input CreateMessageInput {
    text: String!
    channelId: Int!
    userId: Int!
  }

  input UpdateMessageInput {
    text: String
    channelId: Int
    userId: Int
  }

  type Mutation {
    createMessage(input: CreateMessageInput!): Message! @requireAuth
    updateMessage(id: Int!, input: UpdateMessageInput!): Message! @requireAuth
    deleteMessage(id: Int!): Message! @requireAuth
  }
`
