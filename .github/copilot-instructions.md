# Copilot Instructions — Noble Property Care Website

## Project Overview

Next.js 14 (App Router) marketing website for **Noble Property Care LLC**, a property maintenance company in Royal Palm Beach, FL. Deployed on Vercel. Uses pnpm, TypeScript, Tailwind CSS, and shadcn/ui.

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm lint` — run Next.js linting

## Architecture

### Server/Client Component Split

Pages are **Server Components** by default. Interactive pages use a split pattern: a server `page.tsx` exports `metadata` for SEO, then renders a `"use client"` companion component for interactivity.

```
app/contact/page.tsx          → exports Metadata, renders <ContactPageClient />
app/contact/ContactPageClient.tsx  → "use client", handles form state & validation
```

Follow this pattern for any new page that needs client-side interactivity.

### SEO is a First-Class Concern

Every page **must** export a `metadata` object (`Metadata` from `next`) with `title`, `description`, `keywords`, `alternates.canonical`, and `openGraph` fields. See `app/about/page.tsx` for a thorough example.

- **Structured data**: Use helpers from `lib/schema.ts` (`getServiceSchema`, `getFAQSchema`, `getBreadcrumbSchema`, `getLocalBusinessSchema`) and inject via `<script type="application/ld+json">` or the `<JsonLd>` component from `components/seo/json-ld.tsx`.
- **SEO constants**: Centralized in `lib/seo-constants.ts` (`SEO_CONSTANTS`). Always reference this for site URL, business name, contact info, and social handles — never hardcode duplicates.

### Form Handling & Email

Forms use **Server Actions** in `app/actions/email-actions.ts` with **Resend** (`RESEND_API_KEY` env var). The flow is: client-side validation → call server action → redirect to `/thank-you/contact/` or `/thank-you/service-request/` on success.

### Static Content — No Database

All content is static. Blog posts are defined as JSX in `lib/blog.ts` (not a CMS). The admin dashboard (`/admin/*`) uses hardcoded sample data. There is no database or authentication.

## Conventions

### Imports & Path Aliases

Use the `@/*` path alias for all imports: `@/components/ui/button`, `@/lib/utils`, `@/app/actions/email-actions`.

### UI Components

- **shadcn/ui** (Radix primitives + Tailwind) in `components/ui/`. Add new components via `npx shadcn@latest add <component>`.
- Use `cn()` from `@/lib/utils` for conditional class merging.
- Icons come from `lucide-react`.

### Styling

- Tailwind CSS with **HSL CSS variables** defined in `app/globals.css`.
- Brand palette: primary `#1a472a` (dark green), secondary `#4caf50` (medium green), light accent `#8bc34a`. Reference via `bg-primary`, `text-primary`, etc.
- Container: `container mx-auto px-4 sm:px-6 lg:px-8` (max `1400px`).
- Responsive sections: `py-16 md:py-24`.

### Images

All images are hosted on **Vercel Blob Storage** (`hebbkx1anhila5yf.public.blob.vercel-storage.com`). Use Next.js `<Image>` with `fill` + `sizes` prop. Allowed domains are configured in `next.config.mjs`.

### Adding a New Page

1. Create `app/<route>/page.tsx` as a Server Component.
2. Export `metadata` with full SEO fields (title, description, keywords, canonical, openGraph).
3. Add JSON-LD structured data using `lib/schema.ts` helpers.
4. If interactive, create a `"use client"` companion (e.g., `PageClient.tsx`) and render it from `page.tsx`.
5. Add the route to `app/sitemap.ts`.

## Key Files

| Purpose | Location |
|---|---|
| Root layout (Header/Footer, global JSON-LD) | `app/layout.tsx` |
| SEO schema generators | `lib/schema.ts` |
| SEO constants (URL, contact, socials) | `lib/seo-constants.ts` |
| Server Actions (email) | `app/actions/email-actions.ts` |
| Blog post data | `lib/blog.ts` |
| shadcn/ui primitives | `components/ui/` |
| Admin SEO dashboard | `app/admin/` |
| Tailwind config & brand colors | `tailwind.config.js` |
| CSS variables | `app/globals.css` |
