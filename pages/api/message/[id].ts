import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@utils/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { body, chatId, senderId } = req.body
    try {
        await prisma.message.create({
            data: {
                body, senderId,
                chat: {
                    connect: {
                        id: chatId
                    }
                }
            }
        })
        res.json({status: "success"})
    } catch {
        res.json({status: "error"})
    }
}