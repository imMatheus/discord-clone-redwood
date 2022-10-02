import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ChannelForm from 'src/components/Channel/ChannelForm'

import type { CreateChannelInput } from 'types/graphql'

const CREATE_CHANNEL_MUTATION = gql`
  mutation CreateChannelMutation($input: CreateChannelInput!) {
    createChannel(input: $input) {
      id
    }
  }
`

const NewChannel = () => {
  const [createChannel, { loading, error }] = useMutation(
    CREATE_CHANNEL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Channel created')
        navigate(routes.channels())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateChannelInput) => {
    createChannel({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Channel</h2>
      </header>
      <div className="rw-segment-main">
        <ChannelForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewChannel
