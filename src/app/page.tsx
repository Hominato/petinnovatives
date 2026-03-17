"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Search, 
  ShoppingCart, 
  Menu, 
  Home, 
  Star,
  Heart,
  Send,
  User
} from 'lucide-react';

/**
 * Pet Innovatives - Science-Backed Pet Care
 * Ported from the user's premium HTML design to Next.js/React.
 */
export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#f8f9f7] dark:bg-[#1a1f16] font-sans text-slate-900 dark:text-slate-100">
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 pb-24">
        
        {/* Search Bar */}
        <div className="py-6">
          <label className="group flex flex-col w-full">
            <div className="flex w-full items-stretch rounded-xl h-14 shadow-sm border border-primary/20 bg-white dark:bg-slate-800 overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 transition-all">
              <div className="flex items-center justify-center pl-4 text-primary">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                className="w-full border-none bg-transparent focus:ring-0 px-4 text-base placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none" 
                placeholder="Search for food, supplements, or toys..." 
              />
              <button className="bg-primary text-white px-6 font-semibold hover:bg-primary/90 transition-colors">Find</button>
            </div>
          </label>
        </div>

        {/* Hero Banner */}
        <section className="mt-4">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 aspect-[21/9] min-h-[240px] flex items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
            <img 
              className="absolute inset-0 w-full h-full object-cover" 
              alt="Happy golden retriever" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIi7iTYhnbI907CgyAKxQrE2R1WvE6r_vwGTCp7T4BuKwb3c5fM1TxM7BCQ6GlTMjdh4VaFwC_cqOxaqkiMk6NG7LYU_pnNybZY9dIwQN_ZGVo18-w0jEE2IFgHAiWWg7_g-7fbi3-pggz471KOb9bp5JDF44hX_GF-ixZFQC0VpSJJyNxp6aQ6GEmWZ-284wOY-486xwzK531b53ZRsEQKLTgUiyM09FNMUYP9d93NrQUNbnoTvQdENC478oLrpwp9DMzOGTtMp4" 
            />
            <div className="relative z-20 p-8 md:p-12 max-w-xl">
              <span className="inline-block bg-primary px-3 py-1 rounded-full text-white text-xs font-bold mb-4 uppercase tracking-wider">New Research Pack</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">Science-backed pet wellness.</h2>
              <p className="text-slate-200 text-lg mb-6">Expert-curated nutrition and cognitive toys designed for long-term health.</p>
              <Link href="/shop">
                <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg">Shop The Collection</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Essentials */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Featured Essentials</h3>
            <a className="text-primary font-semibold flex items-center gap-1 hover:underline" href="#">
              View all <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Wild Origins Kibble", price: "45.00", badge: "BEST SELLER", category: "Nutrition", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASO3gcmWq98FtLNmoucvO3ePTIJDCeGes2-whu9DxykeOcdX3CI7cdzoF5B7S8Qu1mqUJRXtkI7ttmNRNzT77Sv4T2QHLpdUDnHN9pgAXRFfvRgatHUzjfTwLMkUP9IYiSIC_wb8p3OrvwXk2oPsGgZMEwVvk3-Vdg7RUY9tHQCwrDcx_R6xg2HOMfl7Y49lg3WozWa-wfoOGyJpNbN22bgNPuLWD-jkg0pPS8UisIApGKo4B9CbS4DdkEYIKjWZqXmHERKbN9d8A" },
              { title: "IQ Stimulus Puzzle", price: "22.50", badge: "LAB TESTED", category: "Cognitive", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZGC5tDGtaNpYnCYTZ3yBf3jXKMjorCCgoXbKT_kuW1aRZExYFsn4O-oo2xrt7Zz8884Q1pg-sAe9VN4uH27PGA76SYXo1UjP1wd0VAsynkwae5bB6sHGnW5DJcx8m4nTSZxrk8ZFnR6-TvHwbNYwTsHvmdLa6nKoXq53dlVlJHjjbgNYRMFzBO-4xhSrWCYu8CiGsuiOBmFD1xh2hn39aXWF8VSlknoqT_5vowbSaX0PdQMB7Lmx-ajgA5joKLSAtRq0gauHX8sU" },
              { title: "Joint Support Chews", price: "34.99", badge: null, category: "Wellness", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsjGSpDJ4CeXz_VLpSbmarBKByGFDXxhiVGhVFV04KJACksMMVD8LzDwsrtMN15PJqw4Eh2I6kVAOh-MOASKeLXM6kyEsye6TFD9SLW1PndSG_Ip_jtVBFaq12qVIBvwsY5QFhL7BKRywkQ8WdCN4iQjYpfax4oWperew4vvyzUASZbfnlT-jSe7fGLfzAH862S3x9HqFsrXOLRI8p5Av_tkl8ZgPPPieZWQzE0VlnECjedIRaHpBeGgAS2VJxq56n06FtoQCiJOw" },
              { title: "Cloud Orthopedic Bed", price: "89.00", badge: null, category: "Comfort", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBib7J8WPl6_f-vqBLAAU2NVwrqQxAs0AQon0l2baJBWkMfM3IsUc_N9pf_d_CrtSRcU6A56cP-gjfSoS3tnRk_N3flLlPWXBuNrPdOgKy79T1FxJUEExwwkM56lwgv_4B5RqfrrlP6CEt3V4pJfHmh7FpXJ8zePQfzgUJ4ZJeRIwsKiQndtRYjzjGLQlHRzoNjqiYyHbPnRUmNCSmMg30o1eJ0DJ0iT26HwMJr7BEcfsWfVviBsaBEwBJs0DpDu4n9pYECXDsGxCs" },
            ].map((product, i) => (
              <div key={i} className="group bg-white dark:bg-slate-800 rounded-2xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="aspect-square overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={product.img} alt={product.title} />
                  {product.badge && <div className="absolute top-3 left-3 bg-primary/90 text-white text-[10px] font-bold px-2 py-1 rounded">{product.badge}</div>}
                </div>
                <div className="p-5">
                  <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">{product.category}</p>
                  <h4 className="font-bold text-lg mb-2 line-clamp-1">{product.title}</h4>
                  <div className="flex items-center gap-1 mb-3 text-orange-400">
                    {[1,2,3,4,5].map(star => <span key={star} className="material-symbols-outlined text-sm fill-current">star</span>)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-slate-900 dark:text-white">${product.price}</span>
                    <button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                      <span className="material-symbols-outlined">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mt-16 bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why shop with Pet Innovatives?</h3>
              <div className="space-y-6">
                {[
                  { icon: 'magnification_small', title: 'Vetted by Experts', desc: 'Every toy and food brand is analyzed by our team of veterinarians.' },
                  { icon: 'eco', title: 'Sustainability First', desc: 'We prioritize brands that use eco-friendly packaging and ethical sourcing.' },
                  { icon: 'rocket_launch', title: 'Next-Day Delivery', desc: "Fast shipping because we know your pets can't wait for their treats." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-primary/20 p-3 rounded-xl h-fit">
                      <span className="material-symbols-outlined text-primary">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" 
                alt="Healthy dog" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCZcDsqn0sYKeQ9VDXPkrStp3BITJHd9DAOHgiXFNh_iJOFYHf8R6JjHjgwxOINIxJREmb9q4jU0FLjQ4jGQral9g4CuuC9zdjO5xALz5DwJMIgn3zerendB-D9fBWwBMQgFwuvQJDUpIoq2If5oTa7vIs7xJWS_iTWn-Zs56rCRJZN8Oe8mtoD5_SHJuO3L_y8R2xxgWRDWYe2Fnr8LHHyQretfFm-9eTtw9ZCXAU1J-mrz-xvZ8DLyB45dbdYlfeUEUbFnhx9VQ" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-primary/10 shadow-xl hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                    <span className="material-symbols-outlined text-green-600">verified</span>
                  </div>
                  <div>
                    <p className="font-bold text-xl">100% Organic</p>
                    <p className="text-slate-500 text-sm">Certified ingredients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
