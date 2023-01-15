import { PrismaClient } from '@prisma/client'

const prims = new PrismaClient()

async function main() {
  const user = await prims.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      avatarUrl: 'https://github.com/fiorotticaio.png',
    }
  })

  const pool = await prims.pool.create({
    data: {
      title: 'Example Pool',
      code: 'BOL123',
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id,
        }
      } 
    }
  })

  await prims.game.create({
    data: {
      date: '2022-11-02T12:00:00.201Z',
      fristTeamCountryCode: 'DE',
      secondTeamCountryCode: 'BR',
    }
  })

  await prims.game.create({
    data: {
      date: '2022-11-03T12:00:00.201Z',
      fristTeamCountryCode: 'BR',
      secondTeamCountryCode: 'AR',

      guesses: {
        create: {
          fristTeamPoints: 2,
          secondTeamPoints: 1,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id
              }
            }
          }
        }
      }
    }
  })
}

main()