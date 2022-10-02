import type { FindMemberById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Member from 'src/components/Member/Member'

export const QUERY = gql`
  query FindMemberById($id: Int!) {
    member: member(id: $id) {
      id
      serverId
      userId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Member not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ member }: CellSuccessProps<FindMemberById>) => {
  return <Member member={member} />
}
