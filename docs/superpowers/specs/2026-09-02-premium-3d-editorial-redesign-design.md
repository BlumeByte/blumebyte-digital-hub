# Blumebyte Premium 3D Editorial Redesign — Design Specification

## Status
Approved design direction based on the uploaded reference reel and the existing Blumebyte site architecture.

## Goal
Evolve the current Blumebyte website from a premium editorial site into a restrained immersive 3D experience without sacrificing usability, performance, accessibility, SEO, or the existing TanStack React Start architecture.

The target balance is approximately:
- 65% clean premium editorial design
- 25% interactive 3D
- 10% experimental glass/shader effects

The result should feel distinctly Blumebyte, not like a generic gaming or WebGL demo site.

## Reference Video Learnings
The uploaded reel demonstrates a workflow built around open-source 3D and visual-effect tooling. The clearly visible concepts include:
- React Three Fiber / Three.js-based 3D scenes
- ShaderGradient-style animated shader surfaces
- liquid-glass / refractive UI treatments
- configurable shapes, materials and color systems
- using code assistants to adapt these effects into normal web sections

The redesign should adopt the reel's principle — advanced visual tools used selectively to create impact — rather than copy its composition literally.

## Existing Architecture
Preserve the current stack:
- TanStack React Start
- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Radix/shadcn-style UI primitives
- Vercel deployment

Do not migrate the site to another framework.

## Proposed 3D Stack
Primary:
- `three`
- `@react-three/fiber`
- `@react-three/drei`

Optional, only where implementation quality and compatibility justify it:
- `shadergradient`
- lightweight custom GLSL shaders
- liquid-glass CSS/WebGL treatment inspired by the reference reel

Avoid introducing multiple overlapping 3D libraries when React Three Fiber can provide the required capability.

## Brand System
Retain the approved Blumebyte palette:
- Black: `#000000`
- Light grey: `#F1F1F1`
- White: `#FFFFFF`
- Gold: `#7C5A1A`

Gold remains an accent. It should appear as highlights, reflected light, shader accents and CTA emphasis rather than large dominant surfaces.

Typography stays editorial and legible. Important page copy remains semantic HTML layered over or around WebGL content instead of being rendered inside the canvas.

## Homepage Experience

### 1. Hero — Digital Core
Create an immersive black hero with a custom abstract Blumebyte 3D object in the background or right side of the composition.

Visual behavior:
- black metallic or matte material
- restrained gold reflections/highlights
- slow idle rotation or breathing motion
- subtle particles or floating points if performance permits
- pointer movement produces limited parallax/rotation
- scroll subtly changes camera position and scene depth
- no aggressive orbit controls or user-driven spinning

Content remains HTML:
- strong editorial headline
- concise description
- primary Start a Project / Portfolio CTA
- secondary Services CTA

The 3D scene supports the content rather than competing with it.

### 2. Services — Glass Systems
Replace a conventional card wall with a spatial editorial services section.

The seven existing services remain unchanged in substance:
1. Web Design & Custom Dashboards
2. Hosting & Domain Solutions
3. Mobile App & Game Development
4. Virtual Assistance
5. SmartSuite Solutions
6. PrintTech Supplies
7. E-commerce

Visual treatment:
- staggered editorial layout
- selective translucent / refractive glass surfaces
- subtle depth separation between labels, icons and glass panels
- hover produces small depth or refraction changes
- cards should never become difficult to read

Use glass only on selected focal surfaces. Do not apply blur and transparency to every section.

### 3. Portfolio — Product Universe
This is the primary 3D storytelling section.

Products:
- Blumebyte HR
- ProSME
- Ghost Tears
- Space Bob

Each product gets a distinct spatial presentation:

#### Blumebyte HR
- floating desktop/dashboard plane or device frame
- use real Blumebyte HR screenshot/media already available in the project where possible
- subtle screen reflection and depth
- CTA to `https://hr.blumebyte.com`

#### ProSME
- floating mobile/browser composition
- emphasize web + Android availability
- CTAs to `https://prosme.blumebyte.com` and the supplied Google Play testing URL

#### Ghost Tears
- darker atmospheric game-world presentation
- abstract 3D geometry or particles rather than fabricated gameplay screenshots
- preserve the exact supplied testing URL even though its package identifier duplicates Space Bob

#### Space Bob
- lighter space-themed 3D treatment
- orbital particles / floating geometry may be used carefully
- CTA to the supplied Google Play URL

Scroll behavior:
- scrolling changes focus between products
- camera and object positions interpolate smoothly
- avoid a traditional carousel unless required for mobile fallback
- product copy and CTAs remain normal HTML for accessibility

### 4. Shader Field Transitions
Use ShaderGradient or equivalent custom shaders only between major chapters.

Recommended transition palette:
- black
- charcoal
- muted metallic gold
- light grey / white

Behavior:
- slow organic distortion
- optional scroll-linked intensity
- no highly saturated rainbow gradients
- avoid constant motion behind long-form text

These transitions should feel like animated materials rather than decorative gradients.

### 5. Insights + FAQ — Editorial Reset
After the 3D product section, intentionally reduce visual complexity.

Use:
- white or light-grey backgrounds
- oversized black typography
- thin lines
- restrained gold accents
- simple reveal animations

Keep Insights and FAQ content highly readable. No persistent WebGL is required in these sections.

### 6. Final CTA — Return to the Core
Bring back a simplified version of the opening 3D object behind the closing CTA.

Suggested headline:
- “Let’s build something useful.”

Actions:
- email enquiry
- WhatsApp
- Start a Project

The 3D object may react gently to pointer position but must not block interaction.

## Navigation
Keep the approved navigation structure:
- Home
- About
- Services
- Portfolio dropdown
  - Overview
  - Blumebyte HR
  - ProSME
  - Ghost Tears
  - Space Bob
- Insights
- FAQs
- Contact
- Start a Project

Potential treatment:
- transparent nav over the hero
- transitions to a more opaque black or white glass surface after scrolling
- optional very subtle backdrop refraction

The nav must remain legible and keyboard accessible at all times.

## Motion System
Use motion purposefully.

Allowed:
- scroll-linked camera translation
- small object rotation
- depth parallax
- masked text/image reveals
- shader transition changes
- light hover response
- controlled object focus changes

Avoid:
- large bouncing UI
- constant spinning
- exaggerated cursor-follow effects
- scroll hijacking
- motion that delays navigation or reading

## Performance Architecture
3D must be isolated from the rest of the site.

Required boundaries:
- lazy-load all major WebGL components
- one primary `<Canvas>` per major immersive scene where practical
- avoid multiple always-active canvases in the same viewport
- stop or reduce rendering when scenes are offscreen
- cap DPR on high-density displays
- use compressed textures and lightweight geometry
- prefer procedural geometry/shaders over large 3D assets where possible
- dispose textures/materials correctly
- avoid large GLTF models unless they materially improve the design

### Device Adaptation
Desktop:
- full experience
- richer shader and camera motion

Tablet:
- reduced object complexity
- lower DPR / particle count

Mobile / low-powered devices:
- simplified geometry
- reduced shaders
- limited or no particles
- static or pre-rendered fallback where necessary

The mobile experience must feel deliberately designed rather than merely being a shrunken desktop scene.

## Reduced Motion
Respect `prefers-reduced-motion` throughout.

When enabled:
- disable scroll-linked camera movement
- disable continuous rotation
- remove animated shaders or freeze them
- show all text immediately
- preserve the same content and navigation

No information may depend on animation to become available.

## Progressive Enhancement / Fallbacks
If WebGL is unavailable or initialization fails:
- show a static branded visual or existing image asset
- preserve all HTML content and CTAs
- do not produce a blank hero or broken layout

3D is enhancement, not a requirement for using the site.

## Accessibility
- all meaningful text remains semantic HTML
- decorative canvases use appropriate accessibility handling
- keyboard navigation remains intact
- focus indicators remain visible
- contrast must meet acceptable accessibility standards
- interactive 3D objects must not be required to reach product links
- all product CTAs remain standard links/buttons
- screen-reader users receive the same product descriptions and actions

## SEO
Do not render essential headings or copy solely in WebGL.

Continue using:
- semantic `h1`/`h2` hierarchy
- metadata per route
- canonical links
- structured organization metadata
- text-based product descriptions

3D and shaders are purely presentation layers.

## Product URLs
Preserve exactly:
- Blumebyte HR: `https://hr.blumebyte.com`
- ProSME: `https://prosme.blumebyte.com`
- ProSME Play testing: `https://play.google.com/apps/testing/com.blumebyte.prosme`
- Ghost Tears testing: `https://play.google.com/apps/testing/com.blumebyte.spacebob`
- Space Bob: `https://play.google.com/store/apps/details?id=com.blumebyte.spacebob`

Do not silently “correct” the Ghost Tears package URL.

## Contact Flow
Preserve the approved enquiry behavior:
- email: `blumebyte@gmail.com`
- subject: `Enquiry`
- WhatsApp: `+233256122555`

3D or glass effects must never interfere with contact actions.

## Existing Content to Preserve
- About
- Services
- Portfolio
- Blumebyte HR
- ProSME
- Ghost Tears
- Space Bob
- Insights/blog listing
- blog detail pages
- FAQ
- Contact
- Privacy Policy
- Terms & Conditions
- cookie consent
- WhatsApp floating action

## 3D Component Boundaries
Recommended modules:
- `src/components/three/ThreeExperience.tsx` — common lazy-loading/error boundary
- `src/components/three/HeroScene.tsx`
- `src/components/three/DigitalCore.tsx`
- `src/components/three/ProductUniverse.tsx`
- `src/components/three/ProductDevice.tsx`
- `src/components/three/ShaderField.tsx`
- `src/components/site/LiquidGlassPanel.tsx`
- `src/hooks/useReducedMotion.ts`
- `src/hooks/useWebGLCapability.ts`

These boundaries should keep each visual unit replaceable and independently testable.

## Error Handling
- WebGL initialization failure falls back gracefully
- asset-loading failures fall back to simple geometry/static media
- missing screenshots should never cause broken canvases
- no suspense boundary may leave primary text invisible

## Testing Requirements
At minimum verify:
- production build passes
- current routes still generate
- contact mailto tests remain green
- site config tests remain green
- product URL tests remain green
- 3D fallback renders when WebGL capability check returns false
- reduced-motion mode renders all content without relying on animation
- mobile navigation still works
- keyboard access to dropdowns/CTAs remains intact

Manual checks:
- Chrome desktop
- Safari/WebKit where available
- Android mobile viewport
- reduced-motion emulation
- throttled performance / lower DPR

## Success Criteria
The redesign is successful when:
1. The opening view feels unmistakably more immersive than the current site.
2. The 3D experience remains secondary to Blumebyte’s message and products.
3. The portfolio provides the strongest visual storytelling moment.
4. Mobile remains fast and usable.
5. All content and CTAs work without WebGL.
6. Reduced-motion users receive a complete experience.
7. The site retains the existing black/white/gold Blumebyte identity.
8. Vercel production builds remain green.

## Non-Goals
- no framework migration
- no full-screen game-like navigation
- no scroll hijacking
- no unnecessary CMS work
- no fabricated product screenshots, metrics, awards or testimonials
- no adding 3D merely to fill empty space

## Final Design Principle
Use 3D, glass and shaders as narrative tools. The most important moments should feel spatial and memorable; the rest of the site should remain calm, editorial and easy to use.
