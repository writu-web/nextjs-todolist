"use client";
import { useRouter } from "next/navigation";

export default function DiscardButton({id}: {id?:string}) {
    const router = useRouter();
    return (
        <button 
            type="button"
            className="bg-red-500 text-white p-2 rounded"
            onClick={() => router.push(`/blog/${id || ''}`)}
        >
            Discard
        </button>
    );
}

