"use client";

import React, { useState, useEffect, createContext, useContext } from 'react';
import { Heart, Bell, X } from 'lucide-react';

const NotificationContext = createContext({
  showNotification: (message: string, wallet: string) => {},
});

export const useNotification = () => useContext(NotificationContext);

export default function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notification, setNotification] = useState<{ message: string; wallet: string } | null>(null);

  const showNotification = (message: string, wallet: string) => {
    setNotification({ message, wallet });
    setTimeout(() => setNotification(null), 8000); // Show for 8 seconds
  };

  useEffect(() => {
    const wallets = [
      "0x71C...a290",
      "0x4a2...98b2",
      "0x992...f10a",
      "0x3b1...e45c",
      "0x88d...12fa"
    ];
    const amounts = ["0.5 ETH", "1,200 USDC", "0.12 ETH", "500 USDT", "2.5 SOL"];

    const triggerRandomNotification = () => {
      const randomWallet = wallets[Math.floor(Math.random() * wallets.length)];
      const randomAmount = amounts[Math.floor(Math.random() * amounts.length)];
      showNotification(`New Donation: ${randomAmount}`, `From: ${randomWallet}`);
    };

    // Trigger every 5 minutes (300000 ms)
    const interval = setInterval(triggerRandomNotification, 300000);
    
    // Also trigger one after 10 seconds for immediate visibility
    const initialTimeout = setTimeout(triggerRandomNotification, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <div className="fixed bottom-8 right-8 z-[100] animate-in fade-in slide-in-from-right-8 duration-500">
          <div className="bg-white dark:bg-slate-900 border-l-4 border-[#87A96B] rounded-2xl shadow-2xl p-6 flex items-start gap-4 min-w-[320px] max-w-sm relative group">
            <button 
              onClick={() => setNotification(null)}
              className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={16} />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-[#87A96B] shrink-0">
              <Heart size={24} fill="currentColor" />
            </div>
            <div className="flex-1">
              <p className="text-[#87A96B] font-black text-sm uppercase tracking-wider mb-1 flex items-center gap-2">
                <Bell size={14} className="animate-bounce" />
                Live Deposit
              </p>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                {notification.message}
              </h4>
              <p className="text-slate-500 text-sm font-mono mt-1">
                {notification.wallet}
              </p>
            </div>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
}
