import ChannelsSidebarCell from 'src/components/ChannelsSidebar/ChannelsSidebarCell'

interface Props {
  serverId: number
}

const ChannelsSidebar = ({ serverId }: Props) => {
  return (
    <aside className="w-60 bg-clr-bg-secondary">
      <ChannelsSidebarCell id={serverId} />
    </aside>
  )
}

export default ChannelsSidebar
