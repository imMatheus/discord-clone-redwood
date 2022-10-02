import type { FindServerById } from 'types/graphql'

import { Redirect, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindServerById($id: Int!) {
    server: server(id: $id) {
      id
      channels {
        id
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Server not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ server }: CellSuccessProps<FindServerById>) => {
  return server.channels.length > 0 ? (
    <Redirect
      to={routes.channel({
        serverId: server.id,
        channelId: server.channels[0].id,
      })}
    />
  ) : (
    <div>hej</div>
  )
}
