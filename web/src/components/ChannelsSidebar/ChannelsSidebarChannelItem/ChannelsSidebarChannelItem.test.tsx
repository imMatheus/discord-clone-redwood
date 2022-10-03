import { render } from '@redwoodjs/testing/web'

import ChannelsSidebarChannelItem from './ChannelsSidebarChannelItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChannelsSidebarChannelItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChannelsSidebarChannelItem />)
    }).not.toThrow()
  })
})
