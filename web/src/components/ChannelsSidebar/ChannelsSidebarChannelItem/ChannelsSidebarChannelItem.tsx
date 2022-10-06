import React from 'react'

import classNames from 'classnames'
import { Hash } from 'react-feather'
import type { ChannelsSidebar } from 'types/graphql'

import { Link, routes, useLocation } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

type SidebarListItemProps =
  | {
      serverId: number
      channel: CellSuccessProps<ChannelsSidebar>['server']['channels'][number]
      loading?: never
    }
  | {
      loading: boolean
      serverId?: never
      channel?: never
    }

const ChannelsSidebarChannelItem: React.FC<SidebarListItemProps> = ({
  serverId,
  channel,
  loading,
}) => {
  const { pathname } = useLocation()

  const match =
    serverId &&
    channel &&
    pathname.startsWith(`/server/${serverId}/channel/${channel.id}`)
  const className = classNames(
    'flex items-center gap-2 rounded-md py-1.5 px-2 font-medium text-clr-text-grayed',
    { 'bg-clr-bg-content text-clr-text': match },
    channel && 'transition-colors hover:bg-clr-bg-separator'
  )
  console.log(channel)
  console.log(loading)

  if (channel)
    return (
      <Link
        to={routes.channel({ serverId, channelId: channel.id })}
        className={className}
      >
        <Hash strokeWidth={2.5} className="h-4 w-4 text-clr-text-grayed" />
        <p className="">{channel.name}</p>
      </Link>
    )

  return (
    <div className={classNames(className, 'animate-pulse bg-clr-bg-primary')}>
      <span className="inline-block h-5 w-5 rounded-md bg-clr-bg-secondary"></span>
      <p className="rounded-md bg-clr-bg-secondary text-transparent">
        {Array(Math.floor(Math.random() * 10) + 5)
          .fill('*')
          .join('')}
      </p>
    </div>
  )
}

export default ChannelsSidebarChannelItem
