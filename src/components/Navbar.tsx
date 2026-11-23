
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import VkLogo from '@/components/VkLogo';
import { cn } from '@/lib/utils';

const LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Maintenance', href: '#maintenance' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-white/10 bg-ink-950/85 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <VkLogo size="sm" />
          <span className="hidden text-sm tracking-wide text-lavender-200/80 sm:block">
            VK WEB STUDIO
          </span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-lavender-200/70 transition-colors duration-300 hover:text-neon"
            >
              {link.label}
            </a>
          ))}

          <a href="#contact" className="btn-primary !px-5 !py-2.5 text-sm">
            Let's Talk
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2 text-lavender-200 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-white/10 bg-ink-950/95 px-6 py-4 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-lavender-200/80 transition-colors hover:text-neon"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary justify-center text-sm"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
