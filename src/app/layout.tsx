"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import DefaultLayout from "@/components/layout/DefaultLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning={true} lang="en">
            
            <body className={inter.className}>
                <DefaultLayout>{children}</DefaultLayout>
            </body>
        </html>
    );
}
