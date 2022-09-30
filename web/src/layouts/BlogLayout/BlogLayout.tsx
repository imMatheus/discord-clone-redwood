import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header>
        <h1>Mendes first Redwood blog</h1>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <Link to={routes.work()}>Work</Link>
          </li>
          <li>
            <Link to={routes.posts()}>posts</Link>
          </li>
          <li>
            <Link to={routes.comments()}>comments</Link>
          </li>
        </ul>
      </header>
      {children}
    </>
  )
}

export default BlogLayout
