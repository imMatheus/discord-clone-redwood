import type { FindServerAndChannelsById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindServerAndChannelsById($id: Int!) {
    server: server(id: $id) {
      id
      name
      createdAt
      channels {
        id
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  server,
}: CellSuccessProps<FindServerAndChannelsById>) => {
  console.log('hi sidebar ', server)

  return (
    <div className="">
      <div className="py-3 px-4">{server.name}</div>
      <pre className="py-2">{JSON.stringify(server, null, 2)}</pre>
    </div>
  )
}
