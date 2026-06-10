import { Menu } from 'lucide-react';
import React from 'react';
import posterImg from './assets/images/festival_poster_1781115766963.png';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-[#E5B55A] selection:text-black flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 z-10 relative bg-black">
        <div className="flex-1">
          <button className="text-white hover:text-[#E5B55A] transition-colors cursor-pointer">
            <Menu size={28} />
          </button>
        </div>
        
        <div className="flex items-center justify-center gap-6 flex-1 whitespace-nowrap">
          <div className="font-display text-4xl tracking-widest uppercase">
            SUN & SOUND
          </div>
          <div className="hidden md:flex flex-col text-xs space-y-0.5 border-l border-white/30 pl-6 leading-tight">
            <span>TORONTO, CANADA</span>
            <span>CABANA</span>
            <span>JULY 24, 2026</span>
          </div>
        </div>
        
        <div className="flex-1 flex justify-end">
          <button className="bg-[#E5B55A] text-black font-display tracking-widest uppercase px-6 py-2 text-xl hover:bg-[#d4a44b] transition-colors cursor-pointer">
            TICKETS
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto">
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-20 py-16 lg:py-0 w-full relative z-10">
          <h1 className="font-display text-6xl md:text-8xl xl:text-9xl tracking-tight leading-[0.9] uppercase mb-4">
            Sign Up To Be<br/>The First To Know
          </h1>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide uppercase mb-8">
            ONCE TICKETS GO LIVE.
          </h2>
          <div className="text-sm tracking-widest font-bold mb-10 w-fit border-b-2 border-transparent hover:border-current transition-colors">
            21+ Only
          </div>
          
          <form 
            className="flex flex-col sm:flex-row gap-4 max-w-xl"
            onSubmit={(e) => { e.preventDefault(); alert("Thanks for signing up!"); }}
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border border-white/30 px-4 py-3 md:py-4 flex-1 focus:outline-none focus:border-[#E5B55A] transition-colors rounded-none placeholder:text-white/50"
              required
            />
            <button 
              type="submit"
              className="bg-[#E5B55A] text-black font-display tracking-widest uppercase px-8 py-3 md:py-4 text-2xl hover:bg-[#d4a44b] transition-colors whitespace-nowrap cursor-pointer"
            >
              SIGN UP
            </button>
          </form>
        </div>
        
        <div className="flex-1 lg:max-w-[45%] xl:max-w-[50%] p-8 lg:p-12 flex items-center justify-center bg-zinc-900/50">
          <div className="w-full aspect-[4/5] relative  shadow-2xl shadow-black/50 transform transition-transform hover:scale-[1.02] duration-500 overflow-hidden border border-white/10">
            <img 
              src={posterImg}
              alt="Sun & Sound Festival Lineup Poster" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </main>

      {/* Info Blocks Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-white/10">
        <a href="#hotels" className="group bg-[#E5B55A] text-black flex flex-col items-center justify-center text-center p-16 md:p-20 hover:opacity-90 transition-opacity border-b md:border-b-0 md:border-r border-black/10">
          <h3 className="font-display text-4xl mb-4 tracking-wider">OFFICIAL HOTELS</h3>
          <p className="font-mono text-sm mb-12">for SUN & SOUND 2026</p>
          
          <div className="flex flex-col gap-6 font-display text-2xl tracking-wide group-hover:gap-8 transition-all">
            <span className="flex items-center gap-2">BOOK AT CABANA SUITES &rarr;</span>
            <span className="flex items-center gap-2">BOOK AT TORONTO DOWNTOWN &rarr;</span>
          </div>
        </a>
        
        <a href="#merch" className="group bg-[#DBBEFF] text-black flex flex-col items-center justify-center text-center p-16 md:p-20 hover:opacity-90 transition-opacity border-b md:border-b-0 md:border-r border-black/10">
          <h3 className="font-display text-4xl mb-4 tracking-wider">MERCHANDISE</h3>
          <p className="font-mono text-sm mb-12 uppercase">Grab your official Sun & Sound gear</p>
          
          <div className="font-display text-2xl tracking-wide flex items-center gap-2 group-hover:gap-4 transition-all">
            BUY MERCH &rarr;
          </div>
        </a>
        
        <a href="#airline" className="group bg-[#96AED0] text-black flex flex-col items-center justify-center text-center p-16 md:p-20 hover:opacity-90 transition-opacity">
          <h3 className="font-display text-4xl mb-4 tracking-wider max-w-[250px] leading-[1.1]">OFFICIAL AIRLINE PARTNER</h3>
          <p className="font-mono text-sm mb-12 max-w-[280px] leading-relaxed">Air Canada is offering special discounts for SUN & SOUND.</p>
          
          <div className="font-display text-2xl tracking-wide flex items-center gap-2 group-hover:gap-4 transition-all uppercase">
            Click here to book your flight
          </div>
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-20 px-8 lg:px-20 border-t-4 border-[#E5B55A]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div>
            <h4 className="font-display text-3xl tracking-widest mb-6">FESTIVAL</h4>
            <ul className="space-y-4 font-mono text-sm text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#lineup" className="hover:text-white transition-colors">Lineup</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#tickets" className="hover:text-white transition-colors">Tickets</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-3xl tracking-widest mb-6">HELP</h4>
            <ul className="space-y-4 font-mono text-sm text-gray-300">
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#safety" className="hover:text-white transition-colors">Safety</a></li>
              <li><a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-3xl tracking-widest mb-6">SOCIAL</h4>
            <ul className="space-y-4 font-mono text-sm text-gray-300">
              <li><a href="#instagram" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#twitter" className="hover:text-white transition-colors">Twitter(X)</a></li>
              <li><a href="#youtube" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="#facebook" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#tiktok" className="hover:text-white transition-colors">TikTok</a></li>
              <li><a href="#snapchat" className="hover:text-white transition-colors">SnapChat</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-3xl tracking-widest mb-6">LET'S BE FRIENDS</h4>
            <form className="flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white text-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#96AED0]"
                required
              />
              <button 
                type="submit"
                className="bg-[#96AED0] text-black font-display tracking-widest text-xl py-3 uppercase hover:bg-white transition-colors cursor-pointer"
              >
                Sign up for emails
              </button>
            </form>
          </div>
          
        </div>
      </footer>
    </div>
  );
}
