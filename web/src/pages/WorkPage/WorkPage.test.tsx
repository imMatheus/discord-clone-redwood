import { render } from '@redwoodjs/testing/web'

import WorkPage from './WorkPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WorkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WorkPage />)
    }).not.toThrow()
  })
})
