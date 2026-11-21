import VkLogo from '@/components/VkLogo';

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent"
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <VkLogo size="sm" />
          <p className="font-mono text-xs text-lavender-200/50">
            Beautiful Websites. Smarter Businesses.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-lavender-200/60 transition-colors duration-300 hover:text-neon"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="font-mono text-xs text-lavender-200/40">
          © 2026 VK Web Studio
        </p>
      </div>
    </footer>
  );
}
