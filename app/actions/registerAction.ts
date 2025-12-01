"use server";
import { revalidatePath } from "next/cache";
import { getBlogs, saveBlogs } from "../../lib/blogs/blogs";
import { redirect } from "next/navigation";

export async function RegisterAction(formData: FormData): Promise<void> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  console.log("=== RegisterAction Debug ===");
  console.log("FormData keys:", Array.from(formData.keys()));
  console.log("Received - name:", name, "type:", typeof name);
  console.log("Received - email:", email, "type:", typeof email);
  console.log(
    "Received - password:",
    password ? "***" : undefined,
    "type:",
    typeof password
  );
  console.log(
    "Field validation - name empty?:",
    !name,
    "email empty?:",
    !email,
    "password empty?:",
    !password
  );

  const newUser = {
    name: name,
    email: email,
    password: password,
  };

  console.log("Sending to API:", JSON.stringify(newUser));
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
