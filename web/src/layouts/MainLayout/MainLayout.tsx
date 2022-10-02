type MainLayoutProps = {
  children?: React.ReactNode
}

import Sidebar from 'src/components/Sidebar/Sidebar'

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      {children}
    </div>
  )
}

export default MainLayout
