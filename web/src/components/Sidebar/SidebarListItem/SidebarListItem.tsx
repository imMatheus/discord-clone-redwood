import React from 'react'

import classNames from 'classnames'
import type { ServersQuery } from 'types/graphql'

import { Link, routes, useLocation } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

type SidebarListItemProps = {
  server?: CellSuccessProps<ServersQuery>['servers'][number]
  loading?: boolean
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({
  server,
  loading,
}) => {
  const { pathname } = useLocation()

  if (loading || !server) {
    return (
      <div className="relative flex w-[4.5rem] animate-pulse items-center justify-center overflow-x-hidden px-3">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-3xl bg-clr-bg-primary text-lg transition-all duration-300 hover:rounded-2xl hover:bg-clr-blurple"></div>
      </div>
    )
  }

  const match = pathname.startsWith(`/server/${server.id}`)

  return (
    <div className="relative flex w-[4.5rem] items-center justify-center overflow-x-hidden px-3">
      <div className="peer group">
        <Link
          to={
            server.channels[0]
              ? routes.channel({
                  serverId: server.id,
                  channelId: server.channels[0].id,
                })
              : routes.server({
                  serverId: server.id,
                })
          }
        >
          <div
            className={classNames(
              'peer flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-3xl bg-clr-bg-primary text-lg transition-all duration-300 group-hover:rounded-2xl group-hover:bg-clr-blurple',
              { 'rounded-2xl bg-clr-blurple': match }
            )}
          >
            {server.name.substring(0, 1)}
          </div>
        </Link>
      </div>

      <div
        className={classNames(
          'absolute left-0 h-10 w-3 rounded-full bg-clr-text opacity-100 transition-all',
          match
            ? '-translate-x-1/2'
            : 'h-3 -translate-x-full peer-hover:h-6 peer-hover:-translate-x-2/3'
        )}
      ></div>
    </div>
  )
}

export default SidebarListItem
