import { render } from '@redwoodjs/testing/web'

import ServerSidebar from './ServerSidebar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ServerSidebar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServerSidebar />)
    }).not.toThrow()
  })
})
