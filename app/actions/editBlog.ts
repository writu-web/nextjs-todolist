"use server";
import { revalidatePath } from "next/cache";
import { getBlogs, saveBlogs } from "../lib/blogs/blogs";

export async function editBlog(formData: FormData): Promise<void> {
  console.log("Editing blog with formData:", formData);
  const blogId = formData.get("id") as string;
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const blogs = await getBlogs();
  const index = blogs.findIndex(
    (blog: { id: number }) => blog.id === Number(blogId)
  );
  blogs[index] = {
    ...blogs[index],
    title,
    body,
  };
  await saveBlogs(blogs);
  revalidatePath("/blog" + blogId);
  console.log("Blog edited:", blogs[index]);
}
