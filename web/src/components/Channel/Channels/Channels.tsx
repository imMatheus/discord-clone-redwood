import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Channel/ChannelsCell'

import type { DeleteChannelMutationVariables, FindChannels } from 'types/graphql'

const DELETE_CHANNEL_MUTATION = gql`
  mutation DeleteChannelMutation($id: Int!) {
    deleteChannel(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const truncate = (value: string | number) => {
  const output = value?.toString()
  if (output?.length > MAX_STRING_LENGTH) {
    return output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output ?? ''
}


const jsonTruncate = (obj: unknown) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime?: string) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked: boolean) => {
  return <input type="checkbox" checked={checked} disabled />
}

const ChannelsList = ({ channels }: FindChannels) => {
  const [deleteChannel] = useMutation(DELETE_CHANNEL_MUTATION, {
    onCompleted: () => {
      toast.success('Channel deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteChannelMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete channel ' + id + '?')) {
      deleteChannel({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Channel type</th>
            <th>Server id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {channels.map((channel) => (
            <tr key={channel.id}>
              <td>{truncate(channel.id)}</td>
              <td>{truncate(channel.name)}</td>
              <td>{formatEnum(channel.channel_type)}</td>
              <td>{truncate(channel.serverId)}</td>
              <td>{timeTag(channel.createdAt)}</td>
              <td>{timeTag(channel.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.channel({ id: channel.id })}
                    title={'Show channel ' + channel.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editChannel({ id: channel.id })}
                    title={'Edit channel ' + channel.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete channel ' + channel.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(channel.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ChannelsList
