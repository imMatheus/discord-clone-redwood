// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ChannelNavbar> = (args) => {
//   return <ChannelNavbar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ChannelNavbar from './ChannelNavbar'

export const generated = () => {
  return <ChannelNavbar />
}

export default {
  title: 'Components/ChannelNavbar',
  component: ChannelNavbar,
} as ComponentMeta<typeof ChannelNavbar>
