import Section from '../../components/Section'
import ServiceCard from '../../components/ServiceCard'

export const metadata = { title: 'Services — Saaed Imam' }

export default function Services(){
  const items = [
    { title: 'RFID & IoT Architecture', desc: 'Edge ingestion, reader placement, streaming pipelines.'},
    { title: 'SaaS Platforms', desc: 'Multi-tenant backends, RLS, and admin consoles.'},
    { title: 'Data Visualization', desc: 'Operational dashboards with real-time updates.'},
  ]
  return (
    <Section className="mx-auto max-w-7xl px-4">
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(i => <ServiceCard key={i.title} title={i.title} desc={i.desc}/>) }
      </div>
    </Section>
  )
}

