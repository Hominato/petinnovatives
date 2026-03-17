"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart, ShoppingCart, Search, Home, Activity, Rss, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [totalDonated, setTotalDonated] = useState("45.2 ETH");
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home size={20} /> },
    { name: 'Shop', href: '/shop', icon: <ShoppingCart size={20} /> },
    { name: 'Research', icon: <Search size={20} />, href: '/research' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#f8f9f7]/90 dark:bg-[#1a1f16]/90 backdrop-blur-md border-b border-[#87A96B]/10">
        <div className="flex items-center p-4 justify-between max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#87A96B] text-3xl">pets</span>
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Pet <span className="text-[#87A96B]">Innovatives</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4 mr-4 text-sm font-bold text-slate-500">
              <span className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100">
                <Heart size={14} fill="currentColor" />
                {totalDonated} Donated
              </span>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold hover:text-[#87A96B] transition-colors ${
                  pathname === link.href ? 'text-[#87A96B]' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/checkout">
              <button className="bg-[#87A96B] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg transition-all active:scale-95 flex items-center gap-2">
                <Heart size={16} fill="white" />
                Donate
              </button>
            </Link>
          </div>

          {/* Mobile Right Icons */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="text-[10px] font-black bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md border border-emerald-100 mr-2">
              {totalDonated}
            </div>
            <Link href="/checkout" className="p-2 text-slate-700 dark:text-slate-300">
              <ShoppingCart size={24} />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#87A96B] rounded-xl hover:bg-[#87A96B]/10 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-slate-900 md:hidden pt-24 px-6 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-2xl font-bold text-slate-800 dark:text-white hover:text-[#87A96B] transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[#87A96B]">
                  {link.icon}
                </div>
                {link.name}
              </Link>
            ))}
            <Link href="/checkout" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#87A96B] text-white py-5 rounded-[2rem] font-bold text-xl shadow-xl flex items-center justify-center gap-3">
                <Heart size={24} fill="white" />
                Donate Now
              </button>
            </Link>
          </div>
          
          <div className="absolute bottom-12 left-6 right-6 p-8 rounded-3xl bg-[#87A96B]/5 border border-[#87A96B]/20 text-center">
            <p className="text-[#87A96B] font-bold text-sm uppercase tracking-widest mb-1">Global Impact</p>
            <p className="text-3xl font-black text-slate-900 dark:text-white">{totalDonated}</p>
            <p className="text-slate-500 text-sm mt-2 font-medium">Verified on Blockchain</p>
          </div>
        </div>
      )}
    </>
  );
}
