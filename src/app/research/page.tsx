"use client";

import React from 'react';
import { Search, BookOpen, Activity, Heart, ShieldCheck, Microscope, Zap, ArrowRight, Dna, Globe, FlaskConical, Cpu, Users } from 'lucide-react';

const RESEARCH_TOPICS = [
  {
    title: "Vaccine Innovations",
    icon: <ShieldCheck size={32} />,
    desc: "Developing low-cost, shelf-stable vaccines for stray populations in high-risk zones. Our latest Phase 2 prototype focuses on thermo-stability for tropical climates.",
    stats: "12 Studies Active",
    color: "emerald",
    img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Animal Behavior",
    icon: <Activity size={32} />,
    desc: "Understanding trauma-induced behavior in rescued strays. We use AI-driven motion analysis to identify early signs of recovery and socialization readiness.",
    stats: "Behavioral Patterns AI",
    color: "blue",
    img: "https://images.unsplash.com/photo-1548199973-03c40e556f30?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Rescue Logistics",
    icon: <Zap size={32} />,
    desc: "Optimizing global supply chains for emergency medical supplies. Our 'Impact-First' routing algorithm reduces delivery times by 35% in disaster zones.",
    stats: "Real-time Routing",
    color: "orange",
    img: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Stray Treatment",
    icon: <Heart size={32} />,
    desc: "Standardizing protocols for common street ailments. Our open-source medical handbook is now used by over 500 rescue centers worldwide.",
    stats: "Global Protocols",
    color: "rose",
    img: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Genetic Research",
    icon: <Microscope size={32} />,
    desc: "Mapping lineage to understand breed-specific vulnerabilities. This data helps us tailor nutrition plans for high-risk stray populations.",
    stats: "DNA Archive",
    color: "purple",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Public Health",
    icon: <BookOpen size={32} />,
    desc: "The intersection of pet welfare and community health. We study zoonotic disease pathways to prevent outbreaks in dense urban environments.",
    stats: "Policy Analysis",
    color: "indigo",
    img: "https://images.unsplash.com/photo-1579152276504-749e3556f6ba?auto=format&fit=crop&q=80&w=800"
  }
];

const LAB_GALLERY = [
  { title: "Next-Gen Sequencing", desc: "Illumina NovaSeq 6000 for high-throughput genotyping.", img: "https://images.unsplash.com/photo-1579152276504-749e3556f6ba?auto=format&fit=crop&q=80&w=800" },
  { title: "Bio-Imaging Suite", desc: "Confocal microscopy for cellular pathography.", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800" },
  { title: "Behavioral Lab", desc: "Controlled environments for cognitive assessment.", img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800" },
];

const MILESTONES = [
  { date: "Oct 2026", event: "Stable Parvo vaccine prototype reaches 98% efficacy in field tests." },
  { date: "Sep 2026", event: "AI behavioral model identifies 4 new social markers in feral canine clusters." },
  { date: "Aug 2026", event: "Global Rescue Routing API launched for South East Asia partners." },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#f8f9f7] dark:bg-[#1a1f16] font-sans pb-24">
      {/* Hero Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 pt-20 pb-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 px-4 py-2 rounded-full mb-8 border border-indigo-100 dark:border-indigo-900/20">
              <Microscope size={16} className="text-indigo-500" />
              <span className="text-xs font-black text-indigo-700 dark:text-indigo-400 uppercase tracking-widest">Global Science Center</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1]">
              The Frontier of <br/><span className="text-[#87A96B]">Veterinary Science</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-3xl leading-relaxed">
              Pet Innovatives Research is a world-leading initiative dedicated to solving the most pressing challenges in pet health, behavior, and global stray population management through open-source innovation.
            </p>
            
            <div className="w-full relative group max-w-2xl">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#87A96B] transition-colors" size={24} />
              <input 
                type="text" 
                placeholder="Find a study: 'Thermo-stable vaccines', 'AI Behavior'..."
                className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-3xl py-6 pl-16 pr-8 text-lg font-medium outline-none focus:border-[#87A96B] dark:focus:border-emerald-500 transition-all shadow-sm"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4">
        {/* Core Topics with Images */}
        <section className="py-24">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-[10px] font-black text-[#87A96B] uppercase tracking-[0.3em] mb-4">Research Pillars</h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white">Our Fields of Inquiry</h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-md">Our multidisciplinary teams combine genetic data, behavioral science, and civil engineering to create a holistic pet welfare ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {RESEARCH_TOPICS.map((topic, i) => (
              <div key={i} className="group bg-white dark:bg-slate-800 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={topic.img} alt={topic.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                  <div className={`absolute top-6 left-6 w-12 h-12 rounded-2xl bg-white dark:bg-slate-900/90 backdrop-blur-md text-${topic.color}-600 dark:text-${topic.color}-400 flex items-center justify-center shadow-lg`}>
                    {topic.icon}
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-[#87A96B] transition-colors">{topic.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed line-clamp-3">{topic.desc}</p>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-700/50">
                    <span className={`text-[10px] font-black uppercase tracking-widest text-${topic.color}-600 bg-${topic.color}-50 dark:bg-${topic.color}-900/20 px-3 py-1 rounded-full`}>
                      {topic.stats}
                    </span>
                    <button className="text-[#87A96B] font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform">
                      Deep Dive <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Laboratory Gallery */}
        <section className="py-24 border-t border-slate-100 dark:border-slate-800">
          <div className="text-center mb-16">
            <div className="inline-flex py-1 px-4 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 font-black text-[10px] uppercase tracking-widest mb-6">Facilities</div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">State-of-the-Art <span className="text-[#87A96B]">Labs</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LAB_GALLERY.map((item, i) => (
              <div key={i} className="group relative rounded-[2.5rem] overflow-hidden aspect-[3/4]">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <h4 className="text-2xl font-black text-white mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Partnership Strip */}
        <section className="py-20">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#87A96B]/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
            <div className="relative z-10 lg:w-1/2">
              <h2 className="text-[10px] font-black text-[#87A96B] uppercase tracking-[0.3em] mb-6">Global Network</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">Collaborating with the World's Finest.</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                We partner with 45+ premier veterinary research institutions and NGO rescue units across 6 continents to share data, protocols, and resources.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-white">45+</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Partner Universites</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-emerald-500">120K</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Rescue Records</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4 relative">
              <div className="space-y-4 pt-12">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                   <Globe className="text-white/20 w-12 h-12" />
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                   <Users className="text-white/20 w-12 h-12" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                   <FlaskConical className="text-white/20 w-12 h-12" />
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                   <Cpu className="text-white/20 w-12 h-12" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Impact Feed & Featured Case Study Grid */}
        <div className="grid lg:grid-cols-12 gap-10 py-24">
          {/* Featured Case Study */}
          <div className="lg:col-span-8 flex flex-col bg-white dark:bg-slate-800 rounded-[3rem] border border-slate-100 dark:border-slate-700/50 shadow-xl overflow-hidden group">
            <div className="h-96 relative">
              <img src="https://images.unsplash.com/photo-1576091160550-217339a9988a?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Genetic analysis" />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-800 via-transparent to-transparent"></div>
              <div className="absolute top-8 left-8 bg-[#87A96B] text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl">Latest Case Study</div>
            </div>
            <div className="p-12 -mt-16 relative z-10">
              <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-6">The 2026 Stray Population <br/>Density Map</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
                Our newest AI-driven model predicts stray population growth in urban centers with 94% accuracy, 
                allowing rescue teams to deploy vaccinations before outbreaks occur.
              </p>
              <div className="flex items-center gap-10">
                 <button className="bg-slate-900 dark:bg-[#87A96B] text-white px-10 py-5 rounded-3xl font-black text-lg hover:shadow-2xl transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
                    Read Mapping Report
                 </button>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-[#87A96B] overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=100" alt="Lead Researcher" />
                    </div>
                    <div>
                       <p className="text-sm font-black text-slate-900 dark:text-white leading-none">Dr. Elena Vance</p>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Lead AI Scientist</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Live Impact Feed */}
          <div className="lg:col-span-4 flex flex-col bg-[#87A96B] dark:bg-emerald-900/40 rounded-[3rem] p-12 shadow-xl shadow-emerald-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <Dna size={80} className="text-white/10 animate-spin-slow" />
            </div>
            <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-4">
               <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
               Live Impact Log
            </h3>
            <div className="space-y-8 flex-1">
               {MILESTONES.map((m, i) => (
                 <div key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                       <div className="w-2 h-2 rounded-full bg-white/40"></div>
                       <div className="w-[1px] h-full bg-white/20 mt-2"></div>
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-1">{m.date}</p>
                       <p className="text-white font-bold leading-relaxed group-hover:text-emerald-50 transition-colors uppercase tracking-tight text-sm">{m.event}</p>
                    </div>
                 </div>
               ))}
            </div>
            <button className="w-full mt-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl text-white font-black text-xs uppercase tracking-[0.2em] transition-all border border-white/20">
               View Full Timeline
            </button>
          </div>
        </div>
      </main>

      {/* Science CTA */}
      <section className="mt-24 max-w-5xl mx-auto px-4">
         <div className="bg-slate-50 dark:bg-slate-800/50 rounded-[3rem] p-12 md:p-20 text-center border border-slate-100 dark:border-slate-700">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8">Fuel the Innovation.</h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
               Our research is entirely funded by the community. 100% of your contributions go directly into laboratory equipment, peer-reviewed studies, and open-source veterinary protocols.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
               <button className="bg-slate-900 dark:bg-emerald-500 text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-xl shadow-emerald-500/10">
                  Fund New Research
               </button>
               <button className="text-slate-900 dark:text-white font-black text-lg underline underline-offset-8 hover:text-[#87A96B] transition-colors">
                  Read our 2026 Vision
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
