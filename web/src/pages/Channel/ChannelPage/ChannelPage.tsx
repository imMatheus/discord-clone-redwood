import ChannelCell from 'src/components/Channel/ChannelCell'

type ChannelPageProps = {
  id: number
}

const ChannelPage = ({ id }: ChannelPageProps) => {
  return <ChannelCell id={id} />
}

export default ChannelPage
