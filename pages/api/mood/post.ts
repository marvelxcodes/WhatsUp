import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "@utils/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, url } = req.body
  const response = await prisma.mood.create({
    data: {
      url,
      user: {
        connect: { id },
      },
    },
  })
  res.json(response)
}
