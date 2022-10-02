import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditMemberById, UpdateMemberInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormMember = NonNullable<EditMemberById['member']>

interface MemberFormProps {
  member?: EditMemberById['member']
  onSave: (data: UpdateMemberInput, id?: FormMember['id']) => void
  error: RWGqlError
  loading: boolean
}

const MemberForm = (props: MemberFormProps) => {
  const onSubmit = (data: FormMember) => {
  
    
    
  
    
    
  
    props.onSave(data, props?.member?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormMember> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="serverId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Server id
        </Label>
        
          <NumberField
            name="serverId"
            defaultValue={props.member?.serverId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="serverId" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>
        
          <NumberField
            name="userId"
            defaultValue={props.member?.userId}
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

export default MemberForm
