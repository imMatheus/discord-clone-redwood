import type { FindCommentById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Comment from 'src/components/Comment/Comment'

export const QUERY = gql`
  query FindCommentById($id: Int!) {
    comment: comment(id: $id) {
      id
      text
      postId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Comment not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ comment }: CellSuccessProps<FindCommentById>) => {
  return <Comment comment={comment} />
}
