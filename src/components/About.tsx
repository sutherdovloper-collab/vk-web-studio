import { Terminal, Quote } from 'lucide-react';
import Reveal from '@/components/Reveal';

const STATS = [
  { label: 'Clean code', snippet: 'const quality = "always";' },
  { label: 'Responsive', snippet: 'breakpoints: ["mobile", "4k"]' },
  { label: 'Creative', snippet: 'idea && design && code;' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]"
      />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="section-tag">About the studio</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            A LITTLE ABOUT US
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal delay={100}>
            <div className="space-y-5 text-lavender-200/75 leading-relaxed">
              <Quote className="text-neon/50" size={28} />
              <p>
                VK Web Studio is a creative digital studio focused on building
                beautiful, modern and responsive websites. We combine
                thoughtful design, technology and creativity to turn ideas into
                impressive online experiences.
              </p>
              <p className="font-mono text-sm text-neon/80">
                Beautiful Websites. Smarter Businesses.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="glow-card overflow-hidden">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
                <span className="ml-3 inline-flex items-center gap-1.5 font-mono text-[11px] text-lavender-200/50">
                  <Terminal size={12} />
                  vk-web-studio.ts
                </span>
              </div>
              <div className="space-y-2 p-5 font-mono text-xs leading-relaxed md:text-[13px]">
                <p>
                  <span className="text-violet-400">const</span>{' '}
                  <span className="text-neon">studio</span>{' '}
                  <span className="text-lavender-200/60">=</span>{' '}
                  <span className="text-white">{'{'}</span>
                </p>
                <p className="pl-5">
                  <span className="text-lavender-300">name:</span>{' '}
                  <span className="text-emerald-300">"VK Web Studio"</span>
                  <span className="text-lavender-200/60">,</span>
                </p>
                <p className="pl-5">
                  <span className="text-lavender-300">craft:</span>{' '}
                  <span className="text-emerald-300">
                    ["design", "code", "creativity"]
                  </span>
                  <span className="text-lavender-200/60">,</span>
                </p>
                <p className="pl-5">
                  <span className="text-lavender-300">output:</span>{' '}
                  <span className="text-emerald-300">
                    "impressive online experiences"
                  </span>
                  <span className="text-lavender-200/60">,</span>
                </p>
                <p className="pl-5">
                  <span className="text-lavender-300">responsive:</span>{' '}
                  <span className="text-amber-300">true</span>
                  <span className="text-lavender-200/60">,</span>
                </p>
                <p className="text-white">{'};'}</p>
                <p className="pt-2 text-lavender-200/50">
                  <span className="text-violet-400">await</span>{' '}
                  studio.turnIdeasIntoExperiences();
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="glow-card px-5 py-4 text-center">
                <p className="text-sm font-semibold text-white">{stat.label}</p>
                <p className="mt-1.5 font-mono text-[11px] text-neon/70">
                  {stat.snippet}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
