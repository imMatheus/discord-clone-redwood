import React from 'react'

import classNames from 'classnames'
import type { ServersQuery } from 'types/graphql'

import { Link, routes, useMatch } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

interface SidebarListItemProps {
  server: CellSuccessProps<ServersQuery>['servers'][number]
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({ server }) => {
  console.log('server: ', server)
  const { match } = useMatch(routes.server({ serverId: server.id }))

  return (
    <div className="relative flex w-[4.5rem] items-center justify-center overflow-x-hidden px-3">
      <div
        className={classNames(
          'absolute left-0 h-10 w-3 -translate-x-2/3 rounded-full bg-clr-text opacity-100 transition-all',
          { 'h-0 -translate-x-full opacity-0': !match }
        )}
      ></div>

      <Link to={routes.server({ serverId: server.id })}>
        <div
          className={classNames(
            'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-3xl bg-clr-bg-primary text-lg transition-all duration-300 hover:rounded-2xl hover:bg-clr-blurple',
            { 'rounded-2xl bg-clr-blurple': match }
          )}
        >
          {server.name.substring(0, 1)}
        </div>
      </Link>
    </div>
  )
}

export default SidebarListItem
