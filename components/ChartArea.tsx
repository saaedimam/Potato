export default function ChartArea(){
  return (
    <svg viewBox="0 0 100 40" className="w-full h-24">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(34,211,238,0.6)"/>
          <stop offset="100%" stopColor="rgba(34,211,238,0.05)"/>
        </linearGradient>
      </defs>
      <path d="M0 30 L10 26 L20 28 L30 20 L40 24 L50 16 L60 18 L70 10 L80 14 L90 8 L100 12 L100 40 L0 40 Z" fill="url(#grad)" stroke="rgba(34,211,238,.7)" strokeWidth="1"/>
    </svg>
  )
}

