# Blumebyte Minimal Premium Redesign — Design Spec

## Goal
Transform the existing Blumebyte website into a cleaner, more premium, editorial digital experience that uses Blumebyte’s supplied brand assets and identity, while remaining restrained, fast, accessible, and easy to maintain.

## Approved Visual Direction
The design should use the user-approved minimal interpretation of the generated mockup rather than reproducing the dense mockup literally.

### Brand palette
- Black: `#000000`
- Light grey: `#F1F1F1`
- White: `#FFFFFF`
- Blumebyte gold: `#7C5A1A`

Gold is an accent, not the dominant surface color. White and black should carry most of the visual hierarchy.

### Typography and layout
- Strong editorial typography with oversized headings where appropriate.
- Generous whitespace and clear hierarchy.
- Asymmetrical compositions where useful, but not at the expense of clarity.
- Avoid repetitive generic SaaS card layouts.
- Use subtle borders, spacing, and restrained gradients.

### Motion principle
- 80% minimal premium design
- 15% purposeful motion
- 5% memorable wow moments

Motion should direct attention and support storytelling. It should never turn the site into an animation demo.

## Brand Assets
- Use the supplied standalone Blumebyte “B/leaf” mark as the favicon/browser tab icon.
- Use the supplied horizontal Blumebyte logo artwork in the top-left site navigation instead of the current temporary circle B plus text treatment.
- Preserve correct aspect ratios and provide appropriate alt text.

## Navigation
Desktop navigation should contain:
- Home
- About
- Services
- Portfolio dropdown
- Insights
- FAQs
- Contact
- Start a Project CTA

Portfolio dropdown items:
- Overview
- Blumebyte HR
- ProSME
- Ghost Tears
- Space Bob

Mobile navigation should present the same destinations in a simplified accessible menu.

## Homepage

### Hero
A minimal cinematic hero with:
- Strong headline focused on Blumebyte building useful digital products and business technology.
- Short supporting copy.
- Primary CTA to portfolio/projects or contact.
- Secondary CTA to services.
- One premium visual or media composition rather than several competing effects.
- Subtle page-load text reveal and light parallax.
- Optional scroll indicator.

### Brand / capability introduction
Introduce Blumebyte as a technology and digital solutions company that makes technology practical and accessible for businesses and organizations.

### Services
Present the seven service areas with large type, minimal supporting copy, and interactive but restrained states:
1. Web Design & Custom Dashboards
2. Hosting & Domain Solutions
3. Mobile App & Game Development
4. Virtual Assistance
5. SmartSuite Solutions
6. PrintTech Supplies (Toners & Cartridges)
7. E-commerce

Avoid a generic static three-column card wall where possible.

### Video showcase
Add a section featuring videos from Blumebyte’s YouTube channel:
`https://www.youtube.com/@BLUMEBYTE/videos`

Use responsive embedded YouTube players or linked thumbnails with lazy loading. The implementation should avoid loading every iframe on initial page load.

### Selected projects
Feature:
- Blumebyte HR
- ProSME
- Ghost Tears
- Space Bob

Use more visual project storytelling with screenshots, videos, device frames, large type, and subtle mask/scale transitions.

### About / capability section
Use a visually rich but minimal section with photography, product imagery, or technical imagery. Include short statements about approach, reliability, support, and practical technology.

### FAQ
Add a concise FAQ section on the homepage and a dedicated `/faq` page.

Recommended topics:
- What services does Blumebyte provide?
- Does Blumebyte work with clients outside Ghana?
- Can Blumebyte maintain a product after launch?
- Does Blumebyte build custom dashboards and internal systems?
- How do I request a project quote?
- How can I access Blumebyte HR or ProSME?

### Footer
Use a minimal premium footer containing:
- Blumebyte logo
- Company links
- Services links
- Portfolio links
- Legal links
- Contact details
- Social/YouTube links
- WhatsApp CTA

## Insights / Blog
Repair the broken Insights route and ensure it resolves correctly.

The Insights page should include the user’s existing blog topics already prepared for Blumebyte, including:
- Top 10 Free AI Coding Tools Every Developer Should Try
- AI / technology trends
- Digital transformation
- AI infrastructure / chip ecosystem
- Business technology topics

The page should support category/tag presentation and a clean editorial article layout. Existing static blog data may remain the source initially; no CMS is required for this redesign.

## Contact / Enquiry Flow
The contact/enquiry CTA should support a direct email flow to:
`blumebyte@gmail.com`

When the user clicks “Send Enquiry” or equivalent, open the user’s default email client using a `mailto:` link with:
- Recipient: `blumebyte@gmail.com`
- Subject: `Enquiry`

Where form fields are present, use the entered form content to prefill the email body where practical.

WhatsApp contact:
`+233256122555`

Keep WhatsApp available as a floating or persistent contact option without overwhelming the interface.

## Cookies and Legal
Preserve the site-wide cookie consent interface already added.

Consent options:
- Essential only
- Accept all

Persist the user’s choice locally so the prompt does not appear on every visit.

Preserve and expose:
- Privacy Policy
- Terms & Conditions

## Motion and Interaction
Use restrained motion rather than adding every possible effect.

Recommended interactions:
- Heading reveal on selected sections.
- Image clip/mask reveal.
- Light parallax on hero/project media.
- Small scale/translation transitions as project cards enter viewport.
- Smooth anchor scrolling where appropriate.
- Elegant button arrow/underline interactions.
- Navigation background transition after scroll.

Do not implement expensive Three.js effects unless a concrete visual need emerges.

## Responsive Behavior
Desktop, tablet, and mobile should be intentionally designed.

On mobile:
- Remove desktop-specific cursor effects.
- Reduce parallax and scroll animation complexity.
- Use natural vertical project layouts.
- Maintain readable typography and accessible CTAs.
- Lazy-load heavy video/media content.

## Accessibility
- Semantic HTML.
- Keyboard-accessible navigation and dropdowns.
- Visible focus states.
- Meaningful image alt text.
- Appropriate color contrast.
- Respect `prefers-reduced-motion`; animations should become simple fades or be disabled.

## Performance
- Lazy-load non-critical media.
- Prefer thumbnails before loading YouTube iframes.
- Keep animations transform/opacity based.
- Avoid excessive client-side JavaScript.
- Use existing app architecture unless a change is needed for the approved design.
- Do not add heavy animation dependencies unless they materially improve the implementation.

## Existing Product Destinations
- Blumebyte HR: `https://hr.blumebyte.com`
- ProSME: `https://prosme.blumebyte.com`
- ProSME Google Play testing: `https://play.google.com/apps/testing/com.blumebyte.prosme`
- Ghost Tears testing link supplied by user: `https://play.google.com/apps/testing/com.blumebyte.spacebob`
- Space Bob Google Play: `https://play.google.com/store/apps/details?id=com.blumebyte.spacebob`

Do not silently alter the user-supplied Ghost Tears testing URL even though its package identifier resembles Space Bob.

## Implementation Constraints
- Work directly against the existing `BlumeByte/blumebyte-digital-hub` codebase and `main` branch as requested.
- Preserve the current TanStack React Start / TypeScript / Tailwind structure rather than migrating frameworks during this redesign.
- Reuse existing shared components where they remain suitable; replace only the components that prevent the approved design.
- All routes must build successfully in Vercel after the changes.
