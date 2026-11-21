import VkLogo from '@/components/VkLogo';

export default function Preloader() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-ink-950"
      style={{
        animation: 'preloaderOut 0.6s ease 1.4s both',
        pointerEvents: 'none',
      }}
    >
      <VkLogo size="lg" className="animate-pulse-glow" />
      <div className="h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-neon"
          style={{ animation: 'preloaderBar 1.4s ease-in-out both' }}
        />
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-lavender-200/40">
        Compiling experience…
      </p>
    </div>
  );
}
