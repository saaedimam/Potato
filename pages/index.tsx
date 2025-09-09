import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function cx(...classes: Array<string | false | undefined | null>) { return classes.filter(Boolean).join(' ') }

const profile = {
  name: 'Saaed Imam',
  tagline: 'Weaving intelligence into every thread',
  email: 'sayedimam.fahim@gmail.com',
  summary: 'Engineering systems that compound: RFID, SaaS, and industrial software. Building StitchOS, TextileTrack, and digital stacks for Kattali Textile Ltd.',
}
const ventures = [
  { title: 'StitchOS — The Connected Loom', description: 'RFID‑first, modular platform (Edge ingest, Core API, Ledger, Trace, Control). Next.js console + FastAPI services. Supabase Postgres RLS.', tags: ['RFID','IoT','Next.js','Supabase','FastAPI'] },
  { title: 'TextileTrack', description: 'Real‑time RFID tracking for uniforms & linens; UHF readers; offline; WebSockets; multi‑site sync.', tags: ['RFID','React','Python','Postgres'] },
  { title: 'Kattali Textile Ltd.', description: 'RFID line instrumentation, investor docs, dashboards, and process automation across 12 lines.', tags: ['Manufacturing','Ops','Web'] },
]
const projects = [
  { title: 'StitchOS Console', description: 'Next.js 14 + Tailwind + shadcn/ui console with multi‑tenant auth and RLS policies.', tags: ['Next.js','RLS','shadcn'] },
  { title: 'RFID Line Instrumentation', description: 'Cheapest‑path reader placement + Little’s Law analytics.', tags: ['RFID','IE'] },
  { title: 'TextileTrack Admin', description: 'Realtime scan display with WebSockets, exports, ranges & filters.', tags: ['React','WS'] },
]

const DARK_KEY = 'prefers-dark'

function ThemeToggle(){
  const [dark,setDark] = useState(false)
  useEffect(()=>{
    try{
      const stored = typeof window!=='undefined'? localStorage.getItem(DARK_KEY):null
      setDark(stored? stored==='1' : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches))
    }catch{}
  },[])
  useEffect(()=>{
    if(typeof document!=='undefined'){
      document.documentElement.classList.toggle('dark', dark)
      try{ localStorage.setItem(DARK_KEY, dark?'1':'0') }catch{}
    }
  },[dark])
  return <button onClick={()=>setDark(!dark)} className="btn-ghost" aria-label="Toggle dark mode">{dark?<Sun className="h-4 w-4"/>:<Moon className="h-4 w-4"/>}</button>
}

function Header(){
  const [open,setOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  useEffect(()=>{
    function onKey(e: KeyboardEvent){ const isCmdK = String(e.key).toLowerCase()==='k' && (e.metaKey||e.ctrlKey); if(e.key==='/'||isCmdK){e.preventDefault();setOpen(true)}; if(e.key==='Escape') setOpen(false) }
    window.addEventListener('keydown', onKey); return ()=>window.removeEventListener('keydown', onKey)
  },[])
  useEffect(()=>{
    if(open){ const prev=document.body.style.overflow; document.body.style.overflow='hidden'; setTimeout(()=>{ const el = dialogRef.current?.querySelector('input') as HTMLInputElement | null; el&&el.focus() },0); return ()=>{ document.body.style.overflow=prev } }
  },[open])
  return (
    <header className="sticky top-0 z-30 border-b border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link className="font-bold tracking-tight text-xl" href="/">{profile.name}</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
          <a href="#ventures">Ventures</a><a href="#projects">Work</a><a href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle/>
          <button onClick={()=>setOpen(true)} className="btn-ghost flex items-center gap-2" aria-haspopup="dialog" aria-expanded={open} aria-controls="cmdk"><Search className="h-4 w-4"/> Command (/)</button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 dark:bg-white/10 flex items-start justify-center pt-24" onClick={()=>setOpen(false)}>
          <div id="cmdk" role="dialog" aria-modal="true" ref={dialogRef} className="w-full max-w-xl bg-white/80 dark:bg-black/80 backdrop-blur-xl rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl" onClick={(e)=>e.stopPropagation()}>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-black/10 dark:border-white/10">
              <Search className="h-4 w-4"/><input placeholder="Search… (hero, ventures, work, contact)" className="w-full bg-transparent outline-none"/><kbd className="rounded border border-black/20 dark:border-white/20 px-2 py-1 text-xs opacity-70">Esc</kbd>
            </div>
            <ul className="max-h-72 overflow-auto py-2">
              {[{label:'Hero',href:'#hero'},{label:'Ventures',href:'#ventures'},{label:'Work',href:'#projects'},{label:'Contact',href:'#contact'}].map(i=>(
                <li key={i.href}><a href={i.href} onClick={()=>setOpen(false)} className="block px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10">{i.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

function BackgroundFX(){
  const containerRef = useRef<HTMLDivElement | null>(null)
  useEffect(()=>{
    const el = containerRef.current; if(!el) return;
    for(let i=0;i<32;i++){ const s=document.createElement('span'); s.className='fx-particle'; s.style.setProperty('--x',Math.random().toFixed(3)); s.style.setProperty('--y',Math.random().toFixed(3)); s.style.setProperty('--d',(10+Math.random()*20).toFixed(2)); el.appendChild(s) }
    return ()=>{ while(el.firstChild) el.removeChild(el.firstChild) }
  },[])
  return (
    <div aria-hidden ref={containerRef} className="fx-layer pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 fx-gradient"/>
      <div className="fx-blob fx-blob-a"/><div className="fx-blob fx-blob-b"/><div className="fx-blob fx-blob-c"/>
      <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay"/>
    </div>
  )
}

interface SectionProps { id?: string; className?: string; children?: React.ReactNode }
function Section({id, className, children}: SectionProps){ return <section id={id} className={cx('section','py-16',className)}>{children}</section> }

interface ProjectCardProps { title: string; description: string; tags?: string[]; href?: string }
function ProjectCard({title, description, tags, href}: ProjectCardProps){
  const content = (
    <motion.article initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="group rounded-2xl border border-black/10 dark:border-white/10 p-6 hover:shadow-2xl hover:-translate-y-0.5 transition bg-white/70 dark:bg-black/40 backdrop-blur">
      <h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm opacity-80">{description}</p>
      {tags && tags.length ? <div className="mt-3 flex flex-wrap gap-2">{tags.map((t)=><span key={t} className="text-[11px] px-2 py-0.5 rounded-full border border-black/10 dark:border-white/10 opacity-80">{t}</span>)}</div> : null}
    </motion.article>
  )
  return href ? <a href={href} target="_blank" rel="noreferrer noopener">{content}</a> : content
}

function Footer(){ return (
  <footer className="mx-auto max-w-7xl px-4 py-10 text-sm opacity-80">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.</p>
      <p>{profile.tagline}</p>
    </div>
  </footer>
) }

export default function Page(){
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white transition-colors">
      <BackgroundFX/><Header/>
      <main>
        <Section id="hero" className="text-center pt-28 pb-24">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"/> Available for collaborations
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight">Build the future. Ship relentlessly.</h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto opacity-80">{profile.summary}</p>
            <div className="mt-10 mx-auto max-w-5xl">
              <div className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
                <Image src="/hero.jpg" alt="Showcase" fill className="object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/0 to-white/10 dark:to-white/10"/>
              </div>
              <p className="text-xs opacity-70 mt-2">Tip: place a ~1600×900 JPG at /public/hero.jpg</p>
            </div>
          </motion.div>
        </Section>
        <Section id="ventures" className="mx-auto max-w-7xl">
          <div className="mb-8 text-center"><h2 className="text-3xl font-bold tracking-tight">Ventures</h2><p className="opacity-70">Founder & operator across tech and sustainability.</p></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventures.map(v=><ProjectCard key={v.title} title={v.title} description={v.description} tags={v.tags}/>)}
          </div>
        </Section>
        <Section id="projects" className="mx-auto max-w-7xl">
          <div className="mb-8 text-center"><h2 className="text-3xl font-bold tracking-tight">Selected Work</h2><p className="opacity-70">A few things I’ve built and shipped.</p></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p=><ProjectCard key={p.title} title={p.title} description={p.description} tags={p.tags}/>)}
          </div>
        </Section>
        <Section id="contact" className="text-center pb-24">
          <h3 className="text-2xl font-semibold tracking-tight">Let’s build.</h3>
          <p className="opacity-70 mt-2">Say hello at <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a></p>
        </Section>
      </main>
      <Footer/>
      <style>{`
        .fx-gradient{background: radial-gradient(1200px 600px at 10% 10%, #ff80b5 0%, transparent 60%),
                                  radial-gradient(1000px 500px at 90% 20%, #8ec5ff 0%, transparent 60%),
                                  radial-gradient(900px 600px at 20% 90%, #ffd580 0%, transparent 60%),
                                  radial-gradient(900px 600px at 80% 85%, #c1ff8e 0%, transparent 60%);
                      filter: blur(40px); opacity:.55; }
        .dark .fx-gradient{ opacity:.45 }
        .fx-blob{ position:absolute; width:40vw; height:40vw; max-width:720px; max-height:720px; border-radius:50%; filter:blur(40px); opacity:.25; mix-blend:plus-lighter; }
        .fx-blob-a{ background:linear-gradient(120deg,#ff80b5,#ffd580); left:-10vw; top:-10vh; animation:floatA 22s ease-in-out infinite alternate; }
        .fx-blob-b{ background:linear-gradient(120deg,#8ec5ff,#b69cff); right:-8vw; top:10vh; animation:floatB 26s ease-in-out infinite alternate; }
        .fx-blob-c{ background:linear-gradient(120deg,#c1ff8e,#80ffd7); left:15vw; bottom:-12vh; animation:floatC 28s ease-in-out infinite alternate; }
        @keyframes floatA{ from{transform:translate3d(0,0,0)} to{transform:translate3d(4vw,6vh,0) rotate(8deg)} }
        @keyframes floatB{ from{transform:translate3d(0,0,0)} to{transform:translate3d(-3vw,5vh,0) rotate(-6deg)} }
        @keyframes floatC{ from{transform:translate3d(0,0,0)} to{transform:translate3d(5vw,-4vh,0) rotate(10deg)} }
        .fx-layer{ isolation:isolate }
        .fx-particle{ position:absolute; width:6px; height:6px; border-radius:9999px; background:rgba(255,255,255,.6); left:calc(var(--x) * 100%); top:calc(var(--y) * 100%); animation: drift var(--d)s linear infinite; }
        .dark .fx-particle{ background:rgba(255,255,255,.35) }
        @keyframes drift{ 0%{ transform:translate3d(0,0,0) scale(.8) } 50%{ transform:translate3d(20px,-30px,0) scale(1) } 100%{ transform:translate3d(-10px,20px,0) scale(.8) } }
        .btn-ghost{ border:1px solid currentColor; border-radius:.9rem; padding:.5rem .75rem; transition:all .2s ease }
        .btn-ghost:hover{ background:currentColor; color:var(--btn-fg,#fff) }
        .dark .btn-ghost:hover{ color:#000 }
      `}</style>
      {process.env.NODE_ENV !== 'production' && TestRunner && <TestRunner/>}
    </div>
  )
}
let TestRunner: React.ComponentType | null = null
if(process.env.NODE_ENV !== 'production'){
  interface BadgeProps { label: string; ok: boolean }
  const Badge = ({label, ok}: BadgeProps) => (<span style={{ display:'inline-block', marginRight:8, padding:'2px 6px', borderRadius:6, background: ok ? 'rgba(34,197,94,.15)' : 'rgba(239,68,68,.15)', color: ok ? '#16a34a' : '#ef4444', fontSize:11, border:`1px solid ${ok ? 'rgba(34,197,94,.4)' : 'rgba(239,68,68,.4)'}` }}>{label}</span>)
  type Check = { label: string; ok: boolean }
  TestRunner = function TestRunner(){
    const [checks,setChecks] = useState<Check[]>([])
    useEffect(()=>{
      const r: Check[] = []
      const t1 = typeof cx === 'function'; console.assert(t1,'Test 1 failed: cx should be a function'); r.push({label:'cx available', ok:t1})
      const t2 = !!document.getElementById('hero') && !!document.getElementById('projects'); console.assert(t2,'Test 2 failed: #hero and/or #projects missing'); r.push({label:'sections present', ok:t2})
      const t3 = !!document.querySelector('header'); console.assert(t3,'Test 3 failed: <header> missing'); r.push({label:'header present', ok:t3})
      const t4 = !!document.querySelector('.btn-ghost svg'); console.assert(t4,'Test 4 failed: theme toggle icon not found'); r.push({label:'theme toggle renders', ok:t4})
      const t5 = !!Array.from(document.querySelectorAll('button')).find(b=> (b.textContent||'').includes('Command')); console.assert(t5,'Test 5 failed: Command palette button not found'); r.push({label:'cmd palette button', ok:t5})
      const t6 = !!document.querySelector('main'); console.assert(t6,'Test 6 failed: <main> not present'); r.push({label:'main present', ok:t6})
      const t7 = !!document.querySelector("a[href^='mailto:']"); console.assert(t7,'Test 7 failed: mailto link missing'); r.push({label:'mailto present', ok:t7})
      const t8 = document.querySelectorAll('.group.rounded-2xl, .group.rounded-xl').length >= 3; console.assert(t8,'Test 8 failed: expected at least 3 project cards'); r.push({label:'cards render', ok:t8})
      const t9 = !!document.querySelector('.fx-gradient'); console.assert(t9,'Test 9 failed: multicolor gradient missing'); r.push({label:'gradient active', ok:t9})
      const t10 = !!document.querySelector('.fx-blob'); console.assert(t10,'Test 10 failed: blobs missing'); r.push({label:'blobs active', ok:t10})
      const t11 = document.querySelectorAll('.fx-particle').length >= 10; console.assert(t11,'Test 11 failed: particles not seeded'); r.push({label:'particles seeded', ok:t11})
      const t12 = !!document.querySelector('header .btn-ghost'); console.assert(t12,'Test 12 failed: theme toggle button missing'); r.push({label:'toggle button present', ok:t12})
      setChecks(r)
    },[])
    return (<div style={{ position:'fixed', left:10, bottom:10, zIndex:9999 }}>{checks.map(c=> <Badge key={c.label} ok={c.ok} label={c.label}/>)}</div>)
  }
}
