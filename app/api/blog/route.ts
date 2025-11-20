import { getBlogs, saveBlogs } from "@/app/lib/blogs/blogs";

const blogs = await getBlogs();

export async function GET() {
  return Response.json(blogs);
}
export async function POST(request: Request) {
  const newBlog = await request.json();
  const blogs = await getBlogs();
  blogs.push(newBlog);
  await saveBlogs(blogs);
  return Response.json({ message: "Blog created", blog: newBlog });
}
