// import type { MessagesQuery } from 'types/graphql'

import type { CellFailureProps } from '@redwoodjs/web'
// import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query MessagesQuery {
    messages {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

// export const Success = ({ messages }: CellSuccessProps<MessagesQuery>) => {
export const Success = ({ messages }: any) => {
  console.log(messages)

  return (
    <ul>
      {messages.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
