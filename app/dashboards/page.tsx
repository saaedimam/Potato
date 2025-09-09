import Link from 'next/link'
import Section from '../../components/Section'
import { dashboards } from '../../lib/dashboards'

export const metadata = { title: 'Dashboards — Saaed Imam' }

export default function Dashboards(){
  return (
    <Section className="mx-auto max-w-7xl px-4">
      <h1 className="text-3xl font-bold mb-6">Dashboards</h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboards.map(d => (
          <li key={d.slug} className="rounded-2xl border border-white/10 p-6 bg-black/40 backdrop-blur neon-card">
            <h3 className="font-semibold">{d.title}</h3>
            <p className="opacity-70 text-sm mt-2">{d.desc}</p>
            <Link className="inline-block mt-4 underline underline-offset-4" href={`/dashboards/${d.slug}`}>Open</Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}

