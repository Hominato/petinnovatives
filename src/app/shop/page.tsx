"use client";

import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Star, Heart, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const PRODUCTS = [
  { id: 1, title: "Wild Origins Kibble", price: "45.00", badge: "BEST SELLER", category: "Nutrition", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASO3gcmWq98FtLNmoucvO3ePTIJDCeGes2-whu9DxykeOcdX3CI7cdzoF5B7S8Qu1mqUJRXtkI7ttmNRNzT77Sv4T2QHLpdUDnHN9pgAXRFfvRgatHUzjfTwLMkUP9IYiSIC_wb8p3OrvwXk2oPsGgZMEwVvk3-Vdg7RUY9tHQCwrDcx_R6xg2HOMfl7Y49lg3WozWa-wfoOGyJpNbN22bgNPuLWD-jkg0pPS8UisIApGKo4B9CbS4DdkEYIKjWZqXmHERKbN9d8A", desc: "High-protein formula mimicking ancestral diets." },
  { id: 2, title: "IQ Stimulus Puzzle", price: "22.50", badge: "LAB TESTED", category: "Cognitive", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZGC5tDGtaNpYnCYTZ3yBf3jXKMjorCCgoXbKT_kuW1aRZExYFsn4O-oo2xrt7Zz8884Q1pg-sAe9VN4uH27PGA76SYXo1UjP1wd0VAsynkwae5bB6sHGnW5DJcx8m4nTSZxrk8ZFnR6-TvHwbNYwTsHvmdLa6nKoXq53dlVlJHjjbgNYRMFzBO-4xhSrWCYu8CiGsuiOBmFD1xh2hn39aXWF8VSlknoqT_5vowbSaX0PdQMB7Lmx-ajgA5joKLSAtRq0gauHX8sU", desc: "Multi-level puzzle for mental enrichment." },
  { id: 3, title: "Joint Support Chews", price: "34.99", badge: "RESEARCHED", category: "Wellness", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsjGSpDJ4CeXz_VLpSbmarBKByGFDXxhiVGhVFV04KJACksMMVD8LzDwsrtMN15PJqw4Eh2I6kVAOh-MOASKeLXM6kyEsye6TFD9SLW1PndSG_Ip_jtVBFaq12qVIBvwsY5QFhL7BKRywkQ8WdCN4iQjYpfax4oWperew4vvyzUASZbfnlT-jSe7fGLfzAH862S3x9HqFsrXOLRI8p5Av_tkl8ZgPPPieZWQzE0VlnECjedIRaHpBeGgAS2VJxq56n06FtoQCiJOw", desc: "Glucosamine and Chondroitin for senior vitality." },
  { id: 4, title: "Cloud Orthopedic Bed", price: "89.00", badge: "PREMIUM", category: "Comfort", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBib7J8WPl6_f-vqBLAAU2NVwrqQxAs0AQon0l2baJBWkMfM3IsUc_N9pf_d_CrtSRcU6A56cP-gjfSoS3tnRk_N3flLlPWXBuNrPdOgKy79T1FxJUEExwwkM56lwgv_4B5RqfrrlP6CEt3V4pJfHmh7FpXJ8zePQfzgUJ4ZJeRIwsKiQndtRYjzjGLQlHRzoNjqiYyHbPnRUmNCSmMg30o1eJ0DJ0iT26HwMJr7BEcfsWfVviBsaBEwBJs0DpDu4n9pYECXDsGxCs", desc: "Memory foam for maximum joint recovery." },
  { id: 5, title: "Bio-Active Probiotics", price: "29.99", badge: "STRAY CARE", category: "Wellness", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800", desc: "Support digestive health for rescued companions." },
  { id: 6, title: "Anxiety Relief Coat", price: "55.00", badge: "BEHAVIOR", category: "Comfort", img: "https://images.unsplash.com/photo-1541591490109-6a4e61035674?auto=format&fit=crop&q=80&w=800", desc: "Gentle pressure for calming stray trauma." },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#f8f9f7] dark:bg-[#1a1f16] font-sans pb-24">
      {/* Hero Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-full mb-6 border border-emerald-100 dark:border-emerald-900/20">
            <ShoppingCart size={16} className="text-emerald-500" />
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">Premium Collection</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">Innovatives <span className="text-[#87A96B]">Shop</span></h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">High-performance nutrition, cognitive enrichment, and medical-grade comfort vetted by research.</p>
        </div>
      </header>

      {/* Main Catalog */}
      <main className="max-w-7xl mx-auto px-4 -mt-12">
        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {["All Products", "Nutrition", "Cognitive", "Wellness", "Comfort"].map((cat) => (
            <button 
              key={cat}
              className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all ${
                cat === "All Products" 
                  ? "bg-[#87A96B] text-white shadow-xl shadow-emerald-500/20" 
                  : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-700 hover:border-emerald-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={product.img} 
                  alt={product.title} 
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg tracking-widest uppercase">
                    {product.badge}
                  </span>
                </div>
                <button className="absolute bottom-6 right-6 w-12 h-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors shadow-lg">
                  <Heart size={20} />
                </button>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <p className="text-xs font-black text-[#87A96B] uppercase tracking-[0.2em] mb-3">{product.category}</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">{product.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-2">{product.desc}</p>
                
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-700/50">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Price</span>
                    <span className="text-2xl font-black text-slate-900 dark:text-white">${product.price}</span>
                  </div>
                  <button className="bg-slate-900 dark:bg-emerald-500 text-white p-4 rounded-2xl hover:bg-[#87A96B] transition-all hover:scale-110 active:scale-95 shadow-xl">
                    <ShoppingCart size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Banner */}
        <section className="mt-24 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#87A96B]/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-[#87A96B] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <ShieldCheck size={32} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Shopping with a Mission.</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Every purchase funds life-saving treats and research for stray animals. 
              <span className="text-white font-bold ml-1">15% of net proceeds</span> are automatically routed to our global rescue wallet.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/checkout">
                <button className="bg-white text-slate-900 px-10 py-5 rounded-3xl font-black text-lg hover:bg-emerald-500 hover:text-white transition-all hover:scale-105">
                  Direct Donation
                </button>
              </Link>
              <div className="flex items-center gap-2 text-white/60 font-bold ml-4">
                <Zap size={20} className="text-yellow-400" />
                <span>Instant Impact Support</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
