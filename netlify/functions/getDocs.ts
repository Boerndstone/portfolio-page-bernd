import { prisma } from '../../lib/prisma'

export const handler = async () => {
  try {
    const docs = await prisma.doc.findMany()
    return {
      statusCode: 200,
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
