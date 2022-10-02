import type { EditServerById, UpdateServerInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ServerForm from 'src/components/Server/ServerForm'

export const QUERY = gql`
  query EditServerById($id: Int!) {
    server: server(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`
const UPDATE_SERVER_MUTATION = gql`
  mutation UpdateServerMutation($id: Int!, $input: UpdateServerInput!) {
    updateServer(id: $id, input: $input) {
      id
      name
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ server }: CellSuccessProps<EditServerById>) => {
  const [updateServer, { loading, error }] = useMutation(
    UPDATE_SERVER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Server updated')
        navigate(routes.servers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateServerInput,
    id: EditServerById['server']['id']
  ) => {
    updateServer({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Server {server?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ServerForm server={server} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
