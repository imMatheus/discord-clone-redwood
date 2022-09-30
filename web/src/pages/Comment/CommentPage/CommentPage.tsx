import CommentCell from 'src/components/Comment/CommentCell'

type CommentPageProps = {
  id: number
}

const CommentPage = ({ id }: CommentPageProps) => {
  return <CommentCell id={id} />
}

export default CommentPage
