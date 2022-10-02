// import { Link, routes } from '@redwoodjs/router'
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
      <p>
        Find me in <code>./web/src/pages/ChannelPage/ChannelPage.tsx</code>
      </p>
      <p>
        My default route is named <code>channel</code>, link to me with `
        {/* <Link to={routes.channel()}>Channel</Link>` */}
      </p>
      <p className="m-3 bg-blue-400">{serverId}</p>
      <p className="bg-blue-400">{channelId}</p>
    </>
  )
}

export default ChannelPage
