"use server";
import { revalidatePath } from "next/cache";
import { getBlogs, saveBlogs } from "../../lib/blogs/blogs";
import { v4 as uuidv4 } from "uuid";
import { redirect } from "next/navigation";

export async function createBlog(formData: FormData): Promise<void> {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const blogger = formData.get("blogger") as string;
  const blogs = await getBlogs();
  let myuuid = uuidv4();
  if (title && body && blogger) {
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
    redirect("/blog");
  } else {
    console.log("Failed to create blog: Missing title, body, or blogger");
  }
}
