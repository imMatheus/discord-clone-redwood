type ServerLayoutProps = {
  children?: React.ReactNode
}
import { useParams } from '@redwoodjs/router'

import ChannelsSidebar from 'src/components/ChannelsSidebar'

const ServerLayout = ({ children }: ServerLayoutProps) => {
  const params = useParams()
  console.log(params)

  return (
    <div className="flex flex-1 bg-red-800">
      <ChannelsSidebar serverId={parseInt(params.serverId)} />
      <div className="flex-1 bg-orange-400 p-2">{children}</div>
    </div>
  )
}

export default ServerLayout
