import Section from '../../../components/Section'
import ChartLine from '../../../components/ChartLine'
import ChartArea from '../../../components/ChartArea'
import ChartRadial from '../../../components/ChartRadial'
import { dashboards } from '../../../lib/dashboards'

type Props = { params: { slug: string } }

export async function generateStaticParams(){
  return dashboards.map(d => ({ slug: d.slug }))
}

export default function DashboardDetail({ params }: Props){
  const meta = dashboards.find(d => d.slug === params.slug)
  return (
    <Section className="mx-auto max-w-7xl px-4">
      <h1 className="text-3xl font-bold mb-2">{meta?.title || params.slug}</h1>
      <p className="opacity-70 mb-6">{meta?.desc || 'Operational dashboard'}</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 p-6 bg-black/40 backdrop-blur neon-card">
          <h3 className="font-semibold mb-3">KPI Trend</h3>
          <ChartLine />
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-black/40 backdrop-blur neon-card">
          <h3 className="font-semibold mb-3">Throughput</h3>
          <ChartArea />
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-black/40 backdrop-blur neon-card">
          <h3 className="font-semibold mb-3">Utilization</h3>
          <ChartRadial />
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-black/40 backdrop-blur neon-card">
          <h3 className="font-semibold mb-3">Notes</h3>
          <p className="opacity-70 text-sm">Placeholder layout to resemble the reference tiles.</p>
        </div>
      </div>
    </Section>
  )
}

