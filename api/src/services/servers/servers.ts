import type {
  QueryResolvers,
  MutationResolvers,
  ServerRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const servers: QueryResolvers['servers'] = () => {
  return db.server.findMany({
    where: {
      members: {
        some: {
          userId: context.currentUser.id,
        },
      },
    },
  })
}

export const server: QueryResolvers['server'] = ({ id }) => {
  return db.server.findUnique({
    where: { id },
  })
}

export const createServer: MutationResolvers['createServer'] = ({ input }) => {
  console.log('context.currentUser.id,', context.currentUser.id)

  return db.server.create({
    data: {
      ...input,
      members: {
        create: [
          {
            userId: context.currentUser.id,
          },
        ],
      },
    },
  })
}

export const updateServer: MutationResolvers['updateServer'] = ({
  id,
  input,
}) => {
  return db.server.update({
    data: input,
    where: { id },
  })
}

export const deleteServer: MutationResolvers['deleteServer'] = ({ id }) => {
  return db.server.delete({
    where: { id },
  })
}

export const Server: ServerRelationResolvers = {
  members: (_obj, { root }) => {
    return db.server.findUnique({ where: { id: root?.id } }).members()
  },
  channels: (_obj, { root }) => {
    return db.server.findUnique({ where: { id: root?.id } }).channels()
  },
}
