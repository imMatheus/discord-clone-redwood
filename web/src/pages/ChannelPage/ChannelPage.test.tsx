import { render } from '@redwoodjs/testing/web'

import ChannelPage from './ChannelPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ChannelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChannelPage />)
    }).not.toThrow()
  })
})
