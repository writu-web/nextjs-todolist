import {
  hashPassword,
  createToken,
  saveAuthCookie,
} from "../../../../lib/auth/auth";
import { prisma } from "../../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    if (!name || !email || !password || password.length < 6) {
      return new Response(JSON.stringify({ message: "Invalid input" }), {
        status: 422,
      });
    }
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 422,
      });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    // const token = createToken(newUser.id);
    const response = new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
    // saveAuthCookie(token);
    return response;
  } catch (error) {
    console.error("Register API Error:", error);
    
    // Handle specific Prisma errors
    if (error instanceof Error) {
      if (error.message.includes("Unique constraint failed")) {
        return new Response(JSON.stringify({ message: "Email already registered" }), {
          status: 409,
        });
      }
      console.error("Error details:", error.message);
      console.error("Error stack:", error.stack);
    }
    
    return new Response(
      JSON.stringify({ 
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : String(error)
      }), 
      {
        status: 500,
      }
    );
  }
}
