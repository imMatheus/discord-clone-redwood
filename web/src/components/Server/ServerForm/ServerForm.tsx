import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditServerById, UpdateServerInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormServer = NonNullable<EditServerById['server']>

interface ServerFormProps {
  server?: EditServerById['server']
  onSave: (data: UpdateServerInput, id?: FormServer['id']) => void
  error: RWGqlError
  loading: boolean
}

const ServerForm = (props: ServerFormProps) => {
  const onSubmit = (data: FormServer) => {
  
    
    
  
    props.onSave(data, props?.server?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormServer> onSubmit={onSubmit} error={props.error}>
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
            defaultValue={props.server?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

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

export default ServerForm
