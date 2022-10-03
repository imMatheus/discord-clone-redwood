type ServerLayoutProps = {
  children?: React.ReactNode
}
import { useParams } from '@redwoodjs/router'

import ChannelNavbar from 'src/components/ChannelNavbar'
import ChannelsSidebar from 'src/components/ChannelsSidebar'

const ServerLayout = ({ children }: ServerLayoutProps) => {
  const params = useParams()
  console.log(params)

  return (
    <div className="flex flex-1">
      <ChannelsSidebar serverId={parseInt(params.serverId)} />
      <div className="flex flex-1 flex-col">
        <ChannelNavbar />
        {children}
      </div>
    </div>
  )
}

export default ServerLayout
