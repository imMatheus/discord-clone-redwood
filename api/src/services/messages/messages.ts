import type {
  QueryResolvers,
  MutationResolvers,
  MessageRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const messages: QueryResolvers['messages'] = ({ channelId }) => {
  return db.message.findMany({
    where: {
      channelId,
    },
  })
}

export const message: QueryResolvers['message'] = ({ id }) => {
  return db.message.findUnique({
    where: { id },
  })
}

export const createMessage: MutationResolvers['createMessage'] = ({
  input,
}) => {
  return db.message.create({
    data: input,
  })
}

export const updateMessage: MutationResolvers['updateMessage'] = ({
  id,
  input,
}) => {
  return db.message.update({
    data: input,
    where: { id },
  })
}

export const deleteMessage: MutationResolvers['deleteMessage'] = ({ id }) => {
  return db.message.delete({
    where: { id },
  })
}

export const Message: MessageRelationResolvers = {
  channel: (_obj, { root }) => {
    return db.message.findUnique({ where: { id: root?.id } }).channel()
  },
  user: (_obj, { root }) => {
    return db.message.findUnique({ where: { id: root?.id } }).user()
  },
}
