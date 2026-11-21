import { ArrowDown, Rocket, Sparkles } from 'lucide-react';
import VkLogo from '@/components/VkLogo';
import CodeRain from '@/components/CodeRain';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.22),transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-neon-dim/15 blur-[110px]"
      />
      <CodeRain />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="animate-fade-up flex justify-center" style={{ animationDelay: '0ms' }}>
          <VkLogo size="lg" className="animate-pulse-glow" />
        </div>

        <h1
          className="animate-fade-up mt-10 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
          style={{ animationDelay: '120ms' }}
        >
          WE TURN IDEAS INTO{' '}
          <span className="bg-gradient-to-r from-lavender-300 via-neon to-violet-500 bg-clip-text text-transparent">
            DIGITAL EXPERIENCES.
          </span>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-7 max-w-2xl text-base leading-relaxed text-lavender-200/70 md:text-lg"
          style={{ animationDelay: '240ms' }}
        >
          Creative websites. Powerful design. Smooth experiences. Built for
          brands that want to stand out.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: '360ms' }}
        >
          <a href="#projects" className="btn-primary">
            <Sparkles size={18} />
            Explore Projects
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-lavender-200 transition-all duration-300 hover:border-neon/50 hover:text-white"
          >
            <span className="inline-flex items-center gap-2">
              <Rocket size={16} />
              Our Services
            </span>
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-neon/60 transition-colors hover:text-neon"
      >
        <ArrowDown className="animate-float" size={24} />
      </a>
    </section>
  );
}
