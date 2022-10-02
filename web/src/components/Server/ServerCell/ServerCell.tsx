import type { FindServerById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Server from 'src/components/Server/Server'

export const QUERY = gql`
  query FindServerById($id: Int!) {
    server: server(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Server not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ server }: CellSuccessProps<FindServerById>) => {
  return <Server server={server} />
}
