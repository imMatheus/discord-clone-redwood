import type { ChannelsSidebar } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ChannelsSidebarChannelItem from 'src/components/ChannelsSidebar/ChannelsSidebarChannelItem'

export const QUERY = gql`
  query ChannelsSidebar($id: Int!) {
    server(id: $id) {
      id
      name
      createdAt
      channels {
        id
        createdAt
        updatedAt
        name
      }
    }
  }
`

export const Loading = () => (
  <div className="flex-1 py-3 px-2">
    <ul className="space-y-1">
      {[1, 2, 3, 4, 5, 6, 7].map((num) => (
        <ChannelsSidebarChannelItem key={num} loading={true} />
      ))}
    </ul>
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ server }: CellSuccessProps<ChannelsSidebar>) => {
  return (
    <div className="flex flex-1 flex-col overflow-y-scroll">
      <div className="sticky top-0 border-b border-b-clr-black bg-clr-bg-secondary py-3 px-4 font-medium">
        {server.name}
      </div>
      <div className="flex-1 py-3 px-2">
        <ul className="space-y-1">
          {server.channels.map((channel) => (
            <ChannelsSidebarChannelItem
              key={channel.id}
              serverId={server.id}
              channel={channel}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
