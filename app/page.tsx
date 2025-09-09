import Hero from '../components/Hero'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../lib/projects'

export default function Page(){
  return (
    <div>
      <Hero />
      <Section id="projects" className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>
          <p className="opacity-70">A few things I&apos;ve built and shipped.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p)=> <ProjectCard key={p.title} title={p.title} description={p.description} tags={p.tags}/>) }
        </div>
      </Section>
    </div>
  )
}
