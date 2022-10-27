import type { NextApiRequest, NextApiResponse} from "next"
import prisma from "@utils/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone } = req.body
  const data = await prisma.chat.findMany({
    where: {
      OR: [
        {
          user1: {
            phone: {
              equals: phone,
            },
          },
        },
        {
            user2: {
                phone: {
                    equals: phone
                }
            }
        },
      ],
    },
  })

  res.json(data)
}
