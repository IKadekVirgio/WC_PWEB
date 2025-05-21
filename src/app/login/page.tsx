"use client";

import { useState } from "react";
import {supabaseClient} from "@/utils/supabase";
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSignIn = async (e:any) => {
        e.preventDefault();
        const login = await supabaseClient.auth.signInWithPassword({
            email,
            password,
        })
        if (login.error == null) {
            router.push('/dashboard')
        }
        else {
            console.log("error login")
            console.log(login)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#121212] text-white">
            <form
                onSubmit={handleSignIn}
                className="bg-[#1e1e1e] p-8 rounded-xl shadow-lg w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 rounded bg-[#121212] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block mb-1 font-medium">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 rounded bg-[#121212] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-white text-[#121212] font-semibold py-2 rounded hover:opacity-90 transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
