/**
 * Stylized chimney with gentle CSS-animated smoke for the hero section.
 */
export default function ChimneyHeroSVG({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="chimneyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="smokeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Chimney stack – brick-style */}
      <g filter="url(#glow)">
        <rect x="140" y="80" width="120" height="200" rx="4" fill="url(#chimneyGrad)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <line x1="140" y1="130" x2="260" y2="130" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <line x1="140" y1="180" x2="260" y2="180" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <line x1="140" y1="230" x2="260" y2="230" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      </g>
      {/* Flue opening */}
      <rect x="165" y="60" width="70" height="28" rx="2" fill="#0f172a" stroke="rgba(245,158,11,0.3)" strokeWidth="1" />
      {/* Smoke puffs – animated via CSS classes */}
      <ellipse className="animate-smoke" cx="200" cy="35" rx="22" ry="12" fill="url(#smokeGrad)" />
      <ellipse className="animate-smoke-delay-1" cx="200" cy="20" rx="28" ry="14" fill="url(#smokeGrad)" />
      <ellipse className="animate-smoke-delay-2" cx="200" cy="5" rx="20" ry="10" fill="url(#smokeGrad)" />
      {/* Roof / hearth hint */}
      <path d="M100 280 L200 240 L300 280 L300 320 L100 320 Z" fill="rgba(15,23,42,0.9)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <rect x="180" y="260" width="40" height="30" rx="2" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.25)" strokeWidth="1" />
    </svg>
  )
}
