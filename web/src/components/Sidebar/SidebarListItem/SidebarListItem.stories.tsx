// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SidebarListItem> = (args) => {
//   return <SidebarListItem {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SidebarListItem from './SidebarListItem'

export const generated = () => {
  return (
    <SidebarListItem
      server={{
        id: 1,
        name: 'Im a server',
        channels: [
          {
            id: 3,
          },
        ],
      }}
    />
  )
}

export default {
  title: 'Components/SidebarListItem',
  component: SidebarListItem,
} as ComponentMeta<typeof SidebarListItem>
