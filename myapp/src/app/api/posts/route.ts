import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, _: {}) => {
    const posts = await prisma.post.findMany()
    return NextResponse.json({
        posts,
    }, {status: 200})
}