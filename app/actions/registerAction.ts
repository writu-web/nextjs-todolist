"use server";
import { revalidatePath } from "next/cache";
import { getBlogs, saveBlogs } from "../../lib/blogs/blogs";
import { redirect } from "next/navigation";

export async function RegisterAction(formData: FormData): Promise<void> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const newUser = {
    name: name,
    email: email,
    password: password,
  };
  const res = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  if (res.ok) {
    revalidatePath("/");
    redirect("/login");
  } else {
    const errorData = await res.json();
    console.error("Registration failed:", res.status, errorData);
    throw new Error(errorData.message || "Registration failed");
  }
}
