import ServerSidebarCell from 'src/components/ServerSidebarCell'

interface Props {
  serverId: number
}
const ServerSidebar = ({ serverId }: Props) => {
  return (
    <aside className="w-60 bg-clr-bg-secondary p-4 text-xs">
      <ServerSidebarCell id={serverId} />
    </aside>
  )
}

export default ServerSidebar
