export default function ServiceCard({ title, desc }: { title: string; desc: string }){
  return (
    <article className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-6 neon-card">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm opacity-80">{desc}</p>
    </article>
  )
}

