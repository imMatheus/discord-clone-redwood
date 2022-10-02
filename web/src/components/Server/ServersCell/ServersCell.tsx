import type { FindServers } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Servers from 'src/components/Server/Servers'

export const QUERY = gql`
  query FindServers {
    servers {
      id
      name
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No servers yet. '}
      <Link
        to={routes.newServer()}
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

export const Success = ({ servers }: CellSuccessProps<FindServers>) => {
  return <Servers servers={servers} />
}
