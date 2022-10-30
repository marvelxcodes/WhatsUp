import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "@utils/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = Number(req.query.id)
  const data = await prisma.chat.findMany({
    where: {
      OR: [
        {
          user1Id: {
            equals: id
          }
        },
        {
          user2Id: {
            equals: id
          }
        }
      ],
    },
  })
  res.json(data)
}
