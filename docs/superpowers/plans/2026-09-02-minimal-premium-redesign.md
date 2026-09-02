# Blumebyte Minimal Premium Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the approved minimal premium Blumebyte redesign to the existing TanStack React Start website, using the supplied brand assets, repairing Insights, adding FAQs and YouTube content, and making enquiry CTAs open an email to `blumebyte@gmail.com` with subject `Enquiry`.

**Architecture:** Preserve the current TanStack React Start + TypeScript + Tailwind codebase. Centralize brand/contact/media data, add a few focused shared components for motion/media/FAQ behavior, keep routes file-based, and use lightweight CSS/IntersectionObserver effects instead of introducing a large animation stack unless necessary. Heavy media remains lazy-loaded and the site continues to respect reduced-motion preferences.

**Tech Stack:** TanStack React Start, React 19, TypeScript, Tailwind CSS 4, shadcn/Radix UI, lucide-react, Bun, Vite, Vercel.

**Spec:** `docs/superpowers/specs/2026-09-02-minimal-premium-redesign-design.md`

## Global Constraints

- Brand colors are exactly `#000000`, `#F1F1F1`, `#FFFFFF`, `#7C5A1A`.
- Gold is an accent, not the dominant surface color.
- Use the supplied standalone B/leaf mark as favicon and the supplied horizontal logo in the header.
- Desktop nav: Home, About, Services, Portfolio dropdown, Insights, FAQs, Contact, Start a Project.
- Portfolio dropdown: Overview, Blumebyte HR, ProSME, Ghost Tears, Space Bob.
- Contact email: `blumebyte@gmail.com`; enquiry subject: `Enquiry`; WhatsApp: `+233256122555`.
- YouTube source: `https://www.youtube.com/@BLUMEBYTE/videos`.
- Preserve Privacy Policy, Terms & Conditions, and cookie consent with Essential only / Accept all.
- Preserve TanStack React Start architecture; do not migrate frameworks.
- All routes must build on Vercel and reduced-motion users must retain full access to content.

---

### Task 1: Brand assets, tokens, and site configuration

**Files:**
- Modify: `src/config/site.ts`
- Modify: `src/styles.css`
- Modify: `src/components/site/Logo.tsx`
- Modify: `src/routes/__root.tsx`
- Create: `public/blumebyte-mark.png`
- Create: `public/blumebyte-logo.png`
- Modify: `package.json`

**Interfaces:**
- Produces: `siteConfig.youtube`, `siteConfig.email`, `siteConfig.phone`, `siteConfig.whatsappNumber`, brand asset paths `/blumebyte-mark.png` and `/blumebyte-logo.png`.
- Produces: `reveal`, `media-mask`, `section-shell`, and reduced-motion CSS utilities used by later tasks.

- [ ] **Step 1: Add a Bun test script and configuration assertions**

Create `src/config/site.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import { siteConfig } from "./site";

describe("siteConfig", () => {
  test("uses Blumebyte public contact channels", () => {
    expect(siteConfig.email).toBe("blumebyte@gmail.com");
    expect(siteConfig.whatsappNumber).toBe("233256122555");
    expect(siteConfig.phone).toBe("+233 25 612 2555");
  });

  test("links to the official YouTube channel", () => {
    expect(siteConfig.youtube).toBe("https://www.youtube.com/@BLUMEBYTE/videos");
  });
});
```

Add to `package.json` scripts:

```json
"test": "bun test"
```

- [ ] **Step 2: Run the test to verify it fails before config changes**

Run: `bun test src/config/site.test.ts`
Expected: FAIL because the current config does not yet contain all approved values.

- [ ] **Step 3: Update site configuration and global tokens**

Set:

```ts
email: "blumebyte@gmail.com",
phone: "+233 25 612 2555",
whatsappNumber: "233256122555",
youtube: "https://www.youtube.com/@BLUMEBYTE/videos",
```

Replace remaining purple/indigo design tokens in `src/styles.css` with the four approved palette colors and neutral derivatives. Add reusable low-cost reveal/mask utilities based on opacity/transform/clip-path and a `@media (prefers-reduced-motion: reduce)` block that disables transitions, parallax transforms, and smooth scrolling.

- [ ] **Step 4: Install supplied brand images as public assets and wire them**

Use the first supplied image as `/public/blumebyte-mark.png` and the second supplied horizontal logo as `/public/blumebyte-logo.png`. Update `Logo.tsx` to render the horizontal image with intrinsic dimensions and `alt="Blumebyte"`. Update `__root.tsx` favicon link to `/blumebyte-mark.png`.

- [ ] **Step 5: Run tests and build**

Run: `bun test src/config/site.test.ts`
Expected: PASS.

Run: `bun run build`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add package.json public/blumebyte-mark.png public/blumebyte-logo.png src/config/site.ts src/config/site.test.ts src/styles.css src/components/site/Logo.tsx src/routes/__root.tsx
git commit -m "feat: apply Blumebyte brand system"
```

### Task 2: Premium navigation, footer, and shared reveal behavior

**Files:**
- Modify: `src/components/site/Header.tsx`
- Modify: `src/components/site/Footer.tsx`
- Create: `src/components/site/Reveal.tsx`
- Modify: `src/routes/__root.tsx`

**Interfaces:**
- Produces: `<Reveal>` wrapper with props `{ children, className?, delay? }`.
- Consumes: brand logo and contact/social values from Task 1.

- [ ] **Step 1: Create the Reveal component with progressive enhancement**

Implement an IntersectionObserver-based component that adds `data-visible="true"` once an element enters the viewport. If `prefers-reduced-motion` is enabled, content is visible immediately.

- [ ] **Step 2: Rebuild desktop header around the approved navigation**

Use the horizontal logo at top-left. Implement an accessible Portfolio dropdown containing Overview, Blumebyte HR, ProSME, Ghost Tears, Space Bob. Keep the header transparent/minimal at top and give it a compact white/black bordered treatment after scroll. Keep `Start a Project` as the only strong gold CTA.

- [ ] **Step 3: Rebuild mobile navigation**

Use the existing Sheet component. Present Portfolio children as explicit nested links rather than hover-dependent UI. Ensure Escape closes the menu and focus remains keyboard accessible through Radix behavior.

- [ ] **Step 4: Simplify the footer**

Use a mostly-black footer with the Blumebyte logo, concise company statement, Company / Services / Portfolio / Legal link columns, YouTube/social links, email, phone, and WhatsApp. Include `/faq`, `/privacy`, and `/terms` links.

- [ ] **Step 5: Verify**

Run: `bun run build`
Expected: PASS and route generation succeeds.

Run: `bun run lint`
Expected: no new errors from Header/Footer/Reveal.

- [ ] **Step 6: Commit**

```bash
git add src/components/site/Header.tsx src/components/site/Footer.tsx src/components/site/Reveal.tsx src/routes/__root.tsx
git commit -m "feat: redesign site navigation and footer"
```

### Task 3: Minimal cinematic homepage, services, videos, projects, FAQ teaser

**Files:**
- Modify: `src/routes/index.tsx`
- Create: `src/components/site/YouTubeShowcase.tsx`
- Create: `src/components/site/FaqList.tsx`
- Create: `src/data/faqs.ts`
- Modify: `src/components/site/ServiceCard.tsx` or replace its homepage use with an editorial service list
- Modify: `src/components/site/ProjectCard.tsx`

**Interfaces:**
- Produces: `faqs: Array<{ question: string; answer: string }>`.
- Produces: `<FaqList items={faqs} limit?: number />`.
- Produces: `<YouTubeShowcase videos={...} />` that initially renders thumbnails/links and only creates iframe content after user interaction.

- [ ] **Step 1: Add FAQ data test**

Create `src/data/faqs.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import { faqs } from "./faqs";

describe("faqs", () => {
  test("contains the approved core questions", () => {
    expect(faqs.length).toBeGreaterThanOrEqual(6);
    expect(faqs.some((item) => item.question.includes("outside Ghana"))).toBe(true);
    expect(faqs.some((item) => item.question.includes("project quote"))).toBe(true);
  });
});
```

- [ ] **Step 2: Run FAQ test and confirm red state**

Run: `bun test src/data/faqs.test.ts`
Expected: FAIL because `src/data/faqs.ts` does not exist yet.

- [ ] **Step 3: Add FAQ data and reusable accordion**

Populate the six approved topics from the spec with concise Blumebyte-specific answers. Render using the existing accessible Radix Accordion wrapper.

- [ ] **Step 4: Implement lazy YouTube showcase**

Create a typed local list containing selected video IDs/titles discovered from the official Blumebyte channel during implementation. Each tile renders `https://i.ytimg.com/vi/<id>/hqdefault.jpg` with a play button. On click, replace only that tile with a privacy-enhanced `https://www.youtube-nocookie.com/embed/<id>?autoplay=1` iframe. Include a `View all videos` external link to the channel.

- [ ] **Step 5: Redesign homepage hero and storytelling**

Replace the existing SaaS hero/card-wall composition with:
- black cinematic hero,
- oversized white editorial heading with a restrained gold phrase,
- concise supporting copy,
- primary Portfolio/Start Project CTA and secondary Services CTA,
- one premium product/media composition,
- subtle Reveal and media-mask effects,
- capability statement,
- editorial services list,
- YouTube showcase,
- selected products/projects,
- restrained capabilities/about block,
- FAQ teaser,
- final CTA.

Do not use fabricated statistics or placeholder testimonials.

- [ ] **Step 6: Verify tests and production build**

Run: `bun test src/data/faqs.test.ts`
Expected: PASS.

Run: `bun run build`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add src/routes/index.tsx src/components/site/YouTubeShowcase.tsx src/components/site/FaqList.tsx src/data/faqs.ts src/data/faqs.test.ts src/components/site/ServiceCard.tsx src/components/site/ProjectCard.tsx
git commit -m "feat: redesign Blumebyte homepage"
```

### Task 4: Portfolio and product storytelling

**Files:**
- Modify: `src/routes/portfolio.tsx`
- Modify: `src/routes/blumebyte-hr.tsx`
- Modify: `src/routes/projects.prosme.tsx`
- Modify: `src/routes/projects.ghost-tears.tsx`
- Modify: `src/routes/projects.space-bob.tsx`
- Modify: `src/data/projects.ts`

**Interfaces:**
- Consumes: Reveal component and palette from earlier tasks.
- Preserves external product URLs exactly as recorded in the spec.

- [ ] **Step 1: Add exact-link data assertions**

Create `src/data/projects.test.ts` and assert that ProSME, Ghost Tears and Space Bob retain the exact supplied external URLs, including the Ghost Tears testing URL without package-name correction.

- [ ] **Step 2: Run the link test and record baseline**

Run: `bun test src/data/projects.test.ts`
Expected: PASS if the current project data already preserves the URLs, otherwise FAIL and identify the mismatch before editing.

- [ ] **Step 3: Redesign Portfolio overview**

Replace generic filter-card presentation with a large visual project index. Alternate project media/text alignment, add project category/year labels where factual data exists, and use strong View Project / Visit Platform / Google Play actions.

- [ ] **Step 4: Upgrade individual product pages**

Give each route a distinctive hero, concise overview, features/capabilities, media area, and accurate outbound CTAs. Do not invent user counts, awards, revenue, or customer claims.

- [ ] **Step 5: Verify**

Run: `bun test src/data/projects.test.ts`
Expected: PASS.

Run: `bun run build`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/routes/portfolio.tsx src/routes/blumebyte-hr.tsx src/routes/projects.prosme.tsx src/routes/projects.ghost-tears.tsx src/routes/projects.space-bob.tsx src/data/projects.ts src/data/projects.test.ts
git commit -m "feat: upgrade Blumebyte portfolio storytelling"
```

### Task 5: Repair Insights and add editorial blog routes

**Files:**
- Create: `src/routes/blog.tsx`
- Create: `src/routes/blog.$slug.tsx`
- Modify: `src/data/posts.ts`
- Modify: `src/components/site/PostCard.tsx`

**Interfaces:**
- Consumes existing `posts` static data.
- Produces `/blog` listing and `/blog/$slug` article routes.

- [ ] **Step 1: Add post-data assertions**

Create `src/data/posts.test.ts`:

```ts
import { describe, expect, test } from "bun:test";
import { posts } from "./posts";

describe("posts", () => {
  test("includes the requested AI coding tools article", () => {
    expect(posts.some((post) => post.title.toLowerCase().includes("free ai coding tools"))).toBe(true);
  });

  test("has unique non-empty slugs", () => {
    const slugs = posts.map((post) => post.slug);
    expect(slugs.every(Boolean)).toBe(true);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
```

- [ ] **Step 2: Run the post test**

Run: `bun test src/data/posts.test.ts`
Expected: FAIL if the requested article title is not yet represented exactly enough.

- [ ] **Step 3: Normalize the existing user-authored blog topics into post data**

Ensure the static set includes the user-requested articles/topics: Top 10 Free AI Coding Tools, AI/technology trends, digital transformation, AI infrastructure/chip ecosystem, and business technology. Preserve existing authored content rather than replacing it with fabricated news claims.

- [ ] **Step 4: Create the `/blog` listing route**

Use editorial typography, category chips, search/filter UI where already supported by static data, and no placeholder 404 links.

- [ ] **Step 5: Create the article route**

Use `createFileRoute("/blog/$slug")`, resolve the slug from static data, provide semantic article markup, date/author/category metadata, and a back-to-Insights link. Return not-found behavior when the slug does not exist.

- [ ] **Step 6: Verify**

Run: `bun test src/data/posts.test.ts`
Expected: PASS.

Run: `bun run build`
Expected: PASS and route tree includes `/blog` and `/blog/$slug`.

- [ ] **Step 7: Commit**

```bash
git add src/routes/blog.tsx 'src/routes/blog.$slug.tsx' src/data/posts.ts src/data/posts.test.ts src/components/site/PostCard.tsx
git commit -m "feat: restore Blumebyte insights"
```

### Task 6: Dedicated FAQ page and mailto enquiry flow

**Files:**
- Create: `src/routes/faq.tsx`
- Modify: `src/routes/contact.tsx`
- Create: `src/lib/enquiry-mailto.ts`
- Create: `src/lib/enquiry-mailto.test.ts`
- Optional delete after migration: `src/routes/api.contact.ts`

**Interfaces:**
- Produces: `buildEnquiryMailto(fields): string`.
- Consumes: `faqs` and `FaqList` from Task 3.

- [ ] **Step 1: Write failing mailto tests**

```ts
import { describe, expect, test } from "bun:test";
import { buildEnquiryMailto } from "./enquiry-mailto";

describe("buildEnquiryMailto", () => {
  test("addresses Blumebyte with Enquiry subject", () => {
    const href = buildEnquiryMailto({ name: "Ama", email: "ama@example.com", message: "Website project" });
    expect(href.startsWith("mailto:blumebyte@gmail.com?")).toBe(true);
    expect(decodeURIComponent(href)).toContain("subject=Enquiry");
    expect(decodeURIComponent(href)).toContain("Website project");
  });
});
```

- [ ] **Step 2: Run test and confirm failure**

Run: `bun test src/lib/enquiry-mailto.test.ts`
Expected: FAIL because helper does not exist.

- [ ] **Step 3: Implement mailto helper**

Build the mailto URI with `URLSearchParams`, fixed recipient and subject, and body lines for only non-empty fields. Do not send or store form data server-side.

- [ ] **Step 4: Convert Contact form submission to mailto**

Keep current fields and validation. On submit, call `window.location.href = buildEnquiryMailto(...)`. Change the primary action text to `Send Enquiry`. Keep direct WhatsApp and contact information visible.

- [ ] **Step 5: Add `/faq` route**

Create a clean FAQ page using the shared FAQ dataset, accessible accordion, contact CTA, and SEO metadata.

- [ ] **Step 6: Remove obsolete server email endpoint if no remaining caller uses it**

Search for `/api/contact`. If the Contact page was its only consumer, delete `src/routes/api.contact.ts` so the deployment no longer depends on Resend for the requested enquiry flow.

- [ ] **Step 7: Verify**

Run: `bun test src/lib/enquiry-mailto.test.ts`
Expected: PASS.

Run: `bun run build`
Expected: PASS.

- [ ] **Step 8: Commit**

```bash
git add src/routes/faq.tsx src/routes/contact.tsx src/lib/enquiry-mailto.ts src/lib/enquiry-mailto.test.ts
git add -u src/routes/api.contact.ts
git commit -m "feat: add FAQs and mailto enquiries"
```

### Task 7: Legal, consent, accessibility, media performance polish

**Files:**
- Modify: `src/routes/privacy.tsx`
- Modify: `src/routes/terms.tsx`
- Modify: cookie consent component path discovered in current tree
- Modify: `src/routes/__root.tsx`
- Modify: affected shared media components

**Interfaces:**
- Preserves local consent states `essential` and `all`.
- All motion/media components honor reduced motion and lazy loading.

- [ ] **Step 1: Inspect the existing consent implementation and verify storage keys/state**

Search for the text `Essential only` and `Accept all`; document the current localStorage key and preserve it if viable to avoid reprompting existing visitors.

- [ ] **Step 2: Restyle consent without changing semantics**

Use a compact bottom sheet/banner with concise copy and visible Privacy Policy link. Keep both buttons keyboard accessible and ensure the banner never hides the main mobile CTA area.

- [ ] **Step 3: Review legal page navigation and contact details**

Ensure legal pages expose `blumebyte@gmail.com`, link back to site navigation, and do not make unsupported claims about patents, certifications, or universal legal compliance.

- [ ] **Step 4: Accessibility/performance audit in source**

Verify images have alt text, external links use safe `rel` where needed, dropdown is keyboard usable, iframe title is meaningful, images below fold use lazy loading, and Reveal content remains visible with JavaScript/motion reduction.

- [ ] **Step 5: Verify build and lint**

Run: `bun test`
Expected: all tests PASS.

Run: `bun run lint`
Expected: no new errors.

Run: `bun run build`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/routes/privacy.tsx src/routes/terms.tsx src/routes/__root.tsx src/components
git commit -m "chore: polish consent accessibility and legal UX"
```

### Task 8: Final Vercel-focused verification

**Files:**
- Modify only if verification reveals an issue.

**Interfaces:**
- Final output: a `main` branch that Vercel can compile and route successfully.

- [ ] **Step 1: Run full local verification**

Run:

```bash
bun install
bun test
bun run lint
bun run build
```

Expected: all commands succeed; `vite build` completes route crawling without syntax or missing-route errors.

- [ ] **Step 2: Review generated route coverage**

Confirm the generated route tree contains `/`, `/about`, `/services`, `/portfolio`, `/blumebyte-hr`, `/projects/prosme`, `/projects/ghost-tears`, `/projects/space-bob`, `/blog`, `/blog/$slug`, `/faq`, `/contact`, `/privacy`, and `/terms`.

- [ ] **Step 3: Check responsive/reduced-motion source paths**

Confirm desktop-only motion is guarded by responsive CSS/JS and `prefers-reduced-motion` prevents nonessential transforms.

- [ ] **Step 4: Commit any verification-only corrections separately**

```bash
git add -A
git commit -m "fix: resolve final production build issues"
```

Only create this commit if a correction was actually required.
