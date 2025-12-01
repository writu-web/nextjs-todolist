'use client'

import { RegisterAction } from "@/app/actions/registerAction";
import { useState } from "react";

export default function TestRegister() {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    
    console.log("Test Form - Before submit:", { name, email, password });
    
    try {
      await RegisterAction(formData);
    } catch (error) {
      console.error("Test Form - Submission error:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6">Test Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input 
              type="text" 
              name="name" 
              defaultValue="Test User"
              className="w-full border p-2 rounded" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              name="email" 
              defaultValue="test@example.com"
              className="w-full border p-2 rounded" 
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input 
              type="password" 
              name="password" 
              defaultValue="password123"
              className="w-full border p-2 rounded" 
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
