import MemberCell from 'src/components/Member/MemberCell'

type MemberPageProps = {
  id: number
}

const MemberPage = ({ id }: MemberPageProps) => {
  return <MemberCell id={id} />
}

export default MemberPage
