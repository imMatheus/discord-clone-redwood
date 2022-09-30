import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WorkPage = () => {
  return (
    <>
      <MetaTags title="Work" description="Work page" />

      <h1>WorkPage</h1>
      <p>
        Find me in <code>./web/src/pages/WorkPage/WorkPage.tsx</code>
      </p>
      <p>
        My default route is named <code>work</code>, link to me with `
        <Link to={routes.work()}>Work</Link>`
      </p>
    </>
  )
}

export default WorkPage
