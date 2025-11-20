"use server";
import { revalidatePath } from "next/cache";
import { getBlogs, saveBlogs } from "../lib/blogs/blogs";
import { v4 as uuidv4 } from "uuid";

export async function createBlog(formData: FormData): Promise<void> {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const blogger = formData.get("blogger") as string;
  const blogs = await getBlogs();
  let myuuid = uuidv4();

  const newBlog = {
    userId: myuuid,
    id: myuuid,
    title,
    body,
    blogger,
  };
  blogs.push(newBlog);
  await saveBlogs(blogs);
  revalidatePath("/blog");

  console.log("New blog created:", newBlog);
}
