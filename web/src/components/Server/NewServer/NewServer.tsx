import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ServerForm from 'src/components/Server/ServerForm'

import type { CreateServerInput } from 'types/graphql'

const CREATE_SERVER_MUTATION = gql`
  mutation CreateServerMutation($input: CreateServerInput!) {
    createServer(input: $input) {
      id
    }
  }
`

const NewServer = () => {
  const [createServer, { loading, error }] = useMutation(
    CREATE_SERVER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Server created')
        navigate(routes.servers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateServerInput) => {
    createServer({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Server</h2>
      </header>
      <div className="rw-segment-main">
        <ServerForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewServer
