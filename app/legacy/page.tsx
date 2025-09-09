"use client"
// pages/index.tsx (or app/page.tsx)
// Multicolor, eye‑warming portfolio with layered background FX (gradient waves,
// glassmorphism, blobs, particles) + images. Preserves prior tests and adds more.
// Compatible with Pages Router out of the box (no top‑level 'use client').
// If you move to App Router: put this at app/page.tsx and add 'use client' first.

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Moon, Sun } from 'lucide-react'

// ----------------------------------------
// Utilities
// ----------------------------------------
function cx(...args: (string | undefined | null | false)[]) {
  return args.filter(Boolean).join(' ')
}

// ----------------------------------------
// Data (Saaed Imam)
// ----------------------------------------
const profile = {
  name: 'Saaed Imam',
  title: 'Platform Architect • Founder',
  tagline: 'Weaving intelligence into every thread',
  location: 'Chattogram, Bangladesh',
  email: 'sayedimam.fahim@gmail.com',
  socials: {
    github: 'https://github.com/saaedimam',
    upwork: 'https://www.upwork.com/freelancers/~012257680710d680c7',
    website: 'https://biddrive.vercel.app',
  },
  summary:
    'Engineering systems that compound: RFID, SaaS, and industrial software. ' +
    'Building StitchOS (RFID-first SaaS), TextileTrack (real-time tracking), and digital stacks for Kattali Textile Ltd.',
}

const ventures = [
  { title: 'StitchOS — The Connected Loom', subtitle: 'SaaS + IoT for textile operations', description: 'RFID-first, modular platform (Edge ingest, Core API, Ledger, Trace, Control). Next.js console + Python/FastAPI services. Multi-tenant, Supabase-backed Postgres with RLS.', tags: ['RFID','IoT','Next.js','Supabase','FastAPI'] },
  { title: 'TextileTrack', subtitle: 'Real-time RFID tracking for uniforms & linens', description: 'Python/React stack with offline support, UHF readers (Impinj/Zebra), durable tags (HID LinTRAK). WebSocket updates and multi-site sync.', tags: ['RFID','React','Python','Postgres'] },
  { title: 'Kattali Textile Ltd.', subtitle: 'Digital transformation & operations', description: 'Corporate site, investor docs, RFID line instrumentation, dashboards, and process automation across 12 production lines.', tags: ['Manufacturing','Ops','Web'] },
  { title: 'Paharbari Organics', subtitle: 'Eco‑tourism + agro—33 acres', description: 'Sustainable resort & organic farming (cashew, coffee, fruit, honey). Annual revenue from produce and eco‑resort ops.', tags: ['Sustainability','Agro','Tourism'] },
  { title: 'STRYV', subtitle: 'Sportswear brand', description: 'Oversized tees & hoodies inspired by football nostalgia; Chelsea‑themed designs, Gen‑Z aesthetic.', tags: ['Apparel','Branding'] },
  { title: 'Iori', subtitle: 'Minimal lifestyle brand', description: 'Calm, poetic, sustainable—earth‑toned visuals, soft animations, and user‑focused storytelling.', tags: ['Branding','Design'] },
]

const projects = [
  { title: 'StitchOS Console', description: 'Next.js 14 + Tailwind + shadcn/ui console with multi‑tenant auth and RLS policies.', tags: ['Next.js','RLS','shadcn'], year: '2025' },
  { title: 'RFID Line Instrumentation', description: "Cheapest‑path reader placement (entry/exit per operation cluster) + Little's Law analytics.", tags: ['RFID','IE'], year: '2025' },
  { title: 'TextileTrack Admin', description: 'Realtime scan display with WebSockets, CSV/PDF export, date ranges & checkpoint filters.', tags: ['React','WS'], year: '2025' },
  { title: 'KTL Corporate Site', description: 'WCAG‑compliant, SEO‑optimized Next.js website with sustainability reporting pages.', tags: ['SEO','A11y'], year: '2025' },
]

// ----------------------------------------
// Theme + Header + Command Palette
// ----------------------------------------
var DARK_KEY = 'prefers-dark'

function ThemeToggle() {
  const [dark, setDark] = useState(false)
  useEffect(function(){
    try{
      const stored = typeof window !== 'undefined' ? localStorage.getItem(DARK_KEY) : null
      const initial = stored ? stored === '1' : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      setDark(initial)
    }catch{}
  },[])
  useEffect(function(){
    if(typeof document !== 'undefined'){
      document.documentElement.classList.toggle('dark', dark)
      try{ localStorage.setItem(DARK_KEY, dark ? '1' : '0') }catch{}
    }
  },[dark])
  return (
    <button onClick={()=>setDark(!dark)} className="btn-ghost" aria-label="Toggle dark mode">
      {dark ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
    </button>
  )
}

function Header(){
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement | null>(null)

  useEffect(function(){
    function onKey(e: KeyboardEvent){
      const isCmdK = String(e.key).toLowerCase()==='k' && (e.metaKey || e.ctrlKey)
      if(e.key==='/' || isCmdK){ e.preventDefault(); setOpen(true) }
      if(e.key==='Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return function(){ window.removeEventListener('keydown', onKey) }
  },[])

  useEffect(function(){
    if(open){
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      setTimeout(function(){ var el = dialogRef.current?.querySelector<HTMLInputElement>('input'); if(el) el.focus() },0)
      return function(){ document.body.style.overflow = prev }
    }
  },[open])

  return (
    <header className="sticky top-0 z-30 border-b border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a className="font-bold tracking-tight text-xl" href="/">{profile.name}</a>
        <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
          <a href="#ventures">Ventures</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle/>
          <button onClick={()=>setOpen(true)} className="btn-ghost flex items-center gap-2" aria-haspopup="dialog" {...(open ? { 'aria-expanded': 'true' } : { 'aria-expanded': 'false' })} aria-controls="cmdk">
            <Search className="h-4 w-4"/> Command (/)
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 dark:bg-white/10 flex items-start justify-center pt-24" onClick={()=>setOpen(false)}>
          <div id="cmdk" role="dialog" aria-modal="true" ref={dialogRef} className="w-full max-w-xl bg-white/80 dark:bg-black/80 backdrop-blur-xl rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl" onClick={(e)=>e.stopPropagation()}>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-black/10 dark:border-white/10">
              <Search className="h-4 w-4"/>
              <input placeholder="Search… (hero, ventures, work, contact)" className="w-full bg-transparent outline-none"/>
              <kbd className="rounded border border-black/20 dark:border-white/20 px-2 py-1 text-xs opacity-70">Esc</kbd>
            </div>
            <ul className="max-h-72 overflow-auto py-2">
              {[{label:'Hero',href:'#hero'},{label:'Ventures',href:'#ventures'},{label:'Work',href:'#projects'},{label:'Contact',href:'#contact'}].map(function(i){
                return (
                  <li key={i.href}><a href={i.href} onClick={()=>setOpen(false)} className="block px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10">{i.label}</a></li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

// ----------------------------------------
// Background FX (multicolor)
// ----------------------------------------
function BackgroundFX(){
  // lightweight particles
  const containerRef = useRef<HTMLDivElement | null>(null)
  useEffect(function(){
    const el = containerRef.current
    if(!el) return
    const count = 32
    for(let i=0;i<count;i++){
      const s = document.createElement('span')
      s.className = 'fx-particle'
      s.style.setProperty('--x', Math.random().toFixed(3))
      s.style.setProperty('--y', Math.random().toFixed(3))
      s.style.setProperty('--d', (10 + Math.random()*20).toFixed(2))
      el.appendChild(s)
    }
    return function(){ while(el.firstChild) el.removeChild(el.firstChild) }
  },[])

  return (
    <div aria-hidden ref={containerRef} className="fx-layer pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Multicolor animated gradient canvas */}
      <div className="absolute inset-0 fx-gradient"/>
      {/* Soft blobs */}
      <div className="fx-blob fx-blob-a"/>
      <div className="fx-blob fx-blob-b"/>
      <div className="fx-blob fx-blob-c"/>
      {/* Noise overlay (uses /noise.png) */}
      <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay"/>
    </div>
  )
}

// ----------------------------------------
// Small UI bits
// ----------------------------------------
function Section(props: { id?: string; className?: string; children?: React.ReactNode }){
  return (
    <section id={props.id} className={cx('section','py-16',props.className)}>
      {props.children}
    </section>
  )
}

function ProjectCard(props: { title: string; description: string; tags?: string[]; href?: string }){
  const content = (
    <motion.article initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="group rounded-2xl border border-black/10 dark:border-white/10 p-6 hover:shadow-2xl hover:-translate-y-0.5 transition bg-white/70 dark:bg-black/40 backdrop-blur neon-card">
      <h3 className="text-lg font-semibold">{props.title}</h3>
      <p className="mt-2 text-sm opacity-80">{props.description}</p>
      {props.tags && props.tags.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {props.tags.map(function(t){ return <span key={t} className="text-[11px] px-2 py-0.5 rounded-full border border-black/10 dark:border-white/10 opacity-80">{t}</span> })}
        </div>
      ): null}
    </motion.article>
  )
  return props.href ? <a href={props.href} target="_blank" rel="noreferrer noopener">{content}</a> : content
}

// Compact profile card inspired by the reference mock
function ProfileCard(){
  return (
    <aside aria-label="Profile" className="sticky top-24 hidden lg:block">
      <div className="rounded-3xl overflow-hidden border border-cyan-400/20 bg-black/60 backdrop-blur shadow-2xl w-[320px]">
        <div className="p-6">
          <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-500/20 ring-1 ring-white/10 flex items-center justify-center text-3xl">
            <span className="opacity-80">🧠</span>
          </div>
          <h3 className="text-lg font-semibold text-center tracking-wide">{profile.name}</h3>
          <p className="text-center text-sm opacity-70">{profile.title}</p>
          <div className="mt-6 grid grid-cols-2 gap-2 text-[11px] opacity-80">
            {['RFID','IoT','Next.js','FastAPI','Supabase','Design'].map((k)=> (
              <span key={k} className="px-2 py-1 rounded-full border border-white/10 text-center">{k}</span>
            ))}
          </div>
        </div>
        <div className="px-6 pb-6 flex items-center justify-between text-xs opacity-70">
          <a className="underline underline-offset-4" href={profile.socials.github} target="_blank" rel="noreferrer noopener">GitHub</a>
          <a className="underline underline-offset-4" href={profile.socials.website} target="_blank" rel="noreferrer noopener">Website</a>
        </div>
      </div>
    </aside>
  )
}

function Footer(){
  return (
    <footer className="mx-auto max-w-7xl px-4 py-10 text-sm opacity-80">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.</p>
        <p>{profile.tagline}</p>
      </div>
    </footer>
  )
}

// ----------------------------------------
// Page
// ----------------------------------------
export default function Page(){
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white transition-colors">
      <BackgroundFX/>
      <Header/>

      <main>
        {/* Hero */}
        <Section id="hero" className="pt-28 pb-24">
          <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1fr_360px] gap-10 items-start">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="mx-auto max-w-3xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"/> Available for collaborations
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight">
              Synthesize. Build the future.
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto opacity-80">{profile.summary}</p>
            <div className="mt-6">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-cyan-400/90 text-black font-medium shadow-[0_0_30px_rgba(34,211,238,.45)] hover:bg-cyan-300 transition">
                Explore Work
              </a>
            </div>
            {/* Hero video (uses /public/hero.mp4) */}
            <div className="mt-10 mx-auto max-w-5xl">
              <div className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
                <video
                  className="w-full h-auto object-cover"
                  src="/hero.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/0 to-white/10 dark:to-white/10"/>
              </div>
              <p className="text-xs opacity-70 mt-2">Using hero video from <code>/public/hero.mp4</code>.</p>
            </div>
          </motion.div>
          <ProfileCard/>
          </div>
        </Section>

        {/* Ventures */}
        <Section id="ventures" className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Ventures</h2>
            <p className="opacity-70">Founder & operator across tech and sustainability.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventures.map(function(v){ return <ProjectCard key={v.title} title={v.title} description={v.description} tags={v.tags}/> })}
          </div>
        </Section>

        {/* Work */}
        <Section id="projects" className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>
            <p className="opacity-70">A few things I&apos;ve built and shipped.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(function(p){ return <ProjectCard key={p.title} title={p.title} description={p.description} tags={p.tags}/> })}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" className="text-center pb-24">
          <h3 className="text-2xl font-semibold tracking-tight">Let&apos;s build.</h3>
          <p className="opacity-70 mt-2">Say hello at <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a></p>
        </Section>
      </main>

      <Footer/>
      {/* Styles */}
      <style>{`
        /* Gradient wave background — teal/indigo */
        .fx-gradient{background: radial-gradient(1100px 500px at 15% 15%, rgba(34,211,238,.45) 0%, transparent 60%),
                                  radial-gradient(1000px 500px at 85% 20%, rgba(99,102,241,.40) 0%, transparent 60%),
                                  radial-gradient(1000px 560px at 20% 85%, rgba(56,189,248,.35) 0%, transparent 60%),
                                  radial-gradient(900px 600px at 80% 80%, rgba(59,130,246,.35) 0%, transparent 60%);
                      filter: blur(40px); opacity:.5; }
        .dark .fx-gradient{ opacity:.45 }

        /* Blobs */
        .fx-blob{ position:absolute; width:40vw; height:40vw; max-width:720px; max-height:720px; border-radius:50%; filter:blur(40px); opacity:.25; mix-blend:plus-lighter; }
        .fx-blob-a{ background:linear-gradient(120deg,#ff80b5,#ffd580); left:-10vw; top:-10vh; animation:floatA 22s ease-in-out infinite alternate; }
        .fx-blob-b{ background:linear-gradient(120deg,#8ec5ff,#b69cff); right:-8vw; top:10vh; animation:floatB 26s ease-in-out infinite alternate; }
        .fx-blob-c{ background:linear-gradient(120deg,#c1ff8e,#80ffd7); left:15vw; bottom:-12vh; animation:floatC 28s ease-in-out infinite alternate; }

        @keyframes floatA{ from{transform:translate3d(0,0,0)} to{transform:translate3d(4vw,6vh,0) rotate(8deg)} }
        @keyframes floatB{ from{transform:translate3d(0,0,0)} to{transform:translate3d(-3vw,5vh,0) rotate(-6deg)} }
        @keyframes floatC{ from{transform:translate3d(0,0,0)} to{transform:translate3d(5vw,-4vh,0) rotate(10deg)} }

        /* Tiny particles */
        .fx-layer{ isolation:isolate }
        .fx-particle{ position:absolute; width:6px; height:6px; border-radius:9999px; background:rgba(255,255,255,.6); left:calc(var(--x) * 100%); top:calc(var(--y) * 100%); animation: drift var(--d)s linear infinite; }
        .dark .fx-particle{ background:rgba(255,255,255,.35) }
        @keyframes drift{ 0%{ transform:translate3d(0,0,0) scale(.8) } 50%{ transform:translate3d(20px,-30px,0) scale(1) } 100%{ transform:translate3d(-10px,20px,0) scale(.8) } }

        /* Buttons */
        .btn-ghost{ border:1px solid currentColor; border-radius:.9rem; padding:.5rem .75rem; transition:all .2s ease }
        .btn-ghost:hover{ background:currentColor; color:var(--btn-fg,#fff) }
        .dark .btn-ghost:hover{ color:#000 }

        /* Neon card accents */
        .neon-card{ box-shadow: 0 0 0 1px rgba(34,211,238,.18) inset, 0 10px 50px rgba(34,211,238,.08); }

        /* Test badges */
        .test-badge{ display:inline-block; margin-right:8px; padding:2px 6px; border-radius:6px; font-size:11px; }
        .test-badge.ok{ background:rgba(34,197,94,.15); color:#16a34a; border:1px solid rgba(34,197,94,.4); }
        .test-badge.fail{ background:rgba(239,68,68,.15); color:#ef4444; border:1px solid rgba(239,68,68,.4); }
        .test-runner{ position:fixed; left:10px; bottom:10px; z-index:9999; }
      `}</style>

      {/* Tests: visual badges + console assertions */}
      <TestRunner/>
    </div>
  )
}

// ----------------------------------------
// Lightweight test runner (adds badges + console assertions)
// DO NOT change existing tests unless wrong; extra tests appended at the end.
// ----------------------------------------
function Badge(props: { label: string; ok: boolean }){
  return (<span className={`test-badge ${props.ok ? 'ok' : 'fail'}`}>{props.label}</span>)
}

function TestRunner(){
  const [checks, setChecks] = useState<{label: string; ok: boolean}[]>([])
  useEffect(function(){
    const results = []

    // EXISTING TESTS — unchanged
    const t1 = typeof cx === 'function'; console.assert(t1,'Test 1 failed: cx should be a function'); results.push({label:'cx available', ok:t1})
    const t2 = !!document.getElementById('hero') && !!document.getElementById('projects'); console.assert(t2,'Test 2 failed: #hero and/or #projects missing'); results.push({label:'sections present', ok:t2})
    const t3 = !!document.querySelector('header'); console.assert(t3,'Test 3 failed: <header> missing'); results.push({label:'header present', ok:t3})
    const t4 = !!document.querySelector('.btn-ghost svg'); console.assert(t4,'Test 4 failed: theme toggle icon not found'); results.push({label:'theme toggle renders', ok:t4})
    const t5 = !!Array.from(document.querySelectorAll('button')).find(function(b){ return (b.textContent || '').includes('Command') }); console.assert(t5,'Test 5 failed: Command palette button not found'); results.push({label:'cmd palette button', ok:t5})

    // NEW TESTS — appended
    const t6 = !!document.querySelector('main'); console.assert(t6,'Test 6 failed: <main> not present'); results.push({label:'main present', ok:t6})
    const t7 = !!document.querySelector("a[href^='mailto:']"); console.assert(t7,'Test 7 failed: mailto link missing'); results.push({label:'mailto present', ok:t7})
    const t8 = document.querySelectorAll('.group.rounded-2xl, .group.rounded-xl').length >= 3; console.assert(t8,'Test 8 failed: expected at least 3 project cards'); results.push({label:'cards render', ok:t8})
    const t9 = !!document.querySelector('.fx-gradient'); console.assert(t9,'Test 9 failed: multicolor gradient missing'); results.push({label:'gradient active', ok:t9})
    const t10 = !!document.querySelector('.fx-blob'); console.assert(t10,'Test 10 failed: blobs missing'); results.push({label:'blobs active', ok:t10})
    const t11 = document.querySelectorAll('.fx-particle').length >= 10; console.assert(t11,'Test 11 failed: particles not seeded'); results.push({label:'particles seeded', ok:t11})
    const t12 = !!document.querySelector('header .btn-ghost'); console.assert(t12,'Test 12 failed: theme toggle button missing'); results.push({label:'toggle button present', ok:t12})

    setChecks(results)
  },[])
  return (<div className="test-runner">{checks.map(function(c){ return <Badge key={c.label} ok={c.ok} label={c.label}/> })}</div>)
}
