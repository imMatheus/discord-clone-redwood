import EditMemberCell from 'src/components/Member/EditMemberCell'

type MemberPageProps = {
  id: number
}

const EditMemberPage = ({ id }: MemberPageProps) => {
  return <EditMemberCell id={id} />
}

export default EditMemberPage
