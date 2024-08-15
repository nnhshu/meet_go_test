'use client';
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const TelegramContext = createContext({});

export const TelegramProvider = ({ children }) => {
    const [webApp, setWebApp] = useState(null);
    const [isCdnScriptLoaded, setIsCdnScriptLoaded] = useState(false);

    const handleScriptLoad = () => {
        setIsCdnScriptLoaded(true);
    };

    useEffect(() => {
        const app = window.Telegram && window.Telegram.WebApp;
        if (app) {
            let result = app.initData.replace(/"/g, '');

            app.ready();
            setWebApp(app);
            localStorage.setItem('telegramWebApp', JSON.stringify(result));

            if (typeof app.disableVerticalSwipes === 'function') {
                app.disableVerticalSwipes();
            } else {
                console.warn('disableVerticalSwipes is not available');
            }

            app.expand();
            app.enableClosingConfirmation();
            app.HapticFeedback.impactOccurred('rigid');
        }
    }, []);

    const value = useMemo(() => {
        return webApp
            ? {
                webApp,
                unsafeData: webApp.initDataUnsafe,
                user: webApp.initDataUnsafe.user
            }
            : {};
    }, [webApp]);

    return (
        <TelegramContext.Provider value={value}>
            {children}
        </TelegramContext.Provider>
    );
};

export const useTelegram = () => useContext(TelegramContext);
