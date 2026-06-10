import { Instagram, MapPin, Music2, Sun } from 'lucide-react';
import logoImg from './assets/images/sun-sound-logo.png';
import posterImg from './assets/images/sun-sound-poster.png';

const FESTIVAL_NAME = 'Sun and Sound Festival';
const SIGNUP_URL = 'https://laylo.com/sunandsound/sssf';

const MARQUEE_ITEMS = [
  FESTIVAL_NAME.toUpperCase(),
  'TORONTO',
  'CABANA POOL BAR',
  'JULY 24, 2026',
  'NO11 — PERFORMING LIVE',
  'SUNANDSOUND.CA',
  '21+',
];

function MarqueeStrip() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden bg-[var(--color-deep)] py-3 border-y border-white/10">
      <div className="flex w-max animate-marquee gap-10">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-sm md:text-base tracking-wide text-[var(--color-sun)] uppercase whitespace-nowrap flex items-center gap-10"
          >
            {item}
            <Sun size={14} className="text-white/40 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-sky)] text-[var(--color-deep)] selection:bg-[var(--color-sun)] selection:text-[var(--color-deep)]">
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#4db3f2] via-[var(--color-sky)] to-[var(--color-pool)]" />
      <div className="fixed top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[var(--color-sun)]/15 blur-3xl -z-10 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-15%] w-[50vw] h-[50vw] rounded-full bg-white/10 blur-3xl -z-10 pointer-events-none" />

      {/* Nav */}
      <header className="sticky top-0 z-50 px-4 md:px-8 py-3 md:py-4">
        <nav className="max-w-6xl mx-auto flex items-center justify-between gap-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg shadow-black/5">
          <a href="#" className="shrink-0 md:w-28">
            <img
              src={logoImg}
              alt={FESTIVAL_NAME}
              className="h-14 w-14 md:h-16 md:w-16 object-contain drop-shadow-lg"
            />
          </a>

          <div className="flex flex-col items-center text-center min-w-0 leading-none">
            <span className="font-display uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl leading-[0.85] whitespace-nowrap drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
              <span className="text-white">Sun</span>
              <span className="text-[var(--color-sun)] italic mx-0.5">&amp;</span>
              <span className="text-white">Sound</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-[var(--color-sun)] text-[10px] md:text-xs font-display tracking-[0.4em] uppercase mt-2 drop-shadow-sm">
              <span>Toronto</span>
              <Sun size={10} className="shrink-0 text-white/70" />
              <span>Jul 24 &lsquo;26</span>
            </span>
          </div>

          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[var(--color-sun)] text-[var(--color-deep)] font-display text-sm md:text-base px-4 md:px-5 py-2 rounded-full hover:bg-[var(--color-sun-deep)] transition-colors shadow-md"
          >
            Sign Up
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="px-4 md:px-8 pt-4 pb-16 md:pt-8 md:pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="inline-flex items-center gap-2 bg-[var(--color-deep)]/80 text-[var(--color-sun)] font-display tracking-widest text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm uppercase">
              <Music2 size={14} />
              Tickets Dropping Soon
            </p>

            <h1 className="font-display uppercase tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.92] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] mb-6">
              Be the first<br />to know when<br /><span className="text-[var(--color-sun)]">tickets drop.</span>
            </h1>

            <p className="text-white/85 text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              A summer day on the water in Toronto. Sun, sound, and Cabana vibes — July 24th, 2026.
            </p>

            <div
              id="signup"
              className="scroll-mt-28 max-w-md mx-auto lg:mx-0 bg-white/95 backdrop-blur rounded-2xl p-5 md:p-6 shadow-2xl shadow-[var(--color-deep)]/20 animate-pulse-glow"
            >
              <p className="block font-display uppercase tracking-widest text-base text-[var(--color-deep)] mb-3">
                Get on the list
              </p>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[var(--color-deep)] text-white font-display uppercase tracking-wider text-lg px-7 py-4 rounded-xl hover:bg-[var(--color-pool)] transition-colors"
              >
                Sign Up Now
              </a>
              <p className="text-xs text-[var(--color-deep)]/50 mt-3">21+ · No spam, just the drop.</p>
            </div>
          </div>

          {/* Poster */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute -inset-3 bg-[var(--color-sun)]/40 rounded-[2rem] blur-xl" />
              <div className="relative w-[min(100%,340px)] md:w-[min(100%,380px)] aspect-[3/4] rounded-[1.75rem] overflow-hidden shadow-2xl shadow-[var(--color-deep)]/30 border-4 border-white/60 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <img
                  src={posterImg}
                  alt={`${FESTIVAL_NAME} — NO11 performing live`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-[var(--color-sun)] text-[var(--color-deep)] font-display uppercase tracking-wider text-base px-4 py-2 rounded-full shadow-lg rotate-[-6deg]">
                NO11 · Live
              </div>
            </div>
          </div>
        </div>
      </main>

      <MarqueeStrip />

      {/* Experience */}
      <section className="bg-[var(--color-deep)] text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-display uppercase tracking-[0.4em] text-xs md:text-sm text-[var(--color-sun)]/80 mb-4">
              Toronto · Jul 24 · 2026
            </p>
            <h2 className="font-display uppercase tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--color-sun)] leading-[0.9] mb-4">
              Poolside<br />in the 6ix
            </h2>
            <p className="text-white/70 max-w-lg mx-auto text-sm md:text-base mt-6">
              Toronto summer energy at Cabana — skyline views, water, and a lineup built for the season.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: MapPin,
                title: 'Cabana, Toronto',
                desc: 'Right on the water with the CN Tower in view. The city\'s summer home base.',
              },
              {
                icon: Sun,
                title: 'July 24, 2026',
                desc: 'One day. Full sun. Save the date — tickets are coming.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--color-sun)]/20 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[var(--color-sun)]" />
                </div>
                <h3 className="font-display uppercase tracking-wide text-2xl mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[var(--color-deep)] leading-none">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="var(--color-sky)"
          />
        </svg>
      </div>

      <footer className="bg-[var(--color-sky)] px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 md:gap-8">
          <p className="font-display uppercase tracking-tight text-5xl sm:text-6xl md:text-7xl text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.25)] text-center leading-[0.9]">
            Sun &amp; Sound
          </p>
          <p className="font-display uppercase tracking-[0.3em] text-white/80 text-sm">sunandsound.ca · Toronto, ON</p>

          <div className="flex items-center gap-4">
            <a
              href="#instagram"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-[var(--color-sun)] hover:text-[var(--color-deep)] transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#tiktok"
              aria-label="TikTok"
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-[var(--color-sun)] hover:text-[var(--color-deep)] transition-colors font-display text-xs"
            >
              TT
            </a>
          </div>

          <p className="text-white/50 text-xs text-center">
            &copy; 2026 {FESTIVAL_NAME}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
