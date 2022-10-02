import type { FindMessages } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Messages from 'src/components/Message/Messages'

export const QUERY = gql`
  query FindMessages {
    messages {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No messages yet. '}
      <Link
        to={routes.newMessage()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ messages }: CellSuccessProps<FindMessages>) => {
  return <Messages messages={messages} />
}
