import ServerCell from 'src/components/Server/ServerCell'

type ServerPageProps = {
  id: number
}

const ServerPage = ({ id }: ServerPageProps) => {
  return <ServerCell id={id} />
}

export default ServerPage
