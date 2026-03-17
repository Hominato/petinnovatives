"use client";

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, ShieldCheck, ArrowRight, CheckCircle2, X } from 'lucide-react';

// Custom design colors: Sage Green and Warm Orange
const COLORS = {
  sage: "#7D9D85", // Sage Green for health/research
  orange: "#E89B5E", // Warm Orange for rescue/stray
};

export default function DonationHub() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedChain, setSelectedChain] = useState<'eth' | 'btc' | 'tron' | 'stellar' | 'bnb' | 'sol'>('eth');
  const [donationAmountUSD, setDonationAmountUSD] = useState<string>("20");
  const [customAmountUSD, setCustomAmountUSD] = useState<string>("");
  const [showManualTransfer, setShowManualTransfer] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  // Dynamic exchange rates with mock fallbacks
  const [rates, setRates] = useState({
    eth: 2500,
    btc: 60000,
    tron: 0.12,
    stellar: 0.10,
    bnb: 400,
    sol: 150
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,solana,binancecoin,tron,stellar&vs_currencies=usd');
        const data = await response.json();
        
        setRates({
          eth: data.ethereum.usd,
          btc: data.bitcoin.usd,
          sol: data.solana.usd,
          bnb: data.binancecoin.usd,
          tron: data.tron.usd,
          stellar: data.stellar.usd
        });
        console.log("Live rates fetched:", data);
      } catch (error) {
        console.error("Failed to fetch live rates, using fallbacks:", error);
      }
    };
    
    fetchRates();
    // Refresh rates every 5 minutes
    const interval = setInterval(fetchRates, 300000);
    return () => clearInterval(interval);
  }, []);

  const presets = [
    { usd: "20", label: "Care Pack" },
    { usd: "50", label: "Rescue Fund" },
    { usd: "100", label: "Medical Aid" },
    { usd: "200", label: "Life Saver" },
  ];

  // Multi-chain routing addresses
  const CHAIN_ADDRESSES = {
    eth: "0xb3C6659cCA5102bd6681fCbE253BcC65ec3C25B2",
    btc: "bc1qc4ksezf0g8tmczx65umyf6pkkhp4m3gvfne02q",
    tron: "TP5qQpNvCD1JhvuiMToJxE3mmy292VM8o6",
    stellar: "Gkc9GM33mLAEsRfUGCzw2yXVLx4h4pgZYHhM9cPgyaeu",
    bnb: "0xb3C6659cCA5102bd6681fCbE253BcC65ec3C25B2", // Using ETH address as placeholder for BSC
    sol: "7N3C5r8m9G1b4eF2j4a6c8e0g2i4k6m8o0q2s4u6w" // Placeholder Solana address
  };

  const finalUSD = customAmountUSD || donationAmountUSD;
  const cryptoAmount = (parseFloat(finalUSD) / rates[selectedChain]).toFixed(selectedChain === 'btc' ? 6 : 4);

  const handleDonate = async () => {
    setIsProcessing(true);
    // Mimic processing/loading before showing the address
    setTimeout(() => {
      setIsProcessing(false);
      setShowManualTransfer(true);
    }, 800);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#f8f9f7] dark:bg-[#1a1f16] flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl p-10 text-center border border-emerald-100 dark:border-emerald-900/30">
          <div className="w-24 h-24 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle2 size={48} className="text-emerald-500" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Bless Your Heart!</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">Your donation request of <span className="font-bold text-slate-900 dark:text-white">${finalUSD}</span> has been initiated. Once the transaction is detected on the network, it will be routed to our rescue partners.</p>
          <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-6 rounded-3xl mb-8 border border-emerald-100 dark:border-emerald-900/20">
            <p className="text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest mb-1">Impact Status</p>
            <p className="text-2xl font-black text-emerald-900 dark:text-white">Awaiting Confirmation</p>
          </div>
          <button 
            className="w-full py-5 rounded-[2rem] font-bold text-white transition-all active:scale-95 shadow-xl hover:shadow-emerald-500/20"
            style={{ backgroundColor: COLORS.sage }}
            onClick={() => { setIsSuccess(false); setCustomAmountUSD(""); }}
          >
            Return to Hub
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9f7] dark:bg-[#1a1f16] font-sans text-slate-900 dark:text-slate-100 pb-20">
      <div className="max-w-4xl mx-auto px-4 pt-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-full mb-6 border border-emerald-100 dark:border-emerald-900/20">
            <Heart size={16} className="text-emerald-500" fill="currentColor" />
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">Global Rescue Mission</span>
          </div>
          <h1 className="text-5xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">Donation Hub</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">Select your ecosystem and contribution amount to support stray animals worldwide.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-12 space-y-8">
            
            {/* 1. Ecosystem Selection */}
            <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100 dark:border-slate-700/50">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-black">1</div>
                  Choose Your Ecosystem
                </h3>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {[
                  { id: 'eth', name: 'Ethereum', symbol: 'ETH', color: 'emerald', logo: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12 2L4.5 14.5 12 19l7.5-4.5L12 2zM12 22l7.5-4.5L12 13l-7.5 4.5L12 22z" /></svg>
                  )},
                  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', color: 'orange', logo: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M23.6 14.9c-.5-3.1-2.2-4.5-4.5-5.1.7-.5 1.2-1.1 1.4-1.9.4-2.1-.5-4.1-3.6-4.7V1h-2.1v2.2c-.6 0-1.1 0-1.7.1V1h-2.1v2.3c-.5 0-1 .1-1.5.1V1H7.4v2.3c-1.3.1-2.5.2-3.8.4l.4 2.1c.8-.1 1.5-.2 2.3-.2.4 0 .6.2.7.6l1.7 6.7c.1.4 0 .7-.4.8-1.1.2-2.3.4-3.4.6l.4 2.1c1.1-.1 2.2-.3 3.4-.6v4.6h2.1V16c.6 0 1.1-.1 1.6-.1v4.6h2.1v-4.6c.5-.1 1-.1 1.6-.1v4.6h2.1v-4.8c3.2-.6 5.2-2.1 4.7-5.3zm-10.4-8h3c1.3 0 2 .5 1.8 1.6s-1.1 1.6-2.4 1.6h-2.4V6.9zm4.2 8.1c-.2 1.4-1.4 1.9-3 1.9h-3.6v-3.8h3.6c1.6 0 3.2.3 3 1.9z" /></svg>
                  )},
                  { id: 'sol', name: 'Solana', symbol: 'SOL', color: 'purple', logo: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M3.5 18.5l2.5-2.5h14.5l-2.5 2.5H3.5zm14.5-13l2.5 2.5H6l2.5-2.5h12zm-3.5 6.5l2.5-2.5H2.5l2.5 2.5h11.5z" /></svg>
                  )},
                  { id: 'bnb', name: 'Binance', symbol: 'BNB', color: 'yellow', logo: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12 2L4 10l8 8 8-8-8-8zm0 14L5.4 9.4 12 2.8l6.6 6.6L12 16zm0 6l-4-4h8l-4 4z" /></svg>
                  )},
                  { id: 'tron', name: 'Tron', symbol: 'TRX', color: 'rose', logo: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12 2L2 20h20L12 2zm0 4.5l6.5 11h-13l6.5-11z" /></svg>
                  )},
                  { id: 'stellar', name: 'Stellar', symbol: 'XLM', color: 'blue', logo: (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12 1L8 5h8l-4-4zm0 22l4-4H8l4 4zm11-11l-4-4v8l4-4zM1 12l4 4V8l-4 4z" /></svg>
                  )},
                ].map((chain) => {
                  const isActive = selectedChain === chain.id;
                  return (
                    <button 
                      key={chain.id}
                      onClick={() => setSelectedChain(chain.id as any)}
                      className={`relative p-6 rounded-3xl border-2 transition-all group flex flex-col items-center gap-3 ${
                        isActive 
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' 
                          : 'border-slate-100 dark:border-slate-700/50 hover:border-emerald-200'
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isActive ? 'bg-emerald-500 text-white shadow-lg' : 'bg-slate-50 dark:bg-slate-700 text-slate-400'
                      }`}>
                        {chain.logo}
                      </div>
                      <p className={`font-bold text-sm ${isActive ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-500'}`}>
                        {chain.name}
                      </p>
                      {isActive && (
                        <div className="absolute -top-2 -right-2 bg-emerald-500 text-white p-1 rounded-full shadow-lg">
                          <CheckCircle2 size={16} />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* 2. Amount Selection */}
            <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100 dark:border-slate-700/50">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-black">2</div>
                Contribution Amount
              </h3>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {presets.map(tier => (
                  <button
                    key={tier.usd}
                    onClick={() => { setDonationAmountUSD(tier.usd); setCustomAmountUSD(""); }}
                    className={`p-6 rounded-3xl border-2 transition-all text-center flex flex-col gap-2 ${
                      donationAmountUSD === tier.usd && !customAmountUSD
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 shadow-inner scale-[1.02]'
                        : 'border-slate-50 dark:border-slate-700/50 hover:border-emerald-200'
                    }`}
                  >
                    <span className={`text-2xl font-black ${donationAmountUSD === tier.usd && !customAmountUSD ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-900 dark:text-white'}`}>
                      ${tier.usd}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{tier.label}</span>
                  </button>
                ))}
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
                  <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-tight">Custom USD</span>
                </div>
                <input 
                  type="number"
                  placeholder="0.00"
                  value={customAmountUSD}
                  onChange={(e) => setCustomAmountUSD(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-700/50 border-2 border-transparent focus:border-emerald-500 rounded-3xl py-6 pl-32 pr-40 text-3xl font-black outline-none transition-all placeholder:text-slate-200 dark:placeholder:text-slate-700 text-slate-900 dark:text-white shadow-inner"
                />
                <div className="absolute inset-y-0 right-8 flex items-center pointer-events-none flex-col justify-center items-end">
                   <span className="text-slate-300 dark:text-slate-600 font-black text-2xl uppercase tracking-tighter">USD</span>
                   <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest leading-none">≈ {cryptoAmount} {selectedChain.toUpperCase()}</span>
                </div>
              </div>
            </section>

            {/* 3. Action */}
            <div className="flex flex-col gap-6">
              <button 
                disabled={isProcessing || !finalUSD || parseFloat(finalUSD) <= 0}
                onClick={handleDonate}
                className="w-full py-8 rounded-[2.5rem] bg-[#87A96B] text-white font-black text-2xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4"
              >
                {isProcessing ? (
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Heart size={32} fill="white" />
                    Get Transfer Address (${finalUSD})
                  </>
                )}
              </button>

              {showManualTransfer && (
                <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white border-4 border-[#87A96B] animate-in zoom-in-95 duration-500 shadow-[0_0_50px_rgba(135,169,107,0.3)]">
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-[#87A96B] font-black uppercase tracking-widest text-sm">Direct Deposit Info</p>
                    <button onClick={() => setShowManualTransfer(false)} className="text-slate-500 hover:text-white transition-colors">
                      <X size={20} />
                    </button>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <p className="text-slate-400 text-xs font-bold mb-2">NETWORK</p>
                      <p className="text-xl font-black">{selectedChain.toUpperCase()}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-bold mb-3">DESTINATION ADDRESS</p>
                      <div className="relative group">
                        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 break-all font-mono text-sm pr-16 bg-slate-800/50">
                          {CHAIN_ADDRESSES[selectedChain]}
                        </div>
                        <button 
                          onClick={() => handleCopy(CHAIN_ADDRESSES[selectedChain])}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-[#87A96B] text-white rounded-xl hover:scale-110 active:scale-95 transition-all shadow-lg"
                        >
                          {isCopied ? <CheckCircle2 size={20} /> : <ShoppingCart size={20} />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-6 py-6 bg-white/5 rounded-3xl border border-white/10">
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Scan to Pay</p>
                      <div className="bg-white p-4 rounded-3xl shadow-2xl border-4 border-[#87A96B]/20">
                        <img 
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${CHAIN_ADDRESSES[selectedChain]}&color=1a1f16`} 
                          alt="QR Code" 
                          className="w-40 h-40"
                        />
                      </div>
                      <p className="text-[10px] text-slate-500 font-bold px-10 text-center uppercase tracking-tighter">Verified {selectedChain.toUpperCase()} Gateway</p>
                    </div>

                    <div>
                      <p className="text-slate-400 text-xs font-bold mb-2">AMOUNT TO SEND</p>
                      <p className="text-2xl font-black text-[#87A96B]">{cryptoAmount} {selectedChain.toUpperCase()}</p>
                      <p className="text-xs text-slate-500 mt-1">Equivalent to approx. ${finalUSD} USD</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#87A96B]/10 border border-[#87A96B]/30 flex gap-3 text-xs leading-relaxed">
                      <ShieldCheck size={20} className="text-[#87A96B] shrink-0" />
                      <p>Transfer to this verified rescue address. The system will automatically detect the transaction and route it to our partners.</p>
                    </div>
                    <button 
                      onClick={() => { setIsSuccess(true); setShowManualTransfer(false); }}
                      className="w-full py-4 rounded-2xl bg-white text-slate-900 font-black hover:bg-[#87A96B] hover:text-white transition-all shadow-lg font-bold"
                    >
                      I've Sent The Funds
                    </button>
                  </div>
                </div>
              )}

              <p className="text-center text-slate-400 dark:text-slate-500 font-medium px-12">
                100% of your donation is routed to rescue efforts. We use a transparent multi-chain tracking system to ensure every contribution reaches a pet in need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
