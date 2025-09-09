export default function ProfileCard(){
  return (
    <aside aria-label="Profile" className="sticky top-24 hidden lg:block">
      <div className="rounded-3xl overflow-hidden border border-cyan-400/20 bg-black/60 backdrop-blur shadow-2xl w-[320px]">
        <div className="p-6">
          <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-500/20 ring-1 ring-white/10 flex items-center justify-center text-3xl">
            <span className="opacity-80">🧠</span>
          </div>
          <h3 className="text-lg font-semibold text-center tracking-wide">Saaed Imam</h3>
          <p className="text-center text-sm opacity-70">Platform Architect • Founder</p>
          <div className="mt-6 grid grid-cols-2 gap-2 text-[11px] opacity-80">
            {['RFID','IoT','Next.js','FastAPI','Supabase','Design'].map((k)=> (
              <span key={k} className="px-2 py-1 rounded-full border border-white/10 text-center">{k}</span>
            ))}
          </div>
        </div>
        <div className="px-6 pb-6 flex items-center justify-between text-xs opacity-70">
          <a className="underline underline-offset-4" href="https://github.com/saaedimam" target="_blank" rel="noreferrer noopener">GitHub</a>
          <a className="underline underline-offset-4" href="https://biddrive.vercel.app" target="_blank" rel="noreferrer noopener">Website</a>
        </div>
      </div>
    </aside>
  )
}

