import type { Metadata } from "next";
import React from "react";
import Topbar from "@/app/components/topbar";


export const metadata: Metadata = {
    title: "Dashboard Page",
    description: "dashboard page",
};

export default async function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="flex">
                <div className="w-full">
                    <Topbar />
                    <div className="section">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}