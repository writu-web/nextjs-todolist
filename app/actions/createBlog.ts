"use server";
import { revalidatePath } from "next/cache";
import { getBlogs, saveBlogs } from "../lib/blogs/blogs";

export async function createBlog(formData: FormData): Promise<void> {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const blogger = formData.get("blogger") as string;
  const blogs = await getBlogs();
  const newBlog = {
    userId: blogs.length + 1,
    id: blogs.length + 1,
    title,
    body,
    blogger,
  };
  blogs.push(newBlog);
  await saveBlogs(blogs);
  revalidatePath("/blog");

  console.log("New blog created:", newBlog);
}
