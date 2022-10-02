import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditMessageById, UpdateMessageInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormMessage = NonNullable<EditMessageById['message']>

interface MessageFormProps {
  message?: EditMessageById['message']
  onSave: (data: UpdateMessageInput, id?: FormMessage['id']) => void
  error: RWGqlError
  loading: boolean
}

const MessageForm = (props: MessageFormProps) => {
  const onSubmit = (data: FormMessage) => {
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.message?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormMessage> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="text"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Text
        </Label>
        
          <TextField
            name="text"
            defaultValue={props.message?.text}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="text" className="rw-field-error" />

        <Label
          name="channelId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Channel id
        </Label>
        
          <NumberField
            name="channelId"
            defaultValue={props.message?.channelId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="channelId" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>
        
          <NumberField
            name="userId"
            defaultValue={props.message?.userId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="userId" className="rw-field-error" />

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

export default MessageForm
