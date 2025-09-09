export default function Footer(){
  return (
    <footer className="mx-auto max-w-7xl px-4 py-10 text-sm opacity-80">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Saaed Imam. Built with Next.js & Tailwind.</p>
        <p>Weaving intelligence into every thread.</p>
      </div>
    </footer>
  )
}

