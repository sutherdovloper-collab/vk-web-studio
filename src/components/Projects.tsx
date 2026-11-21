import { useState } from 'react';
import {
  ExternalLink,
  Sparkles,
  UtensilsCrossed,
  Palette,
  LayoutTemplate,
  Globe,
  Coffee,
  type LucideIcon,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { cn } from '@/lib/utils';

interface Project {
  number: string;
  name: string;
  category: string;
  filter: string;
  description: string;
  url: string;
  icon: LucideIcon;
  accent: string;
}

const FILTERS = [
  'All',
  'Beauty & Salon',
  'Food & Travel',
  'Beauty & Makeup',
  'Bakery',
  'Gym & Fitness',
];

const projects: Project[] = [
  {
    number: '01',
    name: 'LUMIÈRE Beauty Salon',
    category: 'Beauty & Salon Website',
    filter: 'Beauty & Salon',
    description:
      'An elegant beauty salon website with a luxurious visual style and booking experience.',
    url: 'https://lumi-re-beauty-salon-iohp.bolt.host',
    icon: Sparkles,
    accent: 'from-rose-400/25 via-fuchsia-500/15 to-violet-600/25',
  },
  {
    number: '02',
    name: 'KARACHI / EATS',
    category: 'Food & Travel Guide',
    filter: 'Food & Travel',
    description:
      "A modern food discovery website celebrating Karachi's food culture.",
    url: 'https://tuatara-gzlchx.my.canva.site/dahbdggrr7g',
    icon: UtensilsCrossed,
    accent: 'from-amber-400/25 via-orange-500/15 to-rose-600/25',
  },
  {
    number: '03',
    name: 'DREAMYVERSE',
    category: 'Website Project',
    filter: 'Website Project',
    description:
      'A creative website project designed to deliver a memorable digital experience.',
    url: 'https://jovial-semolina-0178bb.netlify.app/',
    icon: Palette,
    accent: 'from-violet-400/25 via-neon-dim/20 to-indigo-600/25',
  },
  {
    number: '04',
    name: 'LUXE CAFÉ',
    category: 'Website Project',
    filter: 'Website Project',
    description:
      'A stylish café website crafted to give the brand a polished online presence.',
    url: 'https://lovely-tapioca-e306a8.netlify.app/',
    icon: Coffee,
    accent: 'from-amber-300/20 via-rose-400/15 to-violet-600/25',
  },
  {
    number: '05',
    name: 'GOLDEN CRUMB BAKERY',
    category: 'Bakery Website',
    filter: 'Bakery',
    description:
      'A custom website built with a focus on clean design and smooth usability.',
    url: 'https://verdant-zuccutto-12e1d9.netlify.app/',
    icon: Globe,
    accent: 'from-emerald-400/15 via-teal-500/10 to-violet-600/25',
  },
  {
    number: '06',
    name: 'IRONCORE FITNESS',
    category: 'Gym & Fitness Website',
    filter: 'Gym & Fitness',
    description:
      'A modern web design project shaped around clarity, style and responsiveness.',
    url: 'https://tubular-hummingbird-7e7031.netlify.app/',
    icon: LayoutTemplate,
    accent: 'from-sky-400/15 via-indigo-500/15 to-violet-600/25',
  },
  {
    number: '07',
    name: 'GLOW & BLUSH',
    category: 'Beauty & Makeup Store',
    filter: 'Beauty & Makeup',
    description:
      'A creative website project designed to deliver a memorable digital experience.',
    url: 'https://marvelous-elf-2dde6f.netlify.app/',
    icon: Palette,
    accent: 'from-violet-400/25 via-purple-500/20 to-fuchsia-600/20',
  },
];

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glow-card group flex h-full flex-col overflow-hidden"
    >
      <div
        className={cn(
          'relative h-40 bg-gradient-to-br',
          project.accent
        )}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative flex h-full flex-col justify-between p-4">
          <div className="flex items-center justify-between">
            <span className="rounded-md border border-white/10 bg-ink-950/60 px-2.5 py-1 font-mono text-[10px] text-lavender-200/70 backdrop-blur-sm">
              vk-studio / project-{project.number}
            </span>
            <span className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-rose-300/50" />
              <span className="h-2 w-2 rounded-full bg-amber-300/50" />
              <span className="h-2 w-2 rounded-full bg-emerald-300/50" />
            </span>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-ink-950/60 text-neon backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
              <Icon size={22} />
            </div>
            <span className="font-mono text-3xl font-bold text-white/[0.08] transition-colors duration-500 group-hover:text-neon/25">
              {project.number}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[10px] uppercase tracking-widest text-neon/80">
          {project.category}
        </p>
        <h3 className="mt-1.5 text-base font-semibold text-white">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-lavender-200/65">
          {project.description}
        </p>
        <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-neon/30 bg-neon/10 px-4 py-2 text-xs font-medium text-neon transition-all duration-300 group-hover:bg-neon/20 group-hover:shadow-[0_0_16px_-2px_rgba(179,136,255,0.6)]">
          Visit Live Website
          <ExternalLink size={13} />
        </span>
      </div>
    </a>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.filter === activeFilter);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-neon-dim/10 blur-[130px]"
      />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="section-tag">Selected work</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-xl text-lavender-200/70">
            Real websites, live on the web — each designed and built to make
            its brand stand out.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300',
                  activeFilter === filter
                    ? 'border-neon/50 bg-neon/15 text-neon shadow-[0_0_16px_-4px_rgba(179,136,255,0.6)]'
                    : 'border-white/10 bg-white/[0.03] text-lavender-200/60 hover:border-neon/30 hover:text-lavender-100'
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, i) => (
            <Reveal key={project.number} delay={(i % 3) * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
