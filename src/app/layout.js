"use client";
// import { Inter_Tight } from "next/font/google";
// import Script from 'next/script';
import { usePathname } from 'next/navigation';

import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

import MyNavbar from "./components";

// const inter = Inter_Tight({ subsets: ["latin"] });


export default function RootLayout({ children }) {

    const pathname = usePathname();

    return (
        <html lang="en">
            <head>
                <script src="/lib/telegram-web-app.js" strategy="lazyOnload" />
            </head>
            <body suppressHydrationWarning={true}>
                <NextUIProvider>
                    {children}
                    {pathname !== "/" && <MyNavbar />}
                </NextUIProvider>
            </body>
        </html>
    );
}
