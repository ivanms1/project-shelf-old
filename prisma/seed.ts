import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

main()

async function main() {
  const worlds = [
    {
      name: 'Earth',
      population: 6_000_000_000,
    },
    {
      name: 'Mars',
      population: 0,
    },
  ]

  // Could use Promise.all
  // Sequential here so that world IDs match the array order above

  let results = []

  for (const world of worlds) {
    results.push(await db.world.create({ data: world }))
  }

  console.log('Seeded: %j', results)

  db.disconnect()
}