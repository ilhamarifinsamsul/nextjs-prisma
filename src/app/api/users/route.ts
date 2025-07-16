import { NextResponse } from "next/server";
import { Prisma } from "@/generated/prisma";
import { User } from "@/generated/prisma";
import prisma from "@/generated/prisma";

// GET : Mengambil semua users
export async function GET() {
  try {
    const users = await prisma.user.findMany();

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
