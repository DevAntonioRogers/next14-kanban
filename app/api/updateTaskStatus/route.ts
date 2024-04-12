import {prisma} from '@/utils/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST (req: NextRequest) {
  const body = await req.json()
  const {taskId, newStatus} = body

  const updatedTask = await prisma.task.update({
    where: {id: taskId},
    data: {status : newStatus}
  })

  return NextResponse.json({updatedTask})
}