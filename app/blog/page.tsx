'use server';
import AddBlog from "./addBlog";
import { getBlogs } from "../lib/blogs/blogs";
import Link from "next/link";

export default async function Blog() {
    // const res=await fetch("http://localhost:3000/api/blog");
    // const data=await res.json();
    const blogs = await getBlogs();

  return (
    <div className="container">
           <AddBlog/>
           <h1 className="font-bold">List of blogs</h1>
            {blogs.map((blog: { id: number; title: string; body: string, blogger: string }) => (
                <Link href={`/blog/${blog.id}`} key={blog.id} className="bg-white shadow-2xs p-2">
                    <h3>{blog.title}</h3> 
                    <p>{blog.body.slice(0,50)}...</p> 
                    <p className="italic">-{blog.blogger}</p>
                </Link>
                ))
            }
    </div>
  );
}
