import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ServerLayoutProps = {
  children: React.ReactNode
}

const ServersLayout = ({ children }: ServerLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.servers()}
            className="rw-link"
          >
            Servers
          </Link>
        </h1>
        <Link
          to={routes.newServer()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Server
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ServersLayout
