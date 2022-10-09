import type { MessagesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Message from 'src/components/Message'

export const QUERY = gql`
  query MessagesQuery($id: Int!) {
    messages(id: $id) {
      id
      text
      createdAt
      user {
        avatar_url
        username
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>hej från empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ messages }: CellSuccessProps<MessagesQuery>) => {
  console.log(messages)

  return (
    <ul className="flex flex-1 flex-col gap-1 overflow-y-scroll pt-4">
      hejsan
      {messages.map((message) => {
        return <Message key={message.id} message={message} />
      })}
    </ul>
  )
}
