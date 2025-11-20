import { getBlogs } from "@/app/lib/blogs/blogs";
import BlogHeader from "../../components/blog/blogHeader";
import BlogToggleButton from "../../components/blog/blogToggleButton";

export default async function BlogDetails({ params }: { params: Promise<{ id: string }> }) {
    const blogs = await getBlogs();
    const idParamsString = (await params).id;
    const idParams = Number(idParamsString)-1;
    return (
      <div className="container">
        <BlogHeader count={idParamsString} title={blogs[idParams]?.title}/>
        <p>{blogs[idParams]?.body}</p>
        <p className="italic mt-2 mb-4">-{blogs[idParams]?.blogger}</p>
        <BlogToggleButton selectedBlog={blogs[idParams]} />
      </div>
    );
  }