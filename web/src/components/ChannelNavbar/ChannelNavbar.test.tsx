import { render } from '@redwoodjs/testing/web'

import ChannelNavbar from './ChannelNavbar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChannelNavbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChannelNavbar />)
    }).not.toThrow()
  })
})
