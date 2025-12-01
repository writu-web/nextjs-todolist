import { getBlogs } from "../../lib/blogs/blogs";
import Link from "next/link";
import BlogList from "./components/blogLists";
import { Suspense } from "react";
import BlogListSkeleton from "./components/blogListSkeleton";

export default async function Blog() {

  return (
    <div className="container">
      <div className="flex justify-center items-center my-8">
        <p className="text-lg">Feel free to add your own blog posts!</p>
        <Link
          href="/blog/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Add Blog
        </Link>
      </div>
      <h1 className="font-bold">List of blogs</h1>
      <Suspense fallback={<BlogListSkeleton />}>
        <BlogList />
      </Suspense>
    </div>
  );
}
