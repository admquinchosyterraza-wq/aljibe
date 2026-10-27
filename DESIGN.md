---
name: Aljibe
description: Central de despacho 24/7 para agua potable, maquinaria y carga desde el KM 370 Ruta 5 Sur.
colors:
  night: "#0f172a"
  night-2: "#1e293b"
  night-3: "#1f2a52"
  tile: "#131c33"
  tile-hi: "#1b2742"
  hinge: "#070b18"
  water: "#38b6ff"
  water-hi: "#8fd4ff"
  water-deep: "#2b0ebe"
  beacon: "#38b6ff"
  beacon-hi: "#6cc8ff"
  on-beacon: "#0f172a"
  lav: "#e8e4ff"
  wa: "#25d366"
  steel: "#ffffff"
  steel-2: "#f1f1f1"
  steel-3: "#c6c5cc"
  ink: "#0f172a"
  ink-2: "#54595f"
  paper-text: "#cbd5e1"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4.9vw, 4.9rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.8vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2.2rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.2
  figure:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 4vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "\"tnum\" 1"
  board:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(.85rem, 1.2vw, 1.12rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.03em"
  body:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "\"tnum\" 1"
  lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.25vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: ".95rem"
    fontWeight: 600
    lineHeight: 1
  button:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  tile: "6px"
  key: "8px"
  control: "10px"
  inset: "12px"
  panel: "14px"
  card: "16px"
  full: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  max: "1320px"
  topbar: "76px"
  section: "clamp(64px, 9vw, 120px)"
  track-gap: "clamp(16px, 2.4vw, 32px)"
  tile-gap: "8px"
components:
  button-call:
    backgroundColor: "{colors.water}"
    textColor: "{colors.on-beacon}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "14px 24px 14px 18px"
    height: "64px"
  button-call-hover:
    backgroundColor: "{colors.beacon-hi}"
    textColor: "{colors.on-beacon}"
  button-whatsapp:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "14px 24px 14px 18px"
    height: "64px"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "14px 24px 14px 18px"
    height: "64px"
  button-light-hover:
    backgroundColor: "{colors.lav}"
    textColor: "{colors.ink}"
  dispatch-call:
    backgroundColor: "{colors.water}"
    textColor: "{colors.on-beacon}"
    rounded: "{rounded.control}"
    padding: "9px 18px 9px 14px"
  carousel-arrow:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    size: "48px"
  carousel-arrow-hover:
    backgroundColor: "{colors.water-deep}"
    textColor: "{colors.white}"
  flap-tile:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.white}"
    typography: "{typography.board}"
    rounded: "{rounded.tile}"
    padding: "11px 12px"
  flap-tile-lit:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.water}"
  flap-tile-fire:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.lav}"
  chip-tile:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.white}"
    rounded: "{rounded.tile}"
    padding: "11px 12px"
  region-key:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.paper-text}"
    rounded: "{rounded.key}"
    padding: "14px 16px"
  region-key-selected:
    backgroundColor: "{colors.water}"
    textColor: "{colors.on-beacon}"
  service-card:
    backgroundColor: "{colors.night-2}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "clamp(24px, 3.4vw, 48px)"
  value-tag:
    backgroundColor: "{colors.lav}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "11px 14px"
  nav-link:
    textColor: "{colors.paper-text}"
    typography: "{typography.label}"
    padding: "8px 0"
---

# Design System: Aljibe

## Overview

**Creative North Star: "Central de despacho 24/7"**

The site is Aljibe's dispatch room, not a brochure. The ground is a deep slate navy; the light on it is a clear sky blue that means "this line is live, act now", and a saturated indigo carries the brand bands (figures, wildfire response, mission headings). Information still arrives the way a departure board delivers it: caps on dark split-flap tiles with a hinge seam through the middle, characters flipping into place. Every measurement (litres, years, regions, the service counter) is set in tabular figures.

**Brand commitment (client-pinned).** The palette and typography are a deliberate alignment with the sister brand at transportesnazar.cl, requested by the client: navy #0F172A, slate #1E293B, indigo #2B0EBE, sky #38B6FF, lavender #E8E4FF, white/#F1F1F1 light grounds, #C6C5CC borders, #54595F body text on light, set in Montserrat with Inter for secondary copy. Future work keeps these colours and families; changing them is a client decision, not a design refinement.

Density is bold and direct: hierarchy comes from scale contrast between large, tightly tracked Montserrat 800 headings in sentence case and small uppercase board labels, with no eyebrow labels above headings. Reading sections switch to white and light-grey grounds so long copy rests, then the page returns to navy for coverage and the closing phone board. Motion is functional theatre: the board flips in on load, the services carousel advances on its own while in view, a radar sweep circles the coverage rings, and the call path stays visible at every scroll position on every device. Nothing hijacks the page scroll.

**Key Characteristics:**
- Navy ground with sky blue as the single live/act signal and indigo as the brand band colour.
- Split-flap tiles (dark tile, 1px hinge seam, uppercase Montserrat) as the recurring information unit.
- Montserrat 800 sentence-case headings with tight negative tracking; Inter for leads and secondary lines.
- White and light-grey grounds for reading sections, flat and untextured.
- Services as a self-advancing scroll-snap carousel, never scroll-jacked.
- Call and WhatsApp always reachable: topbar dispatch button, floating WhatsApp on desktop, fixed dock on phones.

## Colors

A client-pinned palette shared with transportesnazar.cl: navy and slate for ground, sky blue for signal, indigo for brand bands, lavender for soft accents, white and grey for reading.

### Primary
- **Dispatch Sky** (water, also exposed as beacon): the live/act colour. Call buttons, the topbar dispatch button, the lit hero line, the "Disponible 24/7" status tile, the selected region key and active radar zone, the service counter and service CTA links, the progress bar fill, the closing phone board digits, focus rings, text selection and the nav underline. Text on it is always On-Sky navy.
- **Sky Bright** (beacon-hi): hover state of the call and dispatch buttons only.
- **On-Sky Navy** (on-beacon): text and icons sitting on sky blue.
- **Radar Ice** (water-hi): radar sweep, blips and compass letters, the coverage note text, the unit `em` in figures.

### Secondary
- **Nazar Indigo** (water-deep): the figures band and wildfire band grounds, the Misión/Visión subheads on white, carousel arrow hover fill, the icon in the light button, the photo-slot hover border, the scrollbar thumb hover, and the radial glow behind the closing section.

### Tertiary
- **Soft Lavender** (lav): value tags on white, the light button hover, secondary text and figure captions on indigo, the incendios status tile text, and the photo-slot hover fill.
- **WhatsApp Green** (wa): third-party brand colour, restricted to WhatsApp affordances (icon in the outline button, its hover ring, the floating button, the mobile dock half).

### Neutral
- **Dispatch Navy** (night): page ground, hero, services, coverage edge, close. Ink (ink) shares the same value as text on light grounds and as the photo-reel ground.
- **Slate Raised** (night-2): service card body, progress bar track, scrollbar thumb.
- **Indigo Night** (night-3): centre of the coverage radial glow.
- **Flap Tile / Tile Highlight / Hinge** (tile, tile-hi, hinge): the three values that build a split-flap tile; tile-hi is the upper leaf, hinge the 1px seam, tile the lower leaf. Tile alone is the region key ground and service media placeholder.
- **Paper White** (steel) and **Mist Grey** (steel-2): light reading grounds (company and Giro Limpio on white, people on grey).
- **Border Grey** (steel-3): Misión/Visión rule and dashed photo-slot borders.
- **Body Grey** (ink-2): body copy on light grounds.
- **Slate Mist** (paper-text): body copy, nav and secondary text on navy.
- **Signal White** (white): primary text on navy and indigo.

### Named Rules
**The Brand Lock Rule.** This palette is a client-pinned alignment with transportesnazar.cl. Do not introduce new hues, swap the indigo or sky for near-matches, or reintroduce the former amber; extend only with tints of the listed values.

**The Sky Signal Rule.** Sky blue means live or act: a call, 24/7 availability, a selected/lit state, the current position. Never use it as a section tint or illustration fill.

**The Lit-Equals-Available Rule.** State is shown as illumination: a tile, key or zone turns sky blue when it is on/selected, and the others dim (opacity .45) when one is isolated.

**The Borrowed Green Rule.** WhatsApp green appears only where WhatsApp is the action.

## Typography

**Display Font:** Montserrat 800 (with system-ui, sans-serif)
**Body Font:** Montserrat 400 (with system-ui, sans-serif)
**Secondary Font:** Inter 400–500 (with system-ui), for leads and button sub-lines

**Character:** Clean, confident geometric sans shared with the sister brand. Headings are heavy, tightly tracked and in sentence case; only data (board tiles, chips, region keys, ticker, column headers) is uppercase. Inter softens the longer lead paragraphs beside the heavy Montserrat.

### Hierarchy
- **Display** (800, clamp(2.5rem, 4.9vw, 4.9rem), 1.04, -0.025em): the hero headline only, one line lit in sky blue.
- **Headline** (800, clamp(2rem, 3.8vw, 3.4rem), 1.08, -0.025em): section headings; the wildfire and closing headings use the same voice capped at 3.3–3.6rem.
- **Title** (800, clamp(1.5rem, 2.4vw, 2.2rem), 1.15, -0.02em): service card titles.
- **Subtitle** (700, 1.3rem, 1.2): Misión/Visión (in indigo) and people role titles.
- **Figure** (700, clamp(2.2rem, 4vw, 3.6rem), 1, -0.02em, tabular): figures band numbers, unit in a half-size `em`.
- **Board** (700, clamp(.85rem, 1.2vw, 1.12rem), 1, 0.03em, uppercase): flap tiles; chips, region keys and radar labels use the same uppercase treatment at .8–.9rem, the ticker at 1rem with 0.08em.
- **Body** (Montserrat 400, 1rem, 1.65, tabular): paragraphs, capped at 36–62ch.
- **Lead** (Inter 400, clamp(1rem, 1.25vw, 1.15rem), 1.65): hero, coverage and wildfire lead paragraphs.
- **Label** (Montserrat 600, .95rem, 1): nav and footer nav. Board column headers are 700 .7rem uppercase at 0.2em in sky blue. Button labels are 700 1.05rem with an Inter 500 .82rem sub-line.

### Named Rules
**The Tabular Rule.** `font-variant-numeric: tabular-nums` is set on body; litres, years, phone numbers and counters must line up like a board.

**The Sentence-Case Heading Rule.** Headings are sentence case Montserrat 800 with negative tracking; uppercase is reserved for data on tiles and keys.

**The Scale-Not-Kicker Rule.** Hierarchy comes from scale contrast between heavy headings and small labels. Headings stand alone; there are no eyebrow/kicker lines above them.

## Layout

Content sits in a 1320px max container with a fluid gutter (clamp(16px, 4vw, 56px)); sections breathe with clamp(64px, 9vw, 120px) vertical padding. Most sections are two-column grids of unequal fractions (1.35/1, 1.1/1, 0.9/1.1) that collapse to one column at 960px. The fixed topbar is 76px (66px under 960px) and turns solid navy with blur once scrolled past 24px.

The hero is a full-viewport (100svh) grid: headline left, lead and CTAs right, the departure board spanning the full width beneath, and an equipment ticker along the bottom edge. Services are a horizontal scroll-snap carousel whose first card aligns with the content column (track padding computed from the 1320px container); cards are min(86vw, 1040px) wide (84vw under 960px). The header row carries the heading, a split-flap counter, a progress bar and prev/next arrows. The people grid becomes a horizontal snap row on tablet/phone.

Breakpoints: 1100px (tighter nav, dispatch drops its small label), 960px (menu drawer, single columns, board drops the Equipos column, service cards stack), 640px (dispatch shrinks to a 46px phone icon, CTAs go full width, carousel header stacks, the floating WhatsApp hides and a fixed two-button dock appears at the bottom; body gains 72px bottom padding).

## Elevation & Depth

Depth is soft ambient drop shadow plus tonal layering between navy, slate and tile. No hard offset shadows. Large surfaces (board, service card, wildfire and company images) float on wide, low-opacity black shadows; on white the shadow is tinted navy. Background photography is pushed far back (grayscale .3, opacity .35, double navy gradient scrim). Non-current carousel cards sit back at .55 opacity.

### Shadow Vocabulary
- **Board float** (`0 30px 60px rgb(0 0 0 / .45), inset 0 1px 0 rgb(255 255 255 / .06)`): the hero departure board.
- **Card float** (`0 18px 40px rgb(0 0 0 / .35)`): service cards and wildfire photos; the closing phone board uses `0 24px 50px rgb(0 0 0 / .4)`.
- **Button lift** (`0 10px 24px rgb(0 0 0 / .35)` → hover `0 14px 30px rgb(0 0 0 / .45)`): call buttons; dispatch uses `0 6px 16px` → `0 10px 24px`.
- **Light-ground float** (`0 30px 60px rgb(15 23 42 / .22)`): images on white grounds.
- **Topbar solid** (`0 8px 24px rgb(0 0 0 / .35)` with `backdrop-filter: blur(10px)`).

### Named Rules
**The Lift-On-Act Rule.** Buttons rise 1–2px on hover and settle with a 0.98 scale on press; elsewhere hover only shifts colour or nudges an arrow.

## Shapes

Corners are gently rounded and scale with the object: 6px for tiles, chips and value tags; 8px for region keys; 10px for buttons, the dispatch button, the dock and reel photos; 12px for the service inset photo and the Giro Limpio certificate; 14px for the board and wildfire photos; 16px for service cards, the company photo and photo slots. Carousel arrows, the floating WhatsApp button and beacon dots are circles. The split-flap hinge (a 1px dark seam at 50% height) is the signature geometry and appears on flap tiles and service chips. The wildfire band carries a faint 45° white stripe at 4%. Photo slots awaiting staff photos use a 2px dashed grey border.

## Components

### Buttons
Big, tactile, unmistakable: thumb-sized targets for someone under stress.
- **Shape:** gently rounded (10px), min-height 64px, icon left, two-line label (Montserrat 700 + Inter sub-line).
- **Call (primary):** sky ground, navy text, button lift shadow; hover to sky bright.
- **WhatsApp (outline):** transparent with a 1px inset white/55% ring and green icon; hover fills green at 12% and the ring turns solid green.
- **Light:** white ground, navy text, indigo phone icon; hover to lavender. Used on the indigo wildfire band.
- **Hover / Focus:** translateY(-2px), active scale .98; focus is a 3px sky outline at 3px offset.
- **Text link CTA (service cards):** sky Montserrat 700 with an arrow that slides 6px on hover.

### Dispatch call (topbar)
Sky button (10px) with a pulsing red live dot, "Despacho 24/7" micro-label and the number in Montserrat 800. Collapses to a 46px phone icon on phones.

### Chips / Tags
- **Service chips:** split-flap tiles (hinge gradient, 6px, uppercase Montserrat 600) listing equipment.
- **Value tags:** lavender ground, navy Montserrat 600 sentence case, 6px, on white.
- **Region keys:** tile ground, slate-mist uppercase, 8px; hover tile-hi; selected = sky ground with navy text (ARIA tab).

### Cards / Containers
- **Service card:** slate ground, 16px corners, card float, two columns (photo with inset photo / body) collapsing to stacked; the current card is full opacity and its photo settles from 1.08 to 1 scale.
- **Person card:** dashed photo slot (4:5, 16px) above a subtitle and body-grey copy; slot turns lavender with an indigo border on hover.

### Navigation
Montserrat 600, slate mist; hover/active turns white with a 2px sky underline scaling in from the left. Scroll-spy marks the active section. Under 960px it becomes a full-width drawer below the topbar with 16px-padded rows and hairline dividers.

### Services carousel (signature)
A horizontal scroll-snap track that advances one card every 4.5s while at least 35% is in view. It pauses while the pointer is over it, while focus is inside, while the tab is hidden, and for 8s after touch, pointer-down, keyboard use, horizontal wheel or an arrow click; vertical wheel passes through to the page. Under reduced motion it never auto-advances and jumps instantly. Prev/next circular arrows (48px, white 30% ring, indigo fill on hover) wrap around; the counter is a split-flap tile that flips to the new number and a 4px progress bar scales to the current position.

### Split-flap board (signature)
The hero board is a dark panel (14px, board float) of rows in three columns (Servicio / Equipos / Estado) with sky column headers. Each cell is a flap tile; characters flip in from blank on load (55ms per step, 22ms per-character stagger, 110ms per-cell stagger) and the Equipos column cycles every 2.2s. The live status tile is sky; the incendios status is lavender. The same tile is reused for the service counter and the closing phone number.

### Coverage radar (signature)
Concentric sky rings on a navy-to-indigo radial ground, a rotating 6s sweep, the San Carlos base pulsing sky at the centre, and four zone sectors. Selecting a region key lights its zone sky with a blinking blip and dims the others; regions auto-cycle every 3.2s until the user picks one.

### Ticker and reel
An uppercase equipment ticker (38s marquee) with sky drop icons along the hero's bottom edge; a two-row photo reel on navy running in opposite directions (60s/70s), paused on hover.

## Do's and Don'ts

### Do:
- **Do** keep the transportesnazar.cl palette and Montserrat/Inter pairing exactly as pinned; they are a client brand commitment.
- **Do** keep sky blue (water) for live/act only: calls, 24/7, selected/lit state, current position.
- **Do** use indigo (water-deep) for brand bands and mission headings, with white and lavender text on it.
- **Do** set data (services, equipment, statuses, phone numbers, counters) on split-flap tiles in uppercase Montserrat 700 with the hinge seam.
- **Do** set headings in Montserrat 800 sentence case with -0.02 to -0.025em tracking.
- **Do** keep a call and a WhatsApp action reachable at every scroll position, with 54–64px targets.
- **Do** switch to white or #F1F1F1 grounds with navy headings and #54595F body text for long reading sections, and return to navy for signals and contact.
- **Do** give every motion a reduced-motion fallback: flaps render final text, marquees stop, the radar sweep hides, the carousel stops auto-advancing, reveals show immediately.

### Don't:
- **Don't** reintroduce amber, Big Shoulders or Barlow; they belong to the retired system.
- **Don't** pin a section and drive horizontal movement from the vertical scroll wheel; the services carousel advances on its own and by direct input only.
- **Don't** build a white hero with a row of equal cards.
- **Don't** use sky blue as a decorative tint, illustration fill or section accent without a live/act meaning.
- **Don't** add eyebrow/kicker labels above headings; hierarchy comes from scale.
- **Don't** set headings in all caps; uppercase is for board data.
- **Don't** use hard offset shadows; depth is soft ambient float and tonal layering.
- **Don't** use WhatsApp green anywhere except WhatsApp actions.
- **Don't** let motion delay or cover the contact path.
