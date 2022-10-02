import type { ComponentMeta } from '@storybook/react'

import ChannelPage from './ChannelPage'

export const generated = () => {
  return <ChannelPage />
}

export default {
  title: 'Pages/ChannelPage',
  component: ChannelPage,
} as ComponentMeta<typeof ChannelPage>
