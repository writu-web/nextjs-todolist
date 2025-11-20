import { editBlog } from "@/app/actions/editBlog";
import DiscardButton from "./discardButton";

export default function BlogEdit( {id,title,body,blogger}: {id:string, title:string,body:string,blogger:string}  ) {
    return (
        <div className="container">
            <h1 className="font-bold">Edit Blog {id}</h1>
            <form action={editBlog}>
                <input type="hidden" name="id" value={id} />
                <input type="text" name="title" defaultValue={title} placeholder="Title" className="border p-2 w-full mb-4"/>
                <textarea name="body" placeholder="Body" defaultValue={body} className="border p-2 w-full mb-4"></textarea>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded mr-2">Save </button>
                <DiscardButton id={id} />
            </form>
        </div>
    );
}