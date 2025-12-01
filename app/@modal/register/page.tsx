'use client'
import { RegisterAction } from "@/app/actions/registerAction";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const formData = new FormData(e.currentTarget);
            await RegisterAction(formData);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Registration failed");
            setIsLoading(false);
        }
    };

    return(
         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                <h1 className="mb-4 pb-1 font-bold">Register</h1>
                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="username" className="border p-2 w-full mb-4" required/>
                    <input type="email" name="email" placeholder="email" className="border p-2 w-full mb-4" required/>
                    <input type="password" name="password" placeholder="password" className="border p-2 w-full mb-4" required minLength={6}/>
                    <button type="submit" disabled={isLoading} className="bg-blue-500 text-white p-1 w-25 mr-2 rounded-sm disabled:opacity-50">
                        {isLoading ? "Submitting..." : "Submit"}
                    </button>
                    <button type="button" onClick={() => router.back()} className="bg-red-500 text-white p-1 w-25 rounded-sm">
                    Cancel
                    </button>
                </form>
            </div>
        </div>
    )
}