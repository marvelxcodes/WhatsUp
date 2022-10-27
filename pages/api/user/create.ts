import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "@utils/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await prisma.user.create({
    data: req.body
  })
  res.status(200).json({
    status: 200
  })
}
