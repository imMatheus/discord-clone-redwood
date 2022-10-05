import React from 'react'

import classNames from 'classnames'
import { Hash } from 'react-feather'
import type { ChannelsSidebar } from 'types/graphql'

import { Link, routes, useLocation } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

interface SidebarListItemProps {
  serverId: number
  channel: CellSuccessProps<ChannelsSidebar>['server']['channels'][number]
}

const ChannelsSidebarChannelItem: React.FC<SidebarListItemProps> = ({
  serverId,
  channel,
}) => {
  const { pathname } = useLocation()

  const match = pathname.startsWith(`/server/${serverId}/channel/${channel.id}`)

  return (
    <Link
      to={routes.channel({ serverId, channelId: channel.id })}
      className={classNames(
        'flex items-center gap-2 rounded-md py-1.5 px-2 font-medium text-clr-text-grayed transition-colors hover:bg-clr-bg-separator',
        { 'bg-clr-bg-content text-clr-text': match }
      )}
    >
      <Hash strokeWidth={2.5} className="h-4 w-4 text-clr-text-grayed" />
      <p className="">{channel.name}</p>
    </Link>
  )
}

export default ChannelsSidebarChannelItem
