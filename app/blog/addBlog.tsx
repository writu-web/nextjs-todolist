'use client';

import { createBlog } from "@/app/actions/createBlog";


export default function AddBlog() {
    return (
        <div className="mb-8 p-2 shadow">
            <h1 className="mb-4 pb-1 font-bold">Add a new blog post</h1>
            <form action={createBlog}>
                <input type="text" name="title" placeholder="Title" className="border p-2 w-full mb-4"/>
                <textarea name="body" placeholder="Body" className="border p-2 w-full mb-4"></textarea>
                <input type="text" name="blogger" placeholder="Author" className="border p-2 w-full mb-4"/>
                <button type="submit"  className="bg-blue-500 text-white p-2">Add Blog</button>
            </form>
        </div>
        )
}