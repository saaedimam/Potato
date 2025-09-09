"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Moon, Sun, Search } from 'lucide-react'

const DARK_KEY = 'prefers-dark'

export default function Navbar(){
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
    <header className="sticky top-0 z-30 border-b border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight text-xl">Saaed Imam</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/dashboards">Dashboards</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={()=>setDark(!dark)} className="btn-ghost" aria-label="Toggle dark mode">
            {dark ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
          </button>
          <button className="btn-ghost hidden md:flex items-center gap-2" aria-label="Search">
            <Search className="h-4 w-4"/> Command (/)
          </button>
        </div>
      </div>
    </header>
  )
}

