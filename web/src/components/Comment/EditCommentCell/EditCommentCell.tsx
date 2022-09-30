import type { EditCommentById, UpdateCommentInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CommentForm from 'src/components/Comment/CommentForm'

export const QUERY = gql`
  query EditCommentById($id: Int!) {
    comment: comment(id: $id) {
      id
      text
      postId
    }
  }
`
const UPDATE_COMMENT_MUTATION = gql`
  mutation UpdateCommentMutation($id: Int!, $input: UpdateCommentInput!) {
    updateComment(id: $id, input: $input) {
      id
      text
      postId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ comment }: CellSuccessProps<EditCommentById>) => {
  const [updateComment, { loading, error }] = useMutation(
    UPDATE_COMMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Comment updated')
        navigate(routes.comments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCommentInput,
    id: EditCommentById['comment']['id']
  ) => {
    updateComment({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Comment {comment?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <CommentForm comment={comment} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
