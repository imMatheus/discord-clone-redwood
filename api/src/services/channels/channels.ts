import type {
  QueryResolvers,
  MutationResolvers,
  ChannelRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const channels: QueryResolvers['channels'] = () => {
  return db.channel.findMany()
}

export const channel: QueryResolvers['channel'] = ({ id }) => {
  return db.channel.findUnique({
    where: { id },
  })
}

export const createChannel: MutationResolvers['createChannel'] = ({
  input,
}) => {
  return db.channel.create({
    data: input,
  })
}

export const updateChannel: MutationResolvers['updateChannel'] = ({
  id,
  input,
}) => {
  return db.channel.update({
    data: input,
    where: { id },
  })
}

export const deleteChannel: MutationResolvers['deleteChannel'] = ({ id }) => {
  return db.channel.delete({
    where: { id },
  })
}

export const Channel: ChannelRelationResolvers = {
  server: (_obj, { root }) => {
    return db.channel.findUnique({ where: { id: root?.id } }).server()
  },
  messages: (_obj, { root }) => {
    return db.channel.findUnique({ where: { id: root?.id } }).messages()
  },
}
