import { prisma } from "../../../../lib/prisma";
import {
  verifyPassword,
  createToken,
  saveAuthCookie,
} from "../../../../lib/auth/auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return new Response(JSON.stringify({ message: "Invalid input" }), {
        status: 422,
      });
    }
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (!existingUser) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 401,
      });
    }
    const isValidPassword = await verifyPassword(
      password,
      existingUser.password
    );
    if (!isValidPassword) {
      return new Response(JSON.stringify({ message: "Invalid password" }), {
        status: 401,
      });
    }
    const token = createToken(existingUser.id);
    const response = new Response(
      JSON.stringify({ message: "Login successful" }),
      { status: 200 }
    );
    saveAuthCookie(token);
    return response;
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
