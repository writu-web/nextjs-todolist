import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET!;
// Hash password
export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

// Compare password with hash
export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

// Sign JWT token
export function createToken(userId: string) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
}

// Save token in HttpOnly cookie
export async function saveAuthCookie(token: string) {
  const cookieStore = await cookies();

  cookieStore.set("token", token, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}
