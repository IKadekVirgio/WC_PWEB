import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://iyfjuukkaaenpcydlndj.supabase.co/**')], // Ganti sesuai domain Supabase kamu
    },
};

export default nextConfig;
