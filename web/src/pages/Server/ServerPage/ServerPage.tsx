import ServerCell from 'src/components/Server/ServerCell'
type ServerPageProps = {
  serverId: number
}

const ServerPage = ({ serverId }: ServerPageProps) => {
  return <ServerCell id={serverId} />
}

export default ServerPage
