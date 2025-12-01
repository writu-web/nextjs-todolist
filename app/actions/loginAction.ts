"use server";
import { revalidatePath } from "next/cache";
import { getBlogs, saveBlogs } from "../../lib/blogs/blogs";
import { v4 as uuidv4 } from "uuid";
import { redirect } from "next/navigation";

export async function LoginAction(formData: FormData): Promise<void> {}
