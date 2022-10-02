import React from 'react'

import type { ServersQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

interface SidebarListItemProps {
  server: CellSuccessProps<ServersQuery>['servers'][number]
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({ server }) => {
  console.log('server: ', server)

  return (
    <div className="relative flex w-[4.5rem] items-center justify-center overflow-x-hidden px-3">
      <Link to={routes.server({ serverId: server.id })}>
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-3xl bg-clr-bg-primary text-lg transition-all duration-300 hover:rounded-2xl hover:bg-clr-blurple">
          {server.name.substring(0, 1)}
        </div>
      </Link>
    </div>
  )
}

export default SidebarListItem
