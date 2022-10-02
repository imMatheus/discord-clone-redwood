import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type MemberLayoutProps = {
  children: React.ReactNode
}

const MembersLayout = ({ children }: MemberLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.members()}
            className="rw-link"
          >
            Members
          </Link>
        </h1>
        <Link
          to={routes.newMember()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Member
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default MembersLayout
