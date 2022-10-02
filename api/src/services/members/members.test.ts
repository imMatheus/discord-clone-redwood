import type { Member } from '@prisma/client'

import {
  members,
  member,
  createMember,
  updateMember,
  deleteMember,
} from './members'
import type { StandardScenario } from './members.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('members', () => {
  scenario('returns all members', async (scenario: StandardScenario) => {
    const result = await members()

    expect(result.length).toEqual(Object.keys(scenario.member).length)
  })

  scenario('returns a single member', async (scenario: StandardScenario) => {
    const result = await member({ id: scenario.member.one.id })

    expect(result).toEqual(scenario.member.one)
  })

  scenario('creates a member', async (scenario: StandardScenario) => {
    const result = await createMember({
      input: {
        serverId: scenario.member.two.serverId,
        userId: scenario.member.two.userId,
      },
    })

    expect(result.serverId).toEqual(scenario.member.two.serverId)
    expect(result.userId).toEqual(scenario.member.two.userId)
  })

  scenario('updates a member', async (scenario: StandardScenario) => {
    const original = (await member({ id: scenario.member.one.id })) as Member
    const result = await updateMember({
      id: original.id,
      input: { serverId: scenario.member.two.serverId },
    })

    expect(result.serverId).toEqual(scenario.member.two.serverId)
  })

  scenario('deletes a member', async (scenario: StandardScenario) => {
    const original = (await deleteMember({
      id: scenario.member.one.id,
    })) as Member
    const result = await member({ id: original.id })

    expect(result).toEqual(null)
  })
})
