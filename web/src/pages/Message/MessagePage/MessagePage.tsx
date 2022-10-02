import MessageCell from 'src/components/Message/MessageCell'

type MessagePageProps = {
  id: number
}

const MessagePage = ({ id }: MessagePageProps) => {
  return <MessageCell id={id} />
}

export default MessagePage
