import { MetaTags } from '@redwoodjs/web'

import ServesCell from 'src/components/ServersCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="bg-red-500">Hello discord</h1>
      <ServesCell />
    </>
  )
}

export default HomePage
