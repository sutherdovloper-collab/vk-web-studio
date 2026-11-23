
import {
  Building2,
  Scissors,
  UtensilsCrossed,
  LayoutTemplate,
  ArrowRight,
  Rocket,
  Crown,
  Check,
} from 'lucide-react';

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

const PRICING = [
  {
    name: 'Starter',
    price: 'Rs. 10,000',
    icon: Rocket,
    description: 'Perfect for small businesses.',
    features: [
      'One-page website',
      'Home, About, Services & Contact',
      'Mobile responsive design',
      'Basic animations',
    ],
  },
  {
    name: 'Professional',
    price: 'Rs. 20,000',
    icon: Building2,
    description: 'For growing businesses.',
    features: [
      '4–5 website pages',
      'Premium custom design',
      'Smooth animations',
      'Gallery & contact form',
      'Basic SEO setup',
    ],
  },
  {
    name: 'Premium',
    price: 'Rs. 35,000+',
    icon: Crown,
    description: 'A complete premium experience.',
    features: [
      '6–10 website pages',
      'Luxury custom design',
      'Advanced animations',
      'Search & filtering',
      'E-commerce features if required',
      'SEO & social media integration',
    ],
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

        {/* SERVICES HEADING */}
        <Reveal>
          <p className="section-tag">What we do</p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Our Services
          </h2>

          <p className="mt-4 max-w-xl text-lavender-200/70">
            Focused offerings, refined through every project we ship.
          </p>
        </Reveal>

        {/* SERVICES CARDS */}
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

        {/* PRICING HEADING */}
        <Reveal>
          <div className="mt-24">
            <p className="section-tag">Simple & Transparent</p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Choose Your Plan
            </h2>

            <p className="mt-4 max-w-xl text-lavender-200/70">
              Quality websites designed for every stage of your business.
            </p>
          </div>
        </Reveal>

        {/* PRICING CARDS */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRICING.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <div className="glow-card group h-full p-7 transition-all duration-500 hover:-translate-y-2">

                <div className="inline-flex rounded-xl border border-neon/25 bg-neon/10 p-3 text-neon">
                  <plan.icon size={24} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {plan.name}
                </h3>

                <p className="mt-3 text-2xl font-bold text-neon">
                  {plan.price}
                </p>

                <p className="mt-3 text-sm text-lavender-200/70">
                  {plan.description}
                </p>

                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm text-lavender-200/80"
                    >
                      <Check
                        size={17}
                        className="mt-0.5 shrink-0 text-neon"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-neon transition-all duration-300 hover:gap-3"
                >
                  Choose This Plan
                  <ArrowRight size={16} />
                </a>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
