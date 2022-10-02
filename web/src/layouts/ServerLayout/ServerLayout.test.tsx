import { render } from '@redwoodjs/testing/web'

import ServerLayout from './ServerLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ServerLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServerLayout />)
    }).not.toThrow()
  })
})
