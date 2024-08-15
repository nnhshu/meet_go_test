'use client';
import React, { useEffect, useState } from 'react';

let tonConnectUI;

export function useTonConnect() {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // Kiểm tra nếu đang chạy trên browser (client-side)
        if (typeof window !== 'undefined') {
            // Khởi tạo TonConnectUI khi client-side đã được render
            if (!tonConnectUI) {
                const { TonConnectUI } = require('@tonconnect/ui'); // Import động
                tonConnectUI = new TonConnectUI({
                    manifestUrl: 'https://tfarm.io/tonconnect-manifest.json',
                });
            }
            setIsInitialized(true); // Đánh dấu là đã khởi tạo
        }
    }, []);

    return { tonConnectUI, isInitialized };
}