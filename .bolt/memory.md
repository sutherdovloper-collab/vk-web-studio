# Project memory

## Product intent & audience

- VK WEB STUDIO: creative web design studio portfolio site.
- Audience: small businesses seeking modern, responsive websites (beauty salons, restaurants/cafés, general business).
- Goal: showcase studio capabilities, completed projects, and service offerings; capture leads via contact form.
- Tagline: "Beautiful Websites. Smarter Businesses."

## Brand personality & voice

- Premium, modern, professional.
- Clean and elegant — not overly decorative.
- Confident and concise copy; coding/studio credibility.
- Logo identity: `</vk>`.

## Visual design & UX direction

- Dark coding-inspired aesthetic.
- Palette: black background, deep purple, lavender, subtle neon violet accents.
- Typography: Outfit (display/body) + JetBrains Mono (code/technical accents).
- Hero: large `</vk>` logo with pulsing glow, floating code snippets, soft purple glows, animated "Explore Our Work" CTA.
- Sections: Hero, About, Projects, Services, Contact — all built out, no placeholders.
- Project cards styled as mini browser windows with tags + working "Visit Website" links.
- Services as numbered cards with hover glow.
- About uses glowing strength cards (design, responsiveness, clean code, fast delivery).
- Animations: smooth scrolling, scroll-reveal, elegant hover, animated purple gradients, subtle floating code elements.
- Fully responsive mobile → desktop.
- Icons via lucide-react; `@/` path alias for imports.

## Decisions, constraints & rationale

- Stack: Vite + React + JSX + Tailwind (per template and `.bolt/prompt`).
- No extra UI/theme/icon packages beyond lucide-react unless explicitly requested.
- Contact form is functional demo: submissions persisted to project database (table created via db skill); no invented personal contact details.
- Real project URLs used as-is for LUMIÈRE Beauty Salon and KARACHI/EATS.
- Build/typecheck verified passing; visual preview not available in-environment.

## Open questions & assumptions

- Assumption: "working contact form" satisfied by DB persistence + confirmation UI (no email/backend integration added).
- Unverified: actual visual appearance/polish across breakpoints — user review pending.
- No real contact details provided; form remains demo-only until client supplies info.
- Project list may expand; current two projects are the only confirmed entries.