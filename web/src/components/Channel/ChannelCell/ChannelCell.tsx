import type { FindChannelById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Channel from 'src/components/Channel/Channel'

export const QUERY = gql`
  query FindChannelById($id: Int!) {
    channel: channel(id: $id) {
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

export const Empty = () => <div>Channel not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ channel }: CellSuccessProps<FindChannelById>) => {
  return <Channel channel={channel} />
}
