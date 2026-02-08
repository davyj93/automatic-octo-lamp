/**
 * High-quality video smoke overlay for the Hero section.
 * Uses mix-blend-mode to remove black background and blend naturally.
 */
export default function SmokeOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
        src="https://video.wixstatic.com/video/11062b_f6c3bf2694564392aeb37e49ae1db581/1080p/mp4/file.mp4"
        aria-hidden="true"
      />
    </div>
  )
}
