import { auth } from "@clerk/nextjs";
import { prisma } from "@/utils/prisma";
import Board from "@/components/Board";

const page = async () => {
  const { userId }: { userId: string | null } = auth();

  const board = await prisma.kanbanBoard.findFirst({
    where: {
      userId: userId!,
    },
    include: {
      tasks: true,
    },
  });
  return (
    <>
      <Board board={board} />
    </>
  );
};

export default page;
