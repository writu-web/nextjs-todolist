"use server";
import { revalidatePath } from "next/cache";

export async function LoginAction(
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  console.log("LoginAction - received:", {
    email,
    password: password ? "***" : undefined,
  });

  if (!email || !password) {
    return { success: false, error: "Email and password are required" };
  }

  const loginData = {
    email: email,
    password: password,
  };

  console.log("LoginAction - sending to API");
  const res = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (res.ok) {
    console.log("Login successful");
    revalidatePath("/");
    return { success: true };
  } else {
    const errorData = await res.json();
    console.error("Login failed:", res.status, errorData);
    return { success: false, error: errorData.message || "Login failed" };
  }
}
