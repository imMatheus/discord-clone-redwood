import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditChannelById, UpdateChannelInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormChannel = NonNullable<EditChannelById['channel']>

interface ChannelFormProps {
  channel?: EditChannelById['channel']
  onSave: (data: UpdateChannelInput, id?: FormChannel['id']) => void
  error: RWGqlError
  loading: boolean
}

const ChannelForm = (props: ChannelFormProps) => {
  const onSubmit = (data: FormChannel) => {
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.channel?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormChannel> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.channel?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="channel_type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Channel type
        </Label>
        
          
          
        <div className="rw-check-radio-items">
          <RadioField
            id="channel-channel_type-0"
            name="channel_type"
            defaultValue="CHAT"
            defaultChecked={props.channel?.channel_type?.includes('CHAT')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Chat
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="channel-channel_type-1"
            name="channel_type"
            defaultValue="VOICE"
            defaultChecked={props.channel?.channel_type?.includes('VOICE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Voice
          </div>
        </div>
          
        

        <FieldError name="channel_type" className="rw-field-error" />

        <Label
          name="serverId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Server id
        </Label>
        
          <NumberField
            name="serverId"
            defaultValue={props.channel?.serverId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="serverId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ChannelForm
