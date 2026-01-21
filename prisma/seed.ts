import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create 10 users
  const users = await Promise.all(
    Array.from({ length: 10 }, (_, i) =>
      prisma.user.create({
        data: {
          email: `user${i + 1}@example.com`,
          password: `password${i + 1}`,
        },
      })
    )
  )

  console.log(`Created ${users.length} users`)

  // Create 10 docs (assigned to random users)
  const docs = await Promise.all(
    Array.from({ length: 10 }, (_, i) =>
      prisma.doc.create({
        data: {
          title: `Document ${i + 1}`,
          content: `This is the content of document ${i + 1}. Lorem ipsum dolor sit amet.`,
          authorId: users[Math.floor(Math.random() * users.length)].id,
        },
      })
    )
  )

  console.log(`Created ${docs.length} docs`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
