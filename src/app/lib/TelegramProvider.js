// import Script from "next/script"
//import Script from 'react-load-script';
"use-client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

// import {
//   LoginWebApp
// } from '../../../api/index';

export const TelegramContext = createContext({})

export const TelegramProvider = ({ children }) => {
    const [webApp, setWebApp] = useState(null);

    useEffect(() => {
        const app = window.Telegram?.WebApp
        if (app) {
            let result = app.initData.replace(/"/g, '');
            app.ready();
            setWebApp(app);
            localStorage.setItem('telegramWebApp', JSON.stringify(result));

            console.log(window.Telegram.WebApp.HapticFeedback.impactOccurred('rigid'))
            window.Telegram.WebApp.expand();
            window.Telegram.WebApp.enableClosingConfirmation();
            window.Telegram.WebApp.HapticFeedback.impactOccurred('rigid');
        }

    }, [])

    const value = useMemo(() => {
        return webApp
            ? {
                webApp,
                unsafeData: webApp.initDataUnsafe,
                user: webApp.initDataUnsafe.user
            }
            : {}
    }, [webApp])

    return (
        <TelegramContext.Provider value={value}>
            {/* Make sure to include script tag with "beforeInteractive" strategy to pre-load web-app script */}
            {/* <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />{" "} */}
            {/* <Script
        url="/js/telegram-web-app.js"
        onCreate={handleScriptLoad}
        onError={handleScriptLoad}  
        async
      />{" "} */}
            {children}
        </TelegramContext.Provider>
    )
}

export const useTelegram = () => useContext(TelegramContext)