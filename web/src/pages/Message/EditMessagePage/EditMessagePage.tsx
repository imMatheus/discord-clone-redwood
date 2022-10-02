import EditMessageCell from 'src/components/Message/EditMessageCell'

type MessagePageProps = {
  id: number
}

const EditMessagePage = ({ id }: MessagePageProps) => {
  return <EditMessageCell id={id} />
}

export default EditMessagePage
