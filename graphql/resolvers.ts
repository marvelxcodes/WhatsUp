import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const user = async () => {
    return await prisma.user.findMany({
        include: {
            Mood: true
        }
    })
}