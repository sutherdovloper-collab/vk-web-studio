import { cn } from '@/lib/utils';

interface VkLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeStyles = {
  sm: 'text-sm px-2.5 py-1.5',
  md: 'text-base px-3.5 py-2',
  lg: 'text-2xl md:text-3xl px-5 py-3',
};

export default function VkLogo({ size = 'md', className }: VkLogoProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-lg border border-neon/40 bg-ink-800/80 font-mono font-semibold text-neon shadow-[0_0_20px_-4px_rgba(139,92,246,0.7)]',
        sizeStyles[size],
        className
      )}
    >
      &lt;/vk&gt;
    </span>
  );
}
