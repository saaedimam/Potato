import ParticleBG from './ParticleBG'
import ProfileCard from './ProfileCard'
// Server-friendly hero; motion effects handled in client subcomponents if needed.

export default function Hero(){
  return (
    <section id="hero" className="pt-28 pb-24">
      <ParticleBG />
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1fr_360px] gap-10 items-start">
        <div className="mx-auto max-w-3xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"/> Available for collaborations
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight">Synthesize. Build the future.</h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto opacity-80">Engineering systems that compound: RFID, SaaS, and industrial software. Building StitchOS, TextileTrack, and digital stacks for Kattali Textile Ltd.</p>
          <div className="mt-6">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-cyan-400/90 text-black font-medium shadow-[0_0_30px_rgba(34,211,238,.45)] hover:bg-cyan-300 transition">Explore Work</a>
          </div>
          <div className="mt-10 mx-auto max-w-5xl">
            <div className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
              <video className="w-full h-auto object-cover" src="/hero.mp4" autoPlay muted loop playsInline preload="metadata">
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/0 to-white/10 dark:to-white/10"/>
            </div>
            <p className="text-xs opacity-70 mt-2">Using hero video from <code>/public/hero.mp4</code>.</p>
          </div>
        </div>
        <ProfileCard />
      </div>
    </section>
  )
}
