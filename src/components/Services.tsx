import { Building2, Scissors, UtensilsCrossed, LayoutTemplate, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const SERVICES = [
  {
    icon: Building2,
    title: 'Business Website Design',
    text: 'Professional websites that build trust, explain what you do and turn visitors into customers.',
    code: '01',
  },
  {
    icon: Scissors,
    title: 'Beauty & Salon Websites',
    text: 'Elegant, image-focused sites for salons and studios — services, galleries and booking-ready pages.',
    code: '02',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant & Café Websites',
    text: 'Appetizing menus, atmosphere and location presented beautifully so guests walk through your door.',
    code: '03',
  },
  {
    icon: LayoutTemplate,
    title: 'Ready-Made Website Templates',
    text: 'Polished, quick-to-launch templates for businesses that need a beautiful site without the wait.',
    code: '04',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-neon/30 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="section-tag">What we do</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-xl text-lavender-200/70">
            Focused offerings, refined through every project we ship.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <div className="glow-card group relative h-full overflow-hidden p-7">
                <span className="pointer-events-none absolute right-5 top-4 font-mono text-4xl font-bold text-white/[0.05] transition-colors duration-500 group-hover:text-neon/15">
                  {service.code}
                </span>
                <div className="inline-flex rounded-xl border border-neon/25 bg-neon/10 p-3 text-neon transition-all duration-500 group-hover:shadow-[0_0_20px_-4px_rgba(179,136,255,0.7)]">
                  <service.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-lavender-200/65">
                  {service.text}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-neon/80 transition-all duration-300 hover:gap-3 hover:text-neon"
                >
                  Start a Project
                  <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
