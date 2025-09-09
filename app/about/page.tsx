import Section from '../../components/Section'

export const metadata = { title: 'About — Saaed Imam' }

export default function About(){
  return (
    <Section className="mx-auto max-w-4xl px-4">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-4 opacity-80">Platform Architect focused on RFID-first SaaS, IoT ingestion, and lean systems that compound.</p>
    </Section>
  )
}

