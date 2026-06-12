import { useState } from 'react';
import { Instagram, MapPin, Music2, Sun } from 'lucide-react';
import logoImg from './assets/images/sun-sound-logo.png';
import posterImg from './assets/images/sun-sound-poster.png';

// Optional additional posters — drop a `sun-sound-poster-2.png` (or -3, -4, …)
// into src/assets/images/ and it will appear in the lineup deck automatically.
const extraPosterMods = import.meta.glob<{ default: string }>(
  './assets/images/sun-sound-poster-*.png',
  { eager: true },
);
const EXTRA_POSTERS: string[] = Object.entries(extraPosterMods)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod]) => mod.default);

const FESTIVAL_NAME = 'Sun and Sound Festival';
const SIGNUP_URL = 'https://www.ticketgateway.com/event/view/sunandsoundfest';

const MARQUEE_ITEMS = [
  FESTIVAL_NAME.toUpperCase(),
  'TORONTO',
  'CABANA POOL BAR',
  'JULY 24, 2026',
  'NO11',
  'JAZZWRLD & THUKUTHELA',
  'SUNANDSOUND.CA',
];

function LineupDeck({ posters }: { posters: string[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const n = posters.length;

  // Computes the visual position for a poster based on its depth in the stack
  // (0 = front, 1 = next, 2+ = deeper). Stays as inline transforms so the 500ms
  // transition smoothly interpolates between positions on shuffle.
  const styleForDepth = (depth: number): { transform: string; zIndex: number } => {
    if (depth === 0) {
      return { transform: 'translate(0%, 0%) rotate(3deg) scale(1)', zIndex: 30 };
    }
    if (depth === 1) {
      return { transform: 'translate(-14%, 6%) rotate(-7deg) scale(0.93)', zIndex: 20 };
    }
    const t = -(14 + (depth - 1) * 8);
    const y = 6 + (depth - 1) * 4;
    const r = -7 - (depth - 1) * 5;
    const s = Math.max(0.7, 0.93 - (depth - 1) * 0.07);
    return { transform: `translate(${t}%, ${y}%) rotate(${r}deg) scale(${s})`, zIndex: 20 - depth };
  };

  return (
    <div className="relative animate-float w-full max-w-[400px] aspect-[3/4]">
      <div className="absolute inset-0 bg-[var(--color-sun)]/40 rounded-[2rem] blur-2xl" />

      {posters.map((src, idx) => {
        const depth = (idx - activeIdx + n) % n;
        const { transform, zIndex } = styleForDepth(depth);
        const isFront = depth === 0;
        return (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveIdx(idx)}
            aria-label={`${isFront ? 'Featured' : 'Bring forward'} — lineup poster ${idx + 1} of ${n}`}
            aria-pressed={isFront}
            style={{ transform, zIndex }}
            className="absolute top-0 right-0 w-[82%] aspect-[3/4] rounded-[1.5rem] overflow-hidden shadow-2xl shadow-[var(--color-deep)]/40 border-4 border-white/60 transition-all duration-500 ease-out cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-sun)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            <img
              src={src}
              alt={`Sun and Sound Festival lineup poster ${idx + 1}`}
              className="w-full h-full object-cover object-bottom pointer-events-none select-none"
              draggable={false}
            />
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => setActiveIdx((activeIdx + 1) % n)}
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[var(--color-sun)] text-[var(--color-deep)] font-display uppercase tracking-wider text-sm sm:text-base px-5 py-2 rounded-full shadow-lg rotate-[-3deg] z-40 whitespace-nowrap cursor-pointer hover:bg-[var(--color-sun-deep)] transition-colors"
      >
        Lineup · Tap to swap
      </button>
    </div>
  );
}

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
            Tickets
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="px-4 md:px-8 pt-4 pb-16 md:pt-8 md:pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="inline-flex items-center gap-2 bg-[var(--color-sun)] text-[var(--color-deep)] font-display tracking-widest text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm uppercase font-bold">
              <Music2 size={14} />
              Tickets On Sale Now
            </p>

            <h1 className="font-display uppercase tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.92] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] mb-6">
              Secure your<br />spot for<br /><span className="text-[var(--color-sun)]">sun &amp; sound.</span>
            </h1>

            <p className="text-white/85 text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              <span className="font-display uppercase tracking-wider text-white">Cabana Pool Bar</span>
              <br />
              11 Polson St, 1st Floor · Toronto, ON M5A 1A4
              <br />
              Saturday · July 24, 2026
            </p>

            <div
              id="signup"
              className="scroll-mt-28 max-w-md mx-auto lg:mx-0 bg-white/95 backdrop-blur rounded-2xl p-5 md:p-6 shadow-2xl shadow-[var(--color-deep)]/20 animate-pulse-glow"
            >
              <p className="block font-display uppercase tracking-widest text-base text-[var(--color-deep)] mb-3">
                Get Your Passes
              </p>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[var(--color-deep)] text-white font-display uppercase tracking-wider text-lg px-7 py-4 rounded-xl hover:bg-[var(--color-sun)] hover:text-[var(--color-deep)] transition-colors"
              >
                Buy Passes
              </a>
              <a
                href="https://buy.tablelist.com/e/8da5de481f71b1b3?at=61c5de745e73f315"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center border-2 border-[var(--color-sun)] text-[var(--color-sun)] font-display uppercase tracking-wider text-lg px-7 py-4 rounded-xl mt-3 hover:bg-[var(--color-sun)] hover:text-[var(--color-deep)] transition-colors"
              >
                VIP Passes
              </a>
              <p className="text-xs text-[var(--color-deep)]/50 mt-3">19+ · Secure your spot now.</p>
            </div>
          </div>

          {/* Poster(s) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            {EXTRA_POSTERS.length === 0 ? (
              // Single poster
              <div className="relative animate-float">
                <div className="absolute -inset-3 bg-[var(--color-sun)]/40 rounded-[2rem] blur-xl" />
                <div className="relative w-[min(100%,340px)] md:w-[min(100%,380px)] aspect-[3/4] rounded-[1.75rem] overflow-hidden shadow-2xl shadow-[var(--color-deep)]/30 border-4 border-white/60 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <img
                    src={posterImg}
                    alt={`${FESTIVAL_NAME} — NO11 performing live`}
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 md:-left-8 bg-[var(--color-sun)] text-[var(--color-deep)] font-display uppercase tracking-wider text-base px-4 py-2 rounded-full shadow-lg rotate-[-6deg]">
                  NO11 · Live
                </div>
              </div>
            ) : (
              <LineupDeck posters={[posterImg, ...EXTRA_POSTERS]} />
            )}
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
                title: 'Cabana Pool Bar',
                desc: '11 Polson St, 1st Floor · Toronto, ON M5A 1A4. Right on the water with the CN Tower in view.',
              },
              {
                icon: Sun,
                title: 'July 24, 2026',
                desc: 'One day. Full sun. Tickets on sale now — grab yours before they\'re gone.',
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
              href="https://www.instagram.com/sunandsound.ca?igsh=MXJwZDExNTR5eHFnbw=="
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
          <p className="text-white/40 text-[10px] text-center -mt-4">
            Designed by{' '}
            <a
              href="https://www.floatsanywhere.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-sun)] transition-colors underline-offset-2 hover:underline"
            >
              Floats
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
