import type { FindServerById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindServerById($id: Int!) {
    server: server(id: $id) {
      id
      name
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

export const Success = ({ server }: CellSuccessProps<FindServerById>) => {
  console.log('hi sidebar ', server)

  return (
    <div className="">
      <pre className="py-2">{JSON.stringify(server, null, 2)}</pre>
    </div>
  )
}
