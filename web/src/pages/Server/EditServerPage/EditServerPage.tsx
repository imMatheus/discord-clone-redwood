import EditServerCell from 'src/components/Server/EditServerCell'

type ServerPageProps = {
  id: number
}

const EditServerPage = ({ id }: ServerPageProps) => {
  return <EditServerCell id={id} />
}

export default EditServerPage
