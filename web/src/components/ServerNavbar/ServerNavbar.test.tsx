import { render } from '@redwoodjs/testing/web'

import ServerNavbar from './ServerNavbar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ServerNavbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServerNavbar />)
    }).not.toThrow()
  })
})
