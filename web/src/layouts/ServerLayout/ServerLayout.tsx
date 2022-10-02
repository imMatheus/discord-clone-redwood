type ServerLayoutProps = {
  children?: React.ReactNode
}

import ServerNavbar from 'src/components/ServerNavbar'

const ServerLayout = ({ children }: ServerLayoutProps) => {
  return (
    <div className="flex flex-1 flex-col bg-red-800">
      <ServerNavbar />
      {children}
    </div>
  )
}

export default ServerLayout
