import type { ServersQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SidebarListItem from 'src/components/Sidebar/SidebarListItem'

export const QUERY = gql`
  query ServersQuery {
    servers {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ servers }: CellSuccessProps<ServersQuery>) => {
  console.log('log; ', servers)

  return (
    <ul className="flex w-[4.5rem] flex-col gap-2 overflow-x-visible overflow-y-scroll py-2">
      {servers.map((server) => {
        return <SidebarListItem key={server.id} server={server} />
      })}
    </ul>
  )
}
