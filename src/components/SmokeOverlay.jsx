/**
 * Realistic looping smoke plume overlay. Fixed to viewport, foreground.
 * Desktop only; pointer-events-none so it never blocks clicks.
 */
export default function SmokeOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 20% 20%, rgba(255,255,255,0.4) 0%, transparent 50%),
            radial-gradient(ellipse 100% 60% at 80% 30%, rgba(255,255,255,0.3) 0%, transparent 45%),
            radial-gradient(ellipse 80% 100% at 50% 60%, rgba(255,255,255,0.25) 0%, transparent 55%)
          `,
        }}
      />
      <div
        className="smoke-plume-layer-1 absolute inset-0 opacity-[0.06]"
        style={{
          background: 'radial-gradient(ellipse 90% 50% at 30% 40%, rgba(255,255,255,0.5) 0%, transparent 60%)',
          backgroundSize: '150% 120%',
        }}
      />
      <div
        className="smoke-plume-layer-2 absolute inset-0 opacity-[0.05]"
        style={{
          background: 'radial-gradient(ellipse 70% 80% at 70% 50%, rgba(255,255,255,0.4) 0%, transparent 55%)',
          backgroundSize: '130% 140%',
        }}
      />
    </div>
  )
}
