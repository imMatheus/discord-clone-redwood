import { render } from '@redwoodjs/testing/web'

import ChannelsSidebar from './ChannelsSidebar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChannelsSidebar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChannelsSidebar serverId={1} />)
    }).not.toThrow()
  })
})
