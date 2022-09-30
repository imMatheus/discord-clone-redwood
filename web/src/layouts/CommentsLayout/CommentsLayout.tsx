import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type CommentLayoutProps = {
  children: React.ReactNode
}

const CommentsLayout = ({ children }: CommentLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.comments()}
            className="rw-link"
          >
            Comments
          </Link>
        </h1>
        <Link
          to={routes.newComment()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Comment
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default CommentsLayout
