import type { Prisma, Comment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        text: 'String',
        post: { create: { title: 'String', body: 'String' } },
      },
    },
    two: {
      data: {
        text: 'String',
        post: { create: { title: 'String', body: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
