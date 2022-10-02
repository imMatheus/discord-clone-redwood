import type { Prisma, Message } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MessageCreateArgs>({
  message: {
    one: {
      data: {
        text: 'String',
        channel: {
          create: { name: 'String', server: { create: { name: 'String' } } },
        },
        user: {
          create: {
            email: 'String4828801',
            username: 'String4769172',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        text: 'String',
        channel: {
          create: { name: 'String', server: { create: { name: 'String' } } },
        },
        user: {
          create: {
            email: 'String1136799',
            username: 'String2558380',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Message, 'message'>
