import type { EditChannelById, UpdateChannelInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ChannelForm from 'src/components/Channel/ChannelForm'

export const QUERY = gql`
  query EditChannelById($id: Int!) {
    channel: channel(id: $id) {
      id
      name
      channel_type
      serverId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_CHANNEL_MUTATION = gql`
  mutation UpdateChannelMutation($id: Int!, $input: UpdateChannelInput!) {
    updateChannel(id: $id, input: $input) {
      id
      name
      channel_type
      serverId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ channel }: CellSuccessProps<EditChannelById>) => {
  const [updateChannel, { loading, error }] = useMutation(
    UPDATE_CHANNEL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Channel updated')
        navigate(routes.channels())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateChannelInput,
    id: EditChannelById['channel']['id']
  ) => {
    updateChannel({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Channel {channel?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ChannelForm channel={channel} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
