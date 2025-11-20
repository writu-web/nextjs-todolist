import { getBlogs } from "@/app/lib/blogs/blogs";
import BlogHeader from "../../components/blog/blogHeader";
import BlogToggleButton from "../../components/blog/blogToggleButton";

export default async function BlogDetails({ params }: { params: Promise<{ id: string }> }) {
    const blogs = await getBlogs();
    const idParamsString = (await params).id;
    // const idParams = Number(idParamsString)-1;
    const blog = blogs.find((b: { id: string }) => b.id === idParamsString);
    const blogIndex = blogs.findIndex((b: { id: string }) => b.id === idParamsString);

    return (
      <div className="container">
        <BlogHeader count={blogIndex+1} title={blog.title}/>
        <p>{blog.body}</p>
        <p className="italic mt-2 mb-4">-{blog.blogger}</p>
        <BlogToggleButton selectedBlog={blog} />
      </div>
    );
  }