import React from 'react'

import type { ServersQuery } from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

interface SidebarListItemProps {
  server: CellSuccessProps<ServersQuery>['servers'][number]
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({ server }) => {
  return (
    <div className="relative flex w-[4.5rem] items-center justify-center overflow-x-hidden px-3">
      <div className="h-12 w-12 flex-shrink-0 rounded-3xl bg-red-500 transition-all duration-300 hover:rounded-2xl">
        {server.name}
      </div>
    </div>
  )
}

export default SidebarListItem
