# Phase 1 Site Fixes

Six coordinated changes across pages, navigation, and branding. All work preserves the existing dark/black + gold luxury aesthetic.

---

## 1. Rewrite `src/pages/About.tsx`
Full overhaul replacing all placeholder content with Coach Don's real bio.

- **Hero**: Title "About Coach Don Ashley" + new bio paragraph (JV Head Football Coach, RB Coach, Compass Beverly Hills agent, Champions Lifestyle founder, film/TV producer, "It's a Choice").
- **Role tags** (replacing current badges): Head Football Coach · Running Backs Coach · Real Estate Agent – Compass Beverly Hills · Champions Lifestyle Founder · Film & TV Producer/Director.
- **Remove** the entire "Skills & Expertise" section (progress bars) and the entire "Certifications & Achievements" section.
- **Core Values section**: Keep the existing 4-card grid layout and styling, but replace all 4 cards with:
  1. Championship Mindset — "Mental toughness, focus, and accountability are the foundation of every champion."
  2. It's a Choice — "Every outcome in your life is the result of a decision. Champions own their choices."
  3. Proof Beats Promises — "Results speak louder than words. We track, measure, and celebrate real progress."
  4. On & Off the Field — "The same principles that build champions in sport build champions in life."
- **CTAs**: Replace "Download Resume / Schedule Call" hero buttons and the bottom "Start a Conversation / View Portfolio" buttons with **"Schedule a Discovery Call"** and **"Join the Community"** (link to Skool community / Calendly placeholders, scrolling to `#contact` for now).

---

## 2. Create `src/pages/Meditation.tsx` (new route `/meditation`)
- Navbar + dark gold/black aesthetic matching other pages.
- **Hero**: "Champions Meditation Practice" / "Science-based protocols for mental clarity, focus, and recovery".
- **Three practice cards** (using existing `card-glass` / `card-gradient` styling):
  - Morning Activation (10 min) — alpha waves + breath work.
  - Pre-Game Focus (15 min) — visualization + gamma protocol.
  - Evening Recovery (20 min) — theta-delta sleep prep + gratitude.
- **Bentov-Gateway Protocol section** with the supplied paragraph (Ages 14–Adult, 15–20 min daily).
- **CTA button** "Start Your Practice" → `/audio-hub`.
- Register route in `src/App.tsx`.

---

## 3. Create `src/pages/Projects.tsx` (new route `/projects`)
- Navbar + dark gold/black aesthetic.
- **Hero**: "Champions Lifestyle Projects" / "Building the ecosystem for the next generation of champions".
- **Four project cards** with status badges:
  - Champions Lifestyle App (In Development)
  - Membership Community (Live on Skool) — CTA "Join on Skool" (external link placeholder).
  - Coaches Corner Podcast (Active) — CTA "Listen Now" → `/coaches-corner`.
  - Wellness Toolkit (Available Now) — CTA "Get the Toolkit" → `/wellness-toolkit`.
- Register route in `src/App.tsx`.

---

## 4. Fix Navigation — Contact link
In `src/components/Navbar.tsx`, the current Contact button calls `scrollToSection("contact")` which only works on the homepage. Update behavior:
- If on `/`: keep smooth scroll to `#contact`.
- If on any other route: navigate to `/#contact` using `react-router`'s `useNavigate` so the homepage loads and scrolls to the contact section.
- Apply the same fix to the mobile menu Contact button.
- Also wire About/Projects/Meditation as real route links (they currently scroll to non-existent IDs on subpages).

---

## 5. Add "🔴 Watch Live" Button to Navbar
Currently the Watch Live button only appears when a random `isLive` flag is true. Per the request, make it **always visible** in the desktop nav, positioned **right of Audio Hub / before Sign In**:
- Red pulsing dot + **gold text** ("Watch Live") on a dark/transparent base, matching brand (border-primary, text-primary, with a small `bg-red-500` dot animated via `animate-pulse`).
- Clicking opens the existing `LiveContext` modal (`setModalOpen(true)`).
- Also add to mobile menu.
- Remove the random `isLive` simulation since the button is now always shown.

---

## 6. Footer fixes
- `src/components/Newsletter.tsx` line 143: change `© 2024` → `© 2026`.
- `src/pages/BlogPage.tsx` lines 86 & 89: change `info@championslifestyle.com` → `hello@championslifestyle.com` (matching the homepage Contact section).

---

## Files touched
- **Edit**: `src/pages/About.tsx`, `src/components/Navbar.tsx`, `src/components/Newsletter.tsx`, `src/pages/BlogPage.tsx`, `src/App.tsx`
- **Create**: `src/pages/Meditation.tsx`, `src/pages/Projects.tsx`

No database, auth, or component-library changes required.
