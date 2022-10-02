import type {
  DeleteServerMutationVariables,
  FindServerById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_SERVER_MUTATION = gql`
  mutation DeleteServerMutation($id: Int!) {
    deleteServer(id: $id) {
      id
    }
  }
`

const timeTag = (datetime?: string) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

interface Props {
  server: NonNullable<FindServerById['server']>
}

const Server = ({ server }: Props) => {
  const [deleteServer] = useMutation(DELETE_SERVER_MUTATION, {
    onCompleted: () => {
      toast.success('Server deleted')
      navigate(routes.servers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteServerMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete server ' + id + '?')) {
      deleteServer({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Server {server.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{server.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{server.name}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(server.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(server.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editServer({ id: server.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(server.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Server
