import Link from "next/link";
import { getBlogs } from "../../../lib/blogs/blogs";

export default async function BlogList() {
  const blogs = await getBlogs();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {blogs.map((blog: { id: number; title: string; body: string, blogger: string }) => (
        <Link
          key={blog.id}
          href={`/blog/${blog.id}`}
          className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
        >
          <h3 className="font-semibold mb-2">{blog.title}</h3>
          <p className="text-sm mb-2">{blog.body.slice(0, 80)}...</p>
          <p className="italic text-gray-600 text-sm">– {blog.blogger}</p>
        </Link>
      ))}
    </div>
  );
}