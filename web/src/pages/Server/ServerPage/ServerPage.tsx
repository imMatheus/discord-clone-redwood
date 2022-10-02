import ServerCell from 'src/components/Server/ServerCell'
type ServerPageProps = {
  serverId: number
}

const ServerPage = ({ serverId }: ServerPageProps) => {
  console.log('serverId: ', serverId)

  return <ServerCell id={serverId} />
}

export default ServerPage
