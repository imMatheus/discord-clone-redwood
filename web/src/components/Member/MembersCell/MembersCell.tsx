import type { FindMembers } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Members from 'src/components/Member/Members'

export const QUERY = gql`
  query FindMembers {
    members {
      id
      serverId
      userId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No members yet. '}
      <Link to={routes.newMember()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ members }: CellSuccessProps<FindMembers>) => {
  return <Members members={members} />
}
