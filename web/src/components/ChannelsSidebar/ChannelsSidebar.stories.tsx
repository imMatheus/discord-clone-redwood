// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ServerNavbar> = (args) => {
//   return <ServerNavbar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ChannelsSidebar from './ChannelsSidebar'

export const generated = () => {
  return <ChannelsSidebar serverId={1} />
}

export default {
  title: 'Components/ChannelsSidebar',
  component: ChannelsSidebar,
} as ComponentMeta<typeof ChannelsSidebar>
