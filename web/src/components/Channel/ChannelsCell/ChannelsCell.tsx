import type { FindChannels } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Channels from 'src/components/Channel/Channels'

export const QUERY = gql`
  query FindChannels {
    channels {
      id
      name
      channel_type
      serverId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No channels yet. '}
      <Link to={routes.newChannel()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ channels }: CellSuccessProps<FindChannels>) => {
  return <Channels channels={channels} />
}
