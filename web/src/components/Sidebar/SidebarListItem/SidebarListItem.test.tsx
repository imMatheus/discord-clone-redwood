import { render } from '@redwoodjs/testing/web'

import SidebarListItem from './SidebarListItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SidebarListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SidebarListItem />)
    }).not.toThrow()
  })
})
