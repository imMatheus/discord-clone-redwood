import type { ComponentMeta } from '@storybook/react'

import WorkPage from './WorkPage'

export const generated = () => {
  return <WorkPage />
}

export default {
  title: 'Pages/WorkPage',
  component: WorkPage,
} as ComponentMeta<typeof WorkPage>
