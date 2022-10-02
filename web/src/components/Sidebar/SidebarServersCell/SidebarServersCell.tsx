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
  return (
    <ul className="flex flex-col gap-2 py-2">
      {servers.map((item) => {
        return <SidebarListItem key={item.id} />
      })}
      {servers.map((item) => {
        return <SidebarListItem key={item.id} />
      })}
      {servers.map((item) => {
        return <SidebarListItem key={item.id} />
      })}
      {servers.map((item) => {
        return <SidebarListItem key={item.id} />
      })}
      {servers.map((item) => {
        return <SidebarListItem key={item.id} />
      })}
      {servers.map((item) => {
        return <SidebarListItem key={item.id} />
      })}
      {servers.map((item) => {
        return <SidebarListItem key={item.id} />
      })}
    </ul>
  )
}
