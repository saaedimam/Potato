"use client"
import { useEffect, useRef } from 'react'

export default function ParticleBG(){
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(function(){
    const el = ref.current
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
    <div aria-hidden ref={ref} className="fx-layer pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 fx-gradient"/>
      <div className="fx-blob fx-blob-a"/>
      <div className="fx-blob fx-blob-b"/>
      <div className="fx-blob fx-blob-c"/>
    </div>
  )
}

