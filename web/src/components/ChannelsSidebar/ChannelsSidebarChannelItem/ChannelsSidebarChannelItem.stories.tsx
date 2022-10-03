// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ChannelsSidebarChannelItem> = (args) => {
//   return <ChannelsSidebarChannelItem {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ChannelsSidebarChannelItem from './ChannelsSidebarChannelItem'

export const generated = () => {
  return <ChannelsSidebarChannelItem />
}

export default {
  title: 'Components/ChannelsSidebarChannelItem',
  component: ChannelsSidebarChannelItem,
} as ComponentMeta<typeof ChannelsSidebarChannelItem>
