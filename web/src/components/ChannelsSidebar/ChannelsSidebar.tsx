import ChannelsSidebarCell from 'src/components/ChannelsSidebar/ChannelsSidebarCell'
import UserDisplay from 'src/components/ChannelsSidebar/UserDisplay'

interface Props {
  serverId: number
}

const ChannelsSidebar = ({ serverId }: Props) => {
  return (
    <aside className="flex h-screen w-60 flex-col bg-clr-bg-secondary">
      <ChannelsSidebarCell id={serverId} />
      <UserDisplay />
    </aside>
  )
}

export default ChannelsSidebar
