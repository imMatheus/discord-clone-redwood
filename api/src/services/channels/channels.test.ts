import type { Channel } from '@prisma/client'

import {
  channels,
  channel,
  createChannel,
  updateChannel,
  deleteChannel,
} from './channels'
import type { StandardScenario } from './channels.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('channels', () => {
  scenario('returns all channels', async (scenario: StandardScenario) => {
    const result = await channels()

    expect(result.length).toEqual(Object.keys(scenario.channel).length)
  })

  scenario('returns a single channel', async (scenario: StandardScenario) => {
    const result = await channel({ id: scenario.channel.one.id })

    expect(result).toEqual(scenario.channel.one)
  })

  scenario('creates a channel', async (scenario: StandardScenario) => {
    const result = await createChannel({
      input: { name: 'String', serverId: scenario.channel.two.serverId },
    })

    expect(result.name).toEqual('String')
    expect(result.serverId).toEqual(scenario.channel.two.serverId)
  })

  scenario('updates a channel', async (scenario: StandardScenario) => {
    const original = (await channel({ id: scenario.channel.one.id })) as Channel
    const result = await updateChannel({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a channel', async (scenario: StandardScenario) => {
    const original = (await deleteChannel({
      id: scenario.channel.one.id,
    })) as Channel
    const result = await channel({ id: original.id })

    expect(result).toEqual(null)
  })
})
