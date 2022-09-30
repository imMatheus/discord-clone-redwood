import type { FindComments } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Comments from 'src/components/Comment/Comments'

export const QUERY = gql`
  query FindComments {
    comments {
      id
      text
      postId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No comments yet. '}
      <Link
        to={routes.newComment()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ comments }: CellSuccessProps<FindComments>) => {
  return <Comments comments={comments} />
}
