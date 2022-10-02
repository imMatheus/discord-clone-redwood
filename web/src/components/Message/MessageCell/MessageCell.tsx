import type { FindMessageById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Message from 'src/components/Message/Message'

export const QUERY = gql`
  query FindMessageById($id: Int!) {
    message: message(id: $id) {
      id
      text
      channelId
      userId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Message not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ message }: CellSuccessProps<FindMessageById>) => {
  return <Message message={message} />
}
