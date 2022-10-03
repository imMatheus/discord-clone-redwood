import { MetaTags } from '@redwoodjs/web'

interface Props {
  serverId: number
  channelId: number
}

const ChannelPage = ({ serverId, channelId }: Props) => {
  return (
    <>
      <MetaTags title="Channel" description="Channel page" />

      <h1>ChannelPage</h1>

      <p className="mb-2 bg-blue-400">{serverId}</p>
      <p className="bg-blue-400">{channelId}</p>
    </>
  )
}

export default ChannelPage
