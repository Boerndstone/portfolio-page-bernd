import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from '@prisma/client'

export const handler = async () => {
  try {
    const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! })
    const prisma = new PrismaClient({ adapter })

    const docs = await prisma.doc.findMany()
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(docs),
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch docs', details: err instanceof Error ? err.message : String(err) }),
    }
  }
}
