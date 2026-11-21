import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react';
import Reveal from '@/components/Reveal';

const STEPS = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discover the Idea',
    text: 'We listen to your goals, audience and style to shape a clear creative direction.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design the Experience',
    text: 'Layouts, colors and interactions come together into a look your brand owns.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build the Website',
    text: 'Clean, modern code turns the design into a fast, responsive website.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch the Project',
    text: 'We ship your site live, polished and ready to welcome visitors.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-neon/30 to-transparent"
      />
      <div
        aria-hidden
        className="absolute left-1/4 bottom-1/4 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]"
      />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="section-tag">How we work</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 max-w-xl text-lavender-200/70">
            Four steps, one goal — a website that makes your business shine.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-6 top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-neon/50 via-violet-500/30 to-transparent md:left-0 md:right-0 md:top-7 md:h-px md:w-full md:bg-gradient-to-r"
          />
          <div className="grid gap-10 md:grid-cols-4 md:gap-5">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 130}>
                <div className="relative pl-16 md:pl-0 md:pt-16">
                  <div className="absolute left-0 top-0 md:top-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neon/40 bg-ink-800 text-neon shadow-[0_0_24px_-6px_rgba(179,136,255,0.7)]">
                      <step.icon size={20} />
                    </div>
                  </div>
                  <p className="font-mono text-xs tracking-widest text-neon/60">
                    {step.number}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-lavender-200/65">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
