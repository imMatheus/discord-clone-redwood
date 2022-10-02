import EditChannelCell from 'src/components/Channel/EditChannelCell'

type ChannelPageProps = {
  id: number
}

const EditChannelPage = ({ id }: ChannelPageProps) => {
  return <EditChannelCell id={id} />
}

export default EditChannelPage
