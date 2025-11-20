"use server";
import { revalidatePath } from "next/cache";
import { getBlogs, saveBlogs } from "../lib/blogs/blogs";

export async function editBlog(formData: FormData): Promise<void> {
  console.log("Editing blog with formData:", formData);
  const blogs = await getBlogs();
  console.log("Editing blogs:", blogs);
  const blogId = formData.get("id") as string;
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  let blog = blogs.find((blog: { id: string }) => blog.id === blogId);
  blog.title = title;
  blog.body = body;
  await saveBlogs(blogs);
  revalidatePath("/blog" + blogId);
  console.log("Blog edited:", blog);
}
