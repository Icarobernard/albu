// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
type User = []

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany()
    async function main() {
        res.status(200).json(users)
    }

    main()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

}
