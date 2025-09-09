export default function ChartRadial(){
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24">
      <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="6"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(34,211,238,.9)" strokeWidth="6" strokeDasharray="276" strokeDashoffset="80" strokeLinecap="round"/>
      <text x="50" y="55" textAnchor="middle" className="fill-white text-[12px]">72%</text>
    </svg>
  )
}

