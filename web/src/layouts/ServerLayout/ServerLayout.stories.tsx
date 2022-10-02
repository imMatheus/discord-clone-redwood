import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ServerLayout from './ServerLayout'

export const generated: ComponentStory<typeof ServerLayout> = (args) => {
  return <ServerLayout {...args} />
}

export default {
  title: 'Layouts/ServerLayout',
  component: ServerLayout,
} as ComponentMeta<typeof ServerLayout>
