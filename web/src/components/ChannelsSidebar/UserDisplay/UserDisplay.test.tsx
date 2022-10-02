import { render } from '@redwoodjs/testing/web'

import UserDisplay from './UserDisplay'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserDisplay', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserDisplay />)
    }).not.toThrow()
  })
})
