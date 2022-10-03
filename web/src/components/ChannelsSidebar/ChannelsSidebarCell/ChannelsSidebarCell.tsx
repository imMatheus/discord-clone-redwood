import type { ChannelsSidebar } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ChannelsSidebar($id: Int!) {
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

export const Loading = () => <div className="flex-1">Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ server }: CellSuccessProps<ChannelsSidebar>) => {
  console.log('hi sidebar ', server)

  return (
    <div className="flex flex-1 flex-col overflow-y-scroll">
      <div className="sticky top-0 border-b border-b-clr-black bg-clr-bg-secondary py-3 px-4 font-medium">
        {server.name}
      </div>
      <div className="flex-1 py-3 px-4">
        <ul className="">
          {[1, 2, 3, 4, 6, 7, 8].map((num) => (
            <li key={num}>Hej</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
