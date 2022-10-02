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

import ServerNavbar from './ServerNavbar'

export const generated = () => {
  return <ServerNavbar />
}

export default {
  title: 'Components/ServerNavbar',
  component: ServerNavbar,
} as ComponentMeta<typeof ServerNavbar>
