---
name: Harrison James
description: A developer's portfolio painted as a Lagos danfo livery and its route board, in cement grey and burgundy.
colors:
  ground: "#d4d0c9"
  ground-ink: "#181617"
  ground-muted: "#4b4541"
  ground-rule: "rgb(24 22 23 / 0.22)"
  band: "#6d1526"
  band-ink: "#ffffff"
  band-muted: "#ead8db"
  board: "#faf9f7"
  board-ink: "#181617"
  board-muted: "#5d5651"
  board-rule: "rgb(24 22 23 / 0.12)"
  shade: "#8a1c33"
  route: "#1b1a1c"
  route-lit: "#f2ede6"
  route-ghost: "#938c85"
  route-accent: "#8a1c33"
  cast-shadow: "rgb(0 0 0 / 0.22)"
  route-white: "#ffffff"
  window: "#1d1c1e"
  clover: "#141414"
  manga-paper: "#f7f5f2"
  manga-white: "#ffffff"
  manga-ink: "#181617"
  ground-night: "#151414"
  ground-ink-night: "#eee9e3"
  ground-muted-night: "#aaa29a"
  ground-rule-night: "rgb(238 233 227 / 0.18)"
  band-muted-night: "#ecd9dc"
  board-night: "#201e1e"
  board-ink-night: "#eee9e3"
  board-muted-night: "#aaa29a"
  board-rule-night: "rgb(238 233 227 / 0.13)"
  shade-night: "#a8293f"
  route-accent-night: "#a3263f"
  window-night: "#0d0c0d"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(3rem, 8.6vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.1rem, 5.2vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)"
    fontWeight: 750
    lineHeight: 1
    letterSpacing: "-0.02em"
  slogan:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.05rem, 2.2vw, 1.45rem)"
    fontWeight: 750
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.15rem, 2.2vw, 1.45rem)"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  prose:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.68
  label:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    letterSpacing: "0.07em"
    fontVariation: "'wdth' 78"
  label-stop:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    letterSpacing: "0.07em"
    fontVariation: "'wdth' 78"
  label-route:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 700
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 78"
  button:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.98rem"
    fontWeight: 700
    lineHeight: 1.2
  bubble:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.01em"
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.88em"
    fontWeight: 400
rounded:
  diamond: "1px"
  frame: "2px"
  code: "4px"
  signboard: "6px"
  thumb: "10px"
  window-glass: "11px"
  embed: "12px"
  driver-sill: "14px"
  cover-glass: "15px"
  portrait-glass: "16px"
  window: "18px"
  driver: "22px"
  cover: "24px"
  phone: "30px"
  round: "50%"
spacing:
  pinstripe: "0.25rem"
  stripe-gap: "0.5rem"
  seal: "0.55rem"
  stripe: "0.75rem"
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  sign-gap: "clamp(2rem, 5vw, 3.25rem)"
  stop-gap: "clamp(3rem, 7vw, 5rem)"
  section: "clamp(3.5rem, 7vw, 5.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.signboard}"
    padding: "0.8rem 1.35rem"
    height: "3rem"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ground-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.signboard}"
    padding: "0.8rem 1.35rem"
    height: "3rem"
  button-line-hover:
    backgroundColor: "{colors.ground-ink}"
    textColor: "{colors.ground}"
  button-small:
    padding: "0.5rem 1rem"
    height: "2.5rem"
  button-on-band:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ground-ink}"
    rounded: "{rounded.signboard}"
  hire-plate:
    backgroundColor: "{colors.route-accent}"
    textColor: "{colors.route-white}"
    rounded: "{rounded.signboard}"
    padding: "0.5rem 1rem"
    height: "2.5rem"
  route-board:
    backgroundColor: "{colors.route}"
    textColor: "{colors.route-white}"
    height: "4.25rem"
  route-stop:
    textColor: "{colors.route-ghost}"
    typography: "{typography.label-stop}"
    padding: "0.5rem 0.7rem"
  route-stop-lit:
    textColor: "{colors.route-lit}"
  round-control:
    textColor: "{colors.route-white}"
    rounded: "{rounded.round}"
    size: "2.4rem"
  signboard:
    backgroundColor: "{colors.board}"
    textColor: "{colors.board-ink}"
    rounded: "{rounded.signboard}"
    padding: "1.6rem 1.8rem 1.7rem"
  board-strip:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
    typography: "{typography.label}"
    padding: "0.45rem 0.8rem"
  bus-window:
    backgroundColor: "{colors.window}"
    rounded: "{rounded.window}"
    padding: "{spacing.seal}"
  livery-band:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
    typography: "{typography.slogan}"
    padding: "1.25rem 0"
  timetable-head:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
    typography: "{typography.label}"
    padding: "0.8rem 1.2rem"
  input-on-band:
    backgroundColor: "{colors.board}"
    textColor: "{colors.board-ink}"
    rounded: "{rounded.signboard}"
    padding: "0.85rem 1rem"
  manga-page:
    backgroundColor: "{colors.manga-paper}"
    padding: "7px"
  speech-bubble:
    backgroundColor: "{colors.manga-white}"
    textColor: "{colors.manga-ink}"
    typography: "{typography.bubble}"
    rounded: "{rounded.round}"
    padding: "0.85rem 1.2rem"
---

# Design System: Harrison James

## Overview

**Creative North Star: "The Danfo Line"**

The site is a Lagos danfo bus repainted for one driver. Its body is cement grey. Burgundy livery bands carry the roles and the calls to action. White signboards are bolted on wherever there is reading to do. Dark bus windows hold the photo and every screenshot, and a charcoal route board runs along the top, its stops lighting up as you travel down the page. Products are stops on the route. Roles are painted on the band like bus slogans ("Lead developer of SeeBlu"). The world is the danfo's signwriting with its colours and lettering translated: yellow repainted grey and burgundy, the hand-lettered display face replaced by one variable grotesque, the rolling destination blind taken off.

Density is medium and confident. Big painted lettering sits straight on the bare body, the long reading moves onto framed boards, and full-bleed bands mark where one leg of the route ends. Everything is flat paint and opaque tint. Depth comes from boards and windows sitting slightly proud of the body, never from translucency. One typeface does all the signwriting by moving along its weight and width axes.

The personality belongs to a Black Clover fan: a black five-leaf clover decal stuck on windows and on the contact band, and one manga panel ("Off the clock") where inked speed lines converge on a black grimoire drawn for this site. The nods stay as decals and one panel; the route and the work carry the page. Rejected outright: yellow, frosted glass, the dark developer portfolio with a code card and an equal grid of project cards, the destination blind, and official anime artwork.

**Key Characteristics:**
- Cement-grey body, burgundy bands, warm-white signboards, charcoal route board, dark bus windows.
- One variable typeface (Bricolage Grotesque): 800 for painted lettering, narrow caps for labels.
- The livery module: every band edge and heavy rule is cut from a 0.75rem stripe.
- Projects as stops of unequal weight (window plus overlapping signboard), the rest in a timetable.
- Night service repaints the body and boards charcoal; bands and route board stay the same.
- One authored motion: the grimoire floats. Everything else only answers a hover or a page change.

## Colors

Livery paint: a neutral cement body, one deep burgundy for painted surfaces, a brighter burgundy for lines and marks, warm-white boards, and near-black glass and route board. Night service changes the body and boards, nothing else.

### Primary
- **Livery Burgundy** (#6d1526): the band. Full-bleed role band under the hero, the contact stop, primary buttons, board strips (year and role), timetable and journey heads, the stack group tags, reference cards, the full-stripe heavy rules, and text selection. Identical in day and night service.

### Secondary
- **Signal Burgundy** (#8a1c33 by day; shade-night #a8293f and route-accent-night #a3263f at night): lines and marks only. Link underlines on hover, prose list markers, the stack diamonds, the "now" stop on the journey line, the lit stop's 3px underline, the Hire me plate, the caret, and the ring on the grimoire. The night values are lifted so the marks still read on charcoal.

### Neutral
- **Cement Grey** (#d4d0c9): the body, the page itself. At night it becomes **Charcoal Body** (ground-night).
- **Lettering Ink** (#181617): headings and body text on the grey, frames of the signboards, the line button's outline. At night the lettering turns warm white (ground-ink-night).
- **Weathered Ink** (#4b4541): the plain line under a heading, social links, dates and outlets in the Writing list, footer text.
- **Signboard White** (#faf9f7): every board (project signs, timetable, services, journey, facts, write-ups, colophon) and the contact inputs. At night it becomes **Night Signboard** (board-night), because warm-white boards glare on a dark screen.
- **Board Muted** (#5d5651): taglines, tool lists, dates and organisations on boards.
- **Route Charcoal** (#1b1a1c): the route board, the same in both services, and the browser theme colour. **Lit Letter** (#f2ede6) is the stop you're on; **Ghost Stop** (#938c85) is every stop you haven't reached; letters on the board that aren't stops (name plate, Hire me, controls) are pure white (route-white).
- **Tinted Glass** (#1d1c1e, deeper at night as window-night): the opaque frame of every bus window.
- **Decal Black** (#141414): the clover decal. With its white cut line it reads on grey, on charcoal and on the band.
- **Manga Paper** (#f7f5f2), **Panel White** (#ffffff) and **Manga Ink** (#181617): the manga page. Fixed values that stay the same at night.
- **Rules**: ground-rule (22% ink) for hairlines on the body, board-rule (12% ink) between rows on a board, and their night counterparts in warm white.

### Contrast (measured)
Lettering ink on cement 11.7:1; weathered ink on cement 6.1:1; white on livery burgundy 11.8:1; band-muted on band 8.6:1; board ink on signboard 17.1:1; board muted on signboard 6.9:1; lit letter on route 14.9:1; ghost stop on route 5.2:1; white on signal burgundy 9.2:1. Night: ink on charcoal 15.2:1; muted on charcoal 7.3:1; board ink on night board 13.8:1; board muted on night board 6.6:1. Every text pairing clears WCAG AA.

### Named Rules
**The Two Burgundies Rule.** Livery Burgundy is paint for surfaces; Signal Burgundy is for lines and marks. A band is never Signal Burgundy, and an underline is never Livery Burgundy.

**The Repainted Rule.** The danfo's yellow was repainted grey and burgundy. No yellow, amber or gold appears anywhere in the chrome; only screenshots may carry it.

**The Night Service Rule.** Night service repaints the body and the boards charcoal and turns the lettering warm white. The bands stay Livery Burgundy, the route board stays Route Charcoal, and a 2px Signal Burgundy rule under the route board keeps it apart from the dark body.

**The Paper Stays Paper Rule.** The manga page is white paper and black ink in both services. It never takes the theme tokens.

## Typography

**Display Font:** Bricolage Grotesque (self-hosted variable font, weight 200–800, width 75–100%, with ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif as fallbacks)
**Body Font:** Bricolage Grotesque
**Label Font:** Bricolage Grotesque at 78% width (font-stretch: 78%)

**Character:** One signwriter's hand. At 800 with tight tracking it is the lettering painted on the bus body; at 700, narrow and in caps, it is the route board's stop names; at 400 it is plain, friendly reading. Monospace appears only for inline code in Markdown write-ups.

### Hierarchy
- **Display** (800, clamp(3rem, 8.6vw, 6rem), 0.95, −0.035em): the name in the first viewport. Page titles use the same paint at their own sizes: a project title clamp(2.8rem, 8vw, 5.4rem), About clamp(2.8rem, 7vw, 4.8rem), Projects clamp(2.5rem, 6.5vw, 4.5rem).
- **Headline** (800, clamp(2.1rem, 5.2vw, 3.6rem), 0.95, −0.035em): section signs painted on the body ("Things I've shipped", "Off the clock"). The contact heading runs larger, clamp(2.2rem, 5.4vw, 3.8rem), in white on the band, capped at 13ch.
- **Title** (750, clamp(1.8rem, 3.6vw, 2.6rem), 1, −0.02em): project names on their signboards. Timetable names use the same paint at 1.25rem; "Next stop" links at 800, clamp(1.6rem, 4vw, 2.4rem).
- **Slogan** (750, clamp(1.05rem, 2.2vw, 1.45rem), 1.2): role titles painted on the livery band.
- **Lead** (700, clamp(1.15rem, 2.2vw, 1.45rem)): the role line under the name ("Full-stack web developer.").
- **Body** (400, 1.0625rem, 1.6): copy on the body. The intro holds to 38rem; the plain line under a section sign holds to 36rem at 1.08rem in Weathered Ink.
- **Prose** (400, 1.08rem, 1.68, max 68ch): Markdown write-ups and About, always on a signboard. Prose h2 at 800, 1.55rem; links at 600 with a Signal Burgundy underline.
- **Label** (700, 0.82rem, 78% width, 0.07em, uppercase): board caps for strips, table heads, dates, breadcrumbs and fact terms (0.74rem in the facts board). Route-board stops run the same caps at 0.95rem; route lines at 0.86rem with 0.04em tracking.
- **Button** (700, 0.98rem, 1.2): every button; the Hire me plate is 800 at 0.92rem.

### Named Rules
**The One Typeface Rule.** Bricolage Grotesque is the only face. Roles come from its axes (800 to paint, 78% width for caps, 400 to read), never from a second family.

**The Plain Line Under Rule.** A heading stands alone on the body with a short plain sentence under it. Nothing in caps sits above a heading; breadcrumbs are navigation, and dates are timetable data inside a route.

**The Timetable Numerals Rule.** Years, periods and dates use tabular numerals, so columns of stops line up.

## Layout

The page is the length of the bus: a sticky route board, then stops in order (hero, Work, Stack, Journey, Writing, the manga panel, Contact), each a section padded by the section step (clamp(3.5rem, 7vw, 5.5rem)) inside a container of min(100% − 2 × gutter, 1160px). Section signs put the heading and its line on the left and an optional text link on the right, aligned to the bottom, with the sign-gap below.

**The livery module.** The stripe (0.75rem) sets every band edge and heavy rule. A full-bleed band carries a pinstripe above it: 0.25rem of Livery Burgundy, 0.5rem of body showing through, then the band (painted with stacked box-shadows on the band itself, as paint rather than depth). Heavy rules are a full stripe of Livery Burgundy: above the Writing list, above the project-page footer, above the 404 stops. Hairlines are 2px ground-rule on the body and 1px board-rule between rows on a board.

**Composition by stop:**
- **Hero:** copy and a 15–21rem photo window side by side, bottom-aligned; the full-bleed role band closes the first viewport.
- **Work:** featured projects as alternating stops: a bus window at 1.4fr and a signboard at 1fr that overlaps the window's edge by 3.5rem, sides swapping on every other stop, stop-gap between them. The remaining projects go in one timetable board. Never an equal grid.
- **Stack:** one services board, auto-fit columns of at least 13rem, separated by 2px painted dividers at 18% opacity.
- **Journey:** two boards at 1.15fr and 1fr, each with a burgundy head and a route line down its left edge.
- **Writing:** a ruled list straight on the body, no board, with a 7.5rem date column; rows slide 0.6rem right on hover.
- **Manga:** copy at 0.8fr, the manga page at 1.2fr.
- **Contact:** a full-bleed band with its pinstripe, copy at 1.1fr and the form (or direct buttons) at 1fr, a large clover decal in the bottom-right corner.
- **Project page:** header on the body, a full-width cover window, then a sticky 17rem facts board beside the write-up board; extra screens sit side by side at the same height.

**Responsive:**
- 980px: the route board's stops fold into a round menu button that opens a charcoal panel.
- 900px: project stops stack; the signboard sits under the window, overlapping it by 2rem and inset 0.75rem.
- 860px: the hero reorders for phones: name, role, intro, calls, then the role band (inside the first screen), then the photo window at most 17rem wide, left-aligned on the gutter. Role slogans stack.
- 820px: every two-column stop (Journey, manga, Contact, project body, About) goes to one column; the facts board stops being sticky.
- 760px: route lines turn vertical with one rail; the timetable drops its head and each row becomes a block.
- 640px: the Writing date and outlet share a line above the title; services dividers turn horizontal.
- 380px: the name plate drops its text and keeps the clover.

## Elevation & Depth

Flat paint with a soft lift. Boards and windows sit slightly proud of the body with a low, wide shadow pulled in by a large negative spread, so the shadow reads as the panel's weight on the bus rather than as a floating card. Nothing is translucent and nothing blurs what is behind it. Buttons lift 2px on hover and settle on press.

### Shadow Vocabulary
- **Board lift** (`box-shadow: 0 1px 0 rgb(0 0 0 / 0.08), 0 18px 32px -24px rgb(0 0 0 / 0.55)`): every signboard.
- **Window lift** (`box-shadow: inset 0 0 0 2px rgb(255 255 255 / 0.06), 0 22px 40px -28px rgb(0 0 0 / 0.7)`): bus windows; the inset line is the rubber seal.
- **Driver's window** (`box-shadow: 0 26px 44px -30px rgb(0 0 0 / 0.75)`): the hero photo window.
- **Manga page** (`box-shadow: 0 22px 40px -28px rgb(0 0 0 / 0.6)`): the manga page.
- **Button hover** (`box-shadow: 0 6px 14px -6px rgb(0 0 0 / 0.45)`): with the 2px lift; removed on press.
- **Decal** (`filter: drop-shadow(0 4px 6px rgb(0 0 0 / 0.3))`): the clover sticker on the hero window.

### Named Rules
**The Lift Not Drop Rule.** Depth is a soft lift under boards, windows and buttons. No drop shade under lettering, no hard offset shadow, no stacked offset outline.

**The Solid Tint Rule.** Bus windows are opaque tinted frames. No backdrop-filter, blur or see-through panel anywhere.

## Shapes

Gently rounded painted panels and rounder glass. Signboards, buttons, inputs, the Hire me plate and reference cards share the signboard corner (6px); board strips, table heads and band tags are square. Each signboard has the signwriter's double frame: a 3px ink border and an inner 1px ink line inset 5px at 55% opacity with 2px corners. Bus windows round more, like real bus glass: 18px outside and 11px on the glass; the project cover 24px and 15px; phone-shaped screenshots 30px and 22px; the hero's driver window is 22px at the top and 14px at the bottom, with glass to match. Round shapes are kept for controls (route-board buttons, footer social circles), route-line rings and the speech bubble's ellipse. The stack's bullets are small diamonds (0.45rem, rotated 45°). Decals sit at an angle (14°, 12°, −12°), and the window's vinyl slogan at −2°.

## Components

### Buttons
Painted panels: solid, square-shouldered, quick to lift.
- **Shape:** signboard corner (6px), min height 3rem, padding 0.8rem 1.35rem, 2px border in the button's own paint, icon gap 0.6rem.
- **Primary:** Livery Burgundy with white lettering ("Email me", "Visit the live site", "Read the case study").
- **Line:** transparent with a 2px current-colour outline ("Download CV", "Go back"); on hover it fills with Lettering Ink and the text takes the body colour.
- **Small:** min height 2.5rem, padding 0.5rem 1rem, 0.9rem text (on project signboards).
- **On the band:** inside the contact stop the primary button takes the body's paint by day (cement, ink text); by night it turns light (Night Ink fill, burgundy text) so it stands clear of the band. The line button outlines in white, filling white with burgundy text on hover.
- **Hover / Focus:** lift 2px with the button-hover shadow over 0.25s cubic-bezier(0.22, 1, 0.36, 1); press returns to rest. Focus is the global 3px outline offset 3px in the context's ink.

### Text links
Bold, underlined 2px at 0.3em offset; on hover the underline turns Signal Burgundy. Used for "More projects", outbound project links, and the timetable's case-study links.

### Route Board (navigation)
Always Route Charcoal, 4.25rem tall, sticky. The name plate (clover plus the name in 800 white) on the left; stops in narrow caps on the right, ghosted until reached. The lit stop turns Lit Letter with a 3px Signal Burgundy underline at 0.5em offset; on the home page the lit stop follows the section being read. Controls are 2.4rem round outlines (28% white) for the day/night switch and the phone menu, then the Hire me plate in Signal Burgundy. The focus ring on the board is Lit Letter. Nothing on the board rolls, scrolls or animates.

### Signboard (card)
The reading surface. Signboard White (night: Night Signboard), the double frame, board lift, padding 1.6rem 1.8rem 1.7rem on project signs. A project sign carries the title in title paint, a **board strip** (Livery Burgundy, board caps: the year in Lit Letter, then the role title), the tagline in Board Muted, a route line of tools, and the small primary button with outbound links. Boards also hold the timetable, the services board, journey lines, the project facts, write-ups and the colophon.

### Route line
A project's tools as stops: narrow caps at 0.86rem, each preceded by a 0.55rem ring in a 2px current-colour stroke. Horizontal and wrapping on wide screens; below 760px (and always on the facts board) it turns vertical on a 2px rail at 40% opacity, with the rings filled in board colour so the rail passes behind them. "+N more" has no ring.

### Bus Window
Every photo and screenshot sits in one: an opaque Tinted Glass frame, a 0.55rem seal, window lift, 18px outside and 11px on the glass. Screenshots are cropped from the top. On hover, a project's screenshot rises 1.5% and scales 1.015 over 0.7s cubic-bezier(0.16, 1, 0.3, 1). Covers carry a view-transition name, so a screenshot glides from the home page into its project page. A project with no screenshot shows its name in Lit Letter on the glass. The hero's driver window adds the motto as white vinyl lettering (700) on its lower rim at −2°, and a clover decal over the top-right corner.

### Livery Band
Full-bleed Livery Burgundy with the pinstripe above it. Under the hero it carries the role slogans as links (slogan paint, each led by a small white clover at 80%), underlined 3px on hover; on phones they stack. The contact stop is the same band at section height.

### Timetable
Projects as a route timetable on one signboard: a Livery Burgundy head in board caps (Year, Project, Built with), rows split by board-rule, a 6% band tint on row hover, the year in narrow 700, the name in title paint with "role · tagline" under it, tools in narrow Board Muted, and the links stacked on the right. On the Projects page each row adds a 7.5rem thumbnail window. Below 760px each row becomes a block.

### Services board and journey lines
The stack is one board with a square Livery Burgundy tag per group and Signal Burgundy diamonds before each tool. Journey boards carry a full-width burgundy head, then a 2px ink rail down the left with a 0.95rem ringed stop per job or course; the current stop is filled Signal Burgundy. References sit on small Livery Burgundy cards.

### Inputs / Fields
Only in the contact stop, on the band. Signboard White fields (night: Night Signboard), signboard corner, padding 0.85rem 1rem, a 2px transparent border that turns the board's ink on focus (dark by day, light at night, clear in both), labels in 700 at 0.92rem above each field, placeholders in Board Muted. The send button disables at 60% opacity while sending; the status line below reports sent or failed.

### Manga Panel ("Off the clock")
The world's signature, placed just before Contact. A manga page of Manga Paper with a 3px ink border and 7px white gutters, holding up to three panels with 3px ink borders (two panels at 1.25fr/1fr, three at 1.3fr/1fr/1fr). With no uploaded art, one panel holds hand-ruled ink speed lines: tapered wedges from a fixed seed, converging on a clear centre where the grimoire floats. A speech bubble (white ellipse, 3px ink border, 800 caps at 1rem, a skewed tail) overlaps the top edge on the right. Uploaded art fills panels from the top, with a credits line under the page.

### Grimoire
A black grimoire drawn for this site: charcoal cover and spine, iron corner plates, a clasp, cream page edges, and a Signal Burgundy ring around a pale five-leaf clover on the cover. Up to 11rem wide. It carries **the one authored motion**: it floats 9px up and tilts −1.5° over 4.5s on cubic-bezier(0.45, 0, 0.55, 1), looping, while its ground shadow narrows and fades in step. Under prefers-reduced-motion it stays still.

### Clover Decal
Five heart-shaped leaves around a centre, a crease down each leaf in white at 55%, and a curved stem; colour follows the text colour. As a sticker it adds a white cut line around the leaves and sits rotated over a corner (hero window, About portrait, 404 sign). It also marks the name plate, the Download CV button, the role slogans and the contact band.

### Navigation states and focus
Every focusable element shows a 3px solid outline offset 3px: Lettering Ink on the body, Lit Letter on the route board, the body colour on the band. A skip link drops in from the top on focus. The phone menu closes on a link tap, Escape or a tap outside.

### Named Rules
**The One Moment Rule.** The grimoire float is the only motion that runs on its own. Everything else answers a hover, a press or a page change (state transitions of 0.2–0.7s and the view-transition cross-fade), and all of it stops under prefers-reduced-motion.

**The Board Is For Reading Rule.** Long reading sits on a signboard; headings, single lines and the Writing list sit straight on the body.

## Do's and Don'ts

### Do:
- **Do** paint long reading on a signboard (Signboard White, 3px ink frame, inner 1px frame inset 5px, 6px corners) and keep headings painted straight on the body.
- **Do** use Livery Burgundy (#6d1526) for surfaces (bands, strips, table heads, primary buttons, the contact stop) and Signal Burgundy (#8a1c33) for lines and marks only.
- **Do** cut band edges and heavy rules from the 0.75rem stripe, and give every full-bleed band its 0.25rem pinstripe and 0.5rem gap.
- **Do** put every photo and screenshot in a bus window: opaque Tinted Glass, 0.55rem seal, 18px outside and 11px on the glass.
- **Do** set labels, stops, dates and table heads in board caps (700, 78% width, 0.07em, uppercase), and everything else in Bricolage Grotesque at its normal width.
- **Do** light exactly one stop on the route board, with a 3px Signal Burgundy underline; the other stops stay Ghost Stop.
- **Do** keep the route board Route Charcoal and the bands Livery Burgundy in night service; repaint only the body, the boards and the lettering.
- **Do** keep the manga page white paper and black ink in both services.
- **Do** keep the 3px focus outline offset 3px in the ink of its context, and stop every animation under prefers-reduced-motion.
- **Do** give projects unequal weight: featured stops as window plus overlapping signboard, the rest in the timetable.

### Don't:
- **Don't** use yellow, amber or gold anywhere in the chrome; the danfo's yellow was repainted grey and burgundy.
- **Don't** use glass: no backdrop-filter, blur, or translucent panels. The bus window's opaque tint is the only glass this world has.
- **Don't** put a drop shade (an offset text-shadow) under painted lettering, and don't use hard offset shadows; depth is the soft lift.
- **Don't** show a location (town, city or country) in visible copy about Harrison; it stays in metadata for search.
- **Don't** use official anime artwork. The clover and the grimoire are drawn for this site, and the manga panel takes only art Harrison has the rights to.
- **Don't** put an eyebrow or kicker (a small caps label) above a heading.
- **Don't** bring back the destination blind or any rolling, scrolling or animated sign on the route board.
- **Don't** lay projects out as an equal grid of cards, and don't open with a code card on a dark developer page.
- **Don't** add a second typeface; vary Bricolage Grotesque's weight and width instead.
