import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ChannelLayoutProps = {
  children: React.ReactNode
}

const ChannelsLayout = ({ children }: ChannelLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.channels()}
            className="rw-link"
          >
            Channels
          </Link>
        </h1>
        <Link
          to={routes.newChannel()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Channel
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ChannelsLayout
