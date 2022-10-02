export const schema = gql`
  type Server {
    id: Int!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    members: [Member]!
    channels: [Channel]!
  }

  type Query {
    servers: [Server!]! @requireAuth
    server(id: Int!): Server @requireAuth
  }

  input CreateServerInput {
    name: String!
  }

  input UpdateServerInput {
    name: String
  }

  type Mutation {
    createServer(input: CreateServerInput!): Server! @requireAuth
    updateServer(id: Int!, input: UpdateServerInput!): Server! @requireAuth
    deleteServer(id: Int!): Server! @requireAuth
  }
`
