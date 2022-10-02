import type { Prisma, Channel } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ChannelCreateArgs>({
  channel: {
    one: { data: { name: 'String', server: { create: { name: 'String' } } } },
    two: { data: { name: 'String', server: { create: { name: 'String' } } } },
  },
})

export type StandardScenario = ScenarioData<Channel, 'channel'>
