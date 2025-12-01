'use client';

import { createBlog } from "@/app/actions/createBlog";
import { useRouter } from "next/navigation";

export default function AddBlog() {
    const router = useRouter()
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                <h1 className="mb-4 pb-1 font-bold">Add a new blog post</h1>
                <form action={createBlog}>
                    <input type="text" name="title" placeholder="Title" className="border p-2 w-full mb-4"/>
                    <textarea name="body" placeholder="Body" className="border p-2 w-full mb-4"></textarea>
                    <input type="text" name="blogger" placeholder="Author" className="border p-2 w-full mb-4"/>
                    <button type="submit"  className="bg-blue-500 text-white p-1 w-25 mr-2 rounded-sm">Add</button>
                    <button type="button" onClick={() => router.back()} className="bg-red-500 text-white p-1 w-25 rounded-sm">
                    Cancel
                    </button>
                </form>
            </div>
        </div>
        )
}