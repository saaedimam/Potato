import Section from '../../components/Section'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../lib/projects'

export const metadata = { title: 'Work — Saaed Imam' }

export default function Work(){
  return (
    <Section className="mx-auto max-w-7xl px-4">
      <h1 className="text-3xl font-bold mb-6">Work</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p)=> <ProjectCard key={p.title} title={p.title} description={p.description} tags={p.tags}/>) }
      </div>
    </Section>
  )
}

