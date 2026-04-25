# Mahjong Social at Solara — Homepage Design Spec

**Date:** 2026-04-24  
**Status:** Approved  
**Scope:** Home page (index.html) + shared styles (styles/main.css)

---

## Project Overview

A 5-page studio website for **Mahjong Social at Solara**. Audience skews older (70+), so the design prioritises large clear text, a prominent "Book a Class" CTA, and intuitive navigation. Bookings handled externally via Acuity.

**Pages:** Home · About · Booking · Location · Contact

---

## Brand

| Token | Value |
|---|---|
| Ivory | `#F7F4ED` |
| Forest Green | `#1E3D2F` |
| Gold | `#D4AF37` |
| Blush | `#E7B5B2` |
| Dark | `#1A1A18` |

**Fonts:** Cinzel (headings, nav, buttons) · Playfair Display italic (body, taglines, quotes)  
**Tagline:** *Play beautifully.*

---

## Homepage Sections

### 1. Navigation
- Background: Ivory
- Left: `NavBarMahjongTempLogo.png` (swap for final SVG when delivered)
- Right: page links — About · Booking · Location · Contact
- No "Book Now" button in nav

### 2. Hero
- Background: `Images/HeroPicture.jpg`, centered/cover
- Overlay: Forest Green at **0.8 opacity**
- Centered content (text, not logo image):
  - Eyebrow: "Welcome to" — small Cinzel, Gold, wide tracking
  - Title: "MAHJONG SOCIAL" — large Cinzel bold, Ivory
  - Subtitle: "*at Solara*" — Playfair Display italic, Gold
  - Tagline: "*Play beautifully.*" — Playfair Display italic, Ivory/muted
  - CTA button: "Book a Class" — Gold fill, white text, Cinzel

### 3. About
- Background: Ivory
- Section label: "About Us" — tiny Cinzel, Gold
- Heading: "Where Community Meets the Tiles" — Cinzel, Forest Green
- Gold divider line
- Body paragraph — Playfair Display italic, muted

### 4. Classes & Sessions
- Background: White
- 3 cards **side by side** (flex row)
- Each card: Forest Green icon tile, Cinzel title, Playfair italic description
- Cards: Beginner Series · Intermediate Play · Social Sessions
- "View Full Schedule →" text link in Gold below cards

### 5. Testimonials
- Background: Forest Green
- 2 member quotes in Playfair Display italic, Ivory
- Attribution in Gold small caps
- Gold divider between quotes

### 6. Location Teaser
- Background: Blush
- "We're at Solara" heading — Cinzel, Forest Green
- Short italic copy, "Get Directions →" outlined button

### 7. Footer
- Background: Dark (`#1A1A18`)
- Logo text (Cinzel), tagline (Playfair italic, Gold)
- All 5 page links, copyright

---

## Tech Stack

Plain HTML5 + CSS3. No framework or build step. One shared `styles/main.css` with CSS custom properties. Google Fonts via `<link>` in `<head>`.

---

## File Structure

```
c:\Code\Mahjong\
├── index.html
├── about.html          (future)
├── booking.html        (future)
├── location.html       (future)
├── contact.html        (future)
├── styles/
│   └── main.css
└── Images/
    ├── HeroPicture.jpg
    ├── NavBarMahjongTempLogo.png
    └── PrimaryMahjongTempLogo.png
```
