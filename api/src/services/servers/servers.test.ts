import type { Server } from '@prisma/client'

import {
  servers,
  server,
  createServer,
  updateServer,
  deleteServer,
} from './servers'
import type { StandardScenario } from './servers.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('servers', () => {
  scenario('returns all servers', async (scenario: StandardScenario) => {
    const result = await servers()

    expect(result.length).toEqual(Object.keys(scenario.server).length)
  })

  scenario('returns a single server', async (scenario: StandardScenario) => {
    const result = await server({ id: scenario.server.one.id })

    expect(result).toEqual(scenario.server.one)
  })

  scenario('creates a server', async () => {
    const result = await createServer({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a server', async (scenario: StandardScenario) => {
    const original = (await server({ id: scenario.server.one.id })) as Server
    const result = await updateServer({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a server', async (scenario: StandardScenario) => {
    const original = (await deleteServer({
      id: scenario.server.one.id,
    })) as Server
    const result = await server({ id: original.id })

    expect(result).toEqual(null)
  })
})
