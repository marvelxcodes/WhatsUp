import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    
}
