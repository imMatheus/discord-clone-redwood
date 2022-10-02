import type { Prisma, Member } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MemberCreateArgs>({
  member: {
    one: {
      data: {
        server: { create: { name: 'String' } },
        user: {
          create: {
            email: 'String2390630',
            username: 'String6455921',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        server: { create: { name: 'String' } },
        user: {
          create: {
            email: 'String4059574',
            username: 'String2114336',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Member, 'member'>
