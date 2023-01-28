// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
    age: number
    gender: string | boolean
    qualification: string
    role: string
    id: number
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(
        { id: 0, name: 'taha Ahmed', age: 23, gender: "Male", qualification: 'bachelor', role: 'devloper' },
    )
}
