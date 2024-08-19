import { PrismaClient } from "@prisma/client";
import { hash } from 'bcryptjs';
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { name, cpf, email, password } = await req.json();

  try {
    const hashedPassword: string = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        cpf,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ message: "User not created" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        cpf: true,
        email: true,
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch users" }, { status: 500 });
  }
}