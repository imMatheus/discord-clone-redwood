import React from 'react'

import type { MessagesQuery } from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

interface Props {
  message: CellSuccessProps<MessagesQuery>['messages'][number]
}

const Message: React.FC<Props> = ({ message }) => {
  return (
    <li className="flex gap-4 px-4 py-1 transition-colors hover:bg-clr-bg-overlay">
      <div className="h-10 w-10 flex-shrink-0">
        <img
          className="h-full w-full rounded-full object-cover"
          src={message.user.avatar_url}
          alt=""
        />
      </div>
      <div>
        <div className="flex items-baseline gap-2">
          <h4 className="font-medium">{message.user.username}</h4>
          <time
            dateTime={message.createdAt}
            className="text-xs font-semibold text-clr-text-mute"
          >
            {message.createdAt}
          </time>
        </div>
        <p className="overflow-hidden break-words font-normal leading-5 text-clr-text-light">
          {message.text}
        </p>
      </div>
    </li>
  )
}

export default Message
