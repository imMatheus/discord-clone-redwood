import { useAuth } from '@redwoodjs/auth'

import SidebarServersCell from 'src/components/Sidebar/SidebarServersCell'

const Sidebar = () => {
  const { logOut } = useAuth()
  return (
    <aside className="h-screen overflow-y-scroll bg-clr-bg-dark">
      <SidebarServersCell />
      <button onClick={logOut}>hej</button>
    </aside>
  )
}

export default Sidebar
