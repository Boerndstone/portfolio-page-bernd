import { Handler } from '@netlify/functions'
import { prisma } from '../../lib/prisma'

export const handler: Handler = async (event) => {
  // TODO: Add auth check
  const docs = await prisma.doc.findMany()
  return {
    statusCode: 200,
    body: JSON.stringify(docs),
  }
}
