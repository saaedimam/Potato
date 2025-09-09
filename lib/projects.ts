export type Project = {
  title: string
  description: string
  tags?: string[]
  year?: string
}

export const projects: Project[] = [
  { title: 'StitchOS Console', description: 'Next.js 14 + Tailwind + shadcn/ui console with multi-tenant auth and RLS policies.', tags: ['Next.js','RLS','shadcn'], year: '2025' },
  { title: 'RFID Line Instrumentation', description: "Cheapest-path reader placement + Little's Law analytics.", tags: ['RFID','IE'], year: '2025' },
  { title: 'TextileTrack Admin', description: 'Realtime scan display with WebSockets, CSV/PDF export, date ranges & checkpoint filters.', tags: ['React','WS'], year: '2025' },
  { title: 'KTL Corporate Site', description: 'WCAG-compliant, SEO-optimized Next.js website with sustainability reporting pages.', tags: ['SEO','A11y'], year: '2025' },
]

