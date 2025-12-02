import { prisma } from "../../../../lib/prisma";
import {
  verifyPassword,
  createToken,
  saveAuthCookie,
} from "../../../../lib/auth/auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    console.log("Login API received:", {
      email,
      password: password ? "***" : undefined,
    });
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
    console.error("Login API Error:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
