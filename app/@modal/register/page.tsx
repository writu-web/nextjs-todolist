'use client'
import { RegisterAction } from "@/app/actions/registerAction";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter()
    return(
         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                <h1 className="mb-4 pb-1 font-bold">Register</h1>
                <form action={RegisterAction}>
                    <input type="text" name="name" placeholder="username" className="border p-2 w-full mb-4"/>
                    <input type="text" name="email" placeholder="email" className="border p-2 w-full mb-4"/>
                    <input type="password" name="password" placeholder="password" className="border p-2 w-full mb-4"/>
                    <button type="submit"  className="bg-blue-500 text-white p-1 w-25 mr-2 rounded-sm">submit</button>
                    <button type="button" onClick={() => router.back()} className="bg-red-500 text-white p-1 w-25 rounded-sm">
                    Cancel
                    </button>
                </form>
            </div>
        </div>
    )
}