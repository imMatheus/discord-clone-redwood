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

export const Loading = () => (
  <ul className="flex w-[4.5rem] flex-col gap-2 overflow-x-visible overflow-y-scroll py-2">
    {[1, 2, 3, 4, 5, 6].map((num) => {
      return (
        <div
          key={num}
          className="relative flex w-[4.5rem] animate-pulse items-center justify-center overflow-x-hidden px-3"
        >
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-3xl bg-clr-bg-primary text-lg transition-all duration-300 hover:rounded-2xl hover:bg-clr-blurple"></div>
        </div>
      )
    })}
  </ul>
)

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
