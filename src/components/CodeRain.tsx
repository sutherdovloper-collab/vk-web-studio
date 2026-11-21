import { useEffect, useMemo, useState } from 'react';

interface CodeLine {
  id: number;
  top: string;
  left: string;
  width: string;
  duration: string;
  delay: string;
  content: string;
}

const SNIPPETS = [
  'const design = { beauty: true, code: "clean" };',
  'if (user.smiles) return deploy();',
  'await studio.build({ responsive: true });',
  '<VKWebStudio theme="dark" glow="violet" />',
  'function shine(business) { return transform(business); }',
  'export default elegance;',
  'sites.map(s => s.beautiful);',
  'grid-template: "hero hero" 100vh;',
  'border-radius: 9999px; /* polish */',
  'transition: all 0.3s cubic-bezier(.4,0,.2,1);',
  'const client = createClient("vk-web-studio");',
  'color: #b388ff; text-shadow: 0 0 12px #8b5cf6;',
];

export default function CodeRain() {
  const [lines, setLines] = useState<CodeLine[]>([]);

  const staticLines = useMemo<CodeLine[]>(
    () =>
      SNIPPETS.map((content, i) => ({
        id: i,
        top: `${(i * 83) % 92 + 4}%`,
        left: `${(i * 37) % 70 + 2}%`,
        width: 'auto',
        duration: `${18 + (i % 5) * 4}s`,
        delay: `${-(i * 3.7)}s`,
        content,
      })),
    []
  );

  useEffect(() => {
    setLines(staticLines);
  }, [staticLines]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {lines.map((line) => (
        <span
          key={line.id}
          className="absolute whitespace-nowrap font-mono text-[11px] md:text-xs text-neon/[0.13]"
          style={{
            top: line.top,
            left: line.left,
            animation: `marqueeUp ${line.duration} linear infinite`,
            animationDelay: line.delay,
          }}
        >
          {line.content}
        </span>
      ))}
    </div>
  );
}
