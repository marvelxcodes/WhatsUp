import type { NextApiRequest, NextApiResponse as ApiResponse } from "next"
import prisma from "@utils/prisma"

interface ApiRequest extends NextApiRequest {
  body: {
    message: string
  }
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  const { message } = req.body
  prisma.chat.create({
    data: {
        
    },
  })
}
