"use client"
import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, tags, href }: { title: string; description: string; tags?: string[]; href?: string }){
  const content = (
    <motion.article initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="group rounded-2xl border border-black/10 dark:border-white/10 p-6 hover:shadow-2xl hover:-translate-y-0.5 transition bg-white/70 dark:bg-black/40 backdrop-blur neon-card">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm opacity-80">{description}</p>
      {tags && tags.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t)=> <span key={t} className="text-[11px] px-2 py-0.5 rounded-full border border-black/10 dark:border-white/10 opacity-80">{t}</span>)}
        </div>
      ) : null}
    </motion.article>
  )
  return href ? <a href={href} target="_blank" rel="noreferrer noopener">{content}</a> : content
}
