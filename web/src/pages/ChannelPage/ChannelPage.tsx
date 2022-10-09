import { MetaTags } from '@redwoodjs/web'

import MessagesCell from 'src/components/MessagesCell'

interface Props {
  serverId: number
  channelId: number
}

const ChannelPage = ({ channelId }: Props) => {
  return (
    <>
      <MetaTags title="Channel" description="Channel page" />
      hej
      <MessagesCell id={channelId} />
    </>
  )
}

export default ChannelPage
