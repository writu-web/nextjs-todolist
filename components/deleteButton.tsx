import { deleteBlog } from "@/app/actions/deleteBlog";

export default function DeleteBlog( {id}: {id:string}  ) {
    return (
        <form action={deleteBlog} className="bg-black w-18 pl-3 pr-3 cursor-pointer rounded-sm ml-2 text-white hover:bg-blue-500 transition-all">
            <input type="hidden" name="id" value={id} />
            <button type="submit">Delete</button>
        </form>
    )

}