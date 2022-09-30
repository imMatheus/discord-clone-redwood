import EditCommentCell from 'src/components/Comment/EditCommentCell'

type CommentPageProps = {
  id: number
}

const EditCommentPage = ({ id }: CommentPageProps) => {
  return <EditCommentCell id={id} />
}

export default EditCommentPage
