import type { NextApiRequest, NextApiResponse as ApiResponse } from "next"
import prisma from "@utils/prisma"

interface ApiRequest extends NextApiRequest {
  body: {
    user1: number
    user2: number
  }
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  const { user1, user2 } = req.body
  const response = await prisma.chat.create({
    data: {
      user1: {
        connect: {
          id: user1,
        },
      },
      user2: {
        connect: {
          id: user2,
        },
      },
    },
  })
  res.json(response)
}
