'use client'

import {useRouter} from "next/navigation";
import {supabaseClient} from "@/utils/supabase";

export default function Topbar() {
    const router = useRouter()
    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        await supabaseClient.auth.signOut()
        router.refresh()
    }
    return (
        <>
            <div className="flex justify-between items-center p-8 bg-[#1e1e1e] text-white border-b border-gray-700 shadow-sm">
                <div className="flex items-center">
                    <h1 className="ml-4 text-2xl font-semibold">
                        Catering Finance System
                    </h1>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={submitHandler}
                        className="bg-white text-[#1e1e1e] px-8 py-3 uppercase font-medium rounded hover:opacity-90 transition-colors"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
}
