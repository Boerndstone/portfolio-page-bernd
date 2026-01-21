import { Handler } from '@netlify/functions'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const handler: Handler = async () => {
  try {
    const docs = await prisma.doc.findMany()
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(docs),
    }
  } catch (error) {
    console.error('Error fetching docs:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch docs', details: String(error) }),
    }
  }
}
