export const schema = gql`
  type Channel {
    id: Int!
    name: String!
    channel_type: ChannelEnum!
    server: Server!
    serverId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    messages: [Message]!
  }

  enum ChannelEnum {
    CHAT
    VOICE
  }

  type Query {
    channels: [Channel!]! @requireAuth
    channel(id: Int!): Channel @requireAuth
  }

  input CreateChannelInput {
    name: String!
    channel_type: ChannelEnum!
    serverId: Int!
  }

  input UpdateChannelInput {
    name: String
    channel_type: ChannelEnum
    serverId: Int
  }

  type Mutation {
    createChannel(input: CreateChannelInput!): Channel! @requireAuth
    updateChannel(id: Int!, input: UpdateChannelInput!): Channel! @requireAuth
    deleteChannel(id: Int!): Channel! @requireAuth
  }
`
