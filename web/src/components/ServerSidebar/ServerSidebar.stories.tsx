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

import ServerSidebar from './ServerSidebar'

export const generated = () => {
  return <ServerSidebar />
}

export default {
  title: 'Components/ServerSidebar',
  component: ServerSidebar,
} as ComponentMeta<typeof ServerSidebar>
