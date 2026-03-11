import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const POST = async (req: Request) => {
  const session = await auth();

  if (!session?.user || !session?.user?.id) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  try {
    const data = await req.json();

    const job = await prisma.job.create({
      data: {
        ...data,
        postedById: session.user.id,
      },
    });

    return NextResponse.json(job);
  } catch (er) {
    console.error("Error creating job");
    return new NextResponse("Internale server error", { status: 500 });
  }
};

const GET = async (req: Request, res: Response) => {
  try {
    const jobs = await prisma.job.findMany();

    return NextResponse.json(jobs);
  } catch (error) {
    console.log(error);
  }
};

export { POST, GET };
