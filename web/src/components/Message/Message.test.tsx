import { render } from '@redwoodjs/testing/web'

import Message from './Message'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Message', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Message />)
    }).not.toThrow()
  })
})
