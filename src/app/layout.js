"use client";
// import { Inter_Tight } from "next/font/google";
// import Script from 'next/script';
import { usePathname } from 'next/navigation';

import "./globals.css";
import "rc-toastr/dist/index.css"
import { NextUIProvider } from "@nextui-org/react";
import { ToastProvider } from 'rc-toastr';
import MyNavbar from "./components";

// const inter = Inter_Tight({ subsets: ["latin"] });


export default function RootLayout({ children }) {

    const pathname = usePathname();

    return (
        <html lang="en">
            <head>
                <script src="/lib/telegram-web-app.js" strategy="lazyOnload" ></script>
                <script src="/lib/tonweb-0.0.26.js" async="" strategy="lazyOnload"></script>
            </head>
            <body suppressHydrationWarning={true}>
                <ToastProvider config={{
                    position: "top-right",
                    duration: 2000,
                    zIndex: 9999
                }} >
                    <NextUIProvider>
                        {children}
                        {pathname !== "/" && <MyNavbar />}
                    </NextUIProvider>
                </ToastProvider>
            </body>
        </html>
    );
}
