# SevaCarsInfo

Seva Cars Info is a modern, eye-catching **bilingual** (Bulgarian/English) informational website for an automotive service company. Built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS v4** — featuring an American muscle car-inspired design theme with professional animations and smooth language switching.

---

## 🚗 Features

- **Bilingual Support**: Seamless switching between Bulgarian (primary) and English with localStorage persistence
- **Automotive Design**: Custom black/gray palette with racing red accents, hexagonal patterns, and speed line motifs
- **Smooth Animations**: Framer Motion for page transitions, scroll reveals, and hover effects
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewports
- **SEO Optimized**: Enhanced meta tags, OpenGraph, and semantic HTML structure
- **Accessibility**: WCAG compliant with keyboard navigation and focus management

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) (App Router) | React framework with server components |
| [React 19](https://react.dev/) | UI library with latest features |
| [TypeScript 5](https://www.typescriptlang.org/) | Type safety and developer experience |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS framework |
| [Framer Motion 12](https://www.framer.com/motion/) | Professional animations and transitions |
| [react-i18next](https://react.i18next.com/) | Internationalization (i18n) |
| [Lucide React](https://lucide.dev/) | Beautiful, consistent icon set |

> ⚠️ This is a **front-end only** application. There is no back-end, no API routes, and no server-side dependencies.

---

## Skills (via [skills.sh](https://skills.sh/))

All 8 skills are configured in `skills-lock.json`. Individual installation required:

| Skill | Description |
|---|---|
| `generate-image` | AI-powered image generation assistance |
| `react-expert` | React 19 best practices and patterns |
| `tailwindcss` | Tailwind CSS v4 guidance and utilities |
| `tailwindcss-animations` | Animation helpers for Tailwind CSS |
| `shadcn` | shadcn/ui component library guidance |
| `web-design-guidelines` | Design best practices — typography, spacing, color theory |
| `seo-audit` | SEO and meta tag optimization for front-end sites |
| `frontend-design` | Component-level design patterns and modern aesthetics |

---

## 🎨 Design System

### Color Palette
- **Carbon (Black/Gray)**: 9 shades from #0A0A0A to #F5F5F5
- **Racing Red**: #DC2626 (primary accent, inspired by American muscle cars)
- **Chrome Metallic**: #E5E7EB (secondary highlights)

### Typography
- **Display Font**: [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) - Bold, speed-inspired headings
- **Body Font**: [Manrope](https://fonts.google.com/specimen/Manrope) - Modern, readable content

### Automotive Elements
- Hexagonal overlay patterns (automotive grid motif)
- Subtle noise texture backgrounds
- Diagonal speed lines
- Tire track repeating patterns
- Chrome gradient effects
- Text glow on hero headings

---

## 📁 Project Structure

```
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── page.tsx             # Home page (hero + features)
│   │   ├── about/page.tsx       # About page (story, values, team)
│   │   ├── services/page.tsx    # Services page (6 categories)
│   │   ├── contacts/page.tsx    # Contacts page (form + info)
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── globals.css          # Global styles & utilities
│   ├── components/               # Reusable React components
│   │   ├── Navigation.tsx       # Header with logo, links, mobile menu
│   │   ├── Footer.tsx           # Footer with contact info & social
│   │   ├── PageLayout.tsx       # Layout wrapper with page transitions
│   │   ├── LanguageSwitcher.tsx # EN/BG language toggle
│   │   └── I18nProvider.tsx     # i18n context provider
│   └── lib/                      # Utility functions & configs
│       ├── i18n.ts              # i18next configuration
│       └── animations.ts        # Framer Motion animation variants
├── public/
│   ├── logo.svg                 # Brand logo (gear + typography)
│   ├── favicon.svg              # Favicon (gear icon)
│   └── locales/                 # Translation JSON files
│       ├── en/common.json       # English translations
│       └── bg/common.json       # Bulgarian translations (Cyrillic)
├── tailwind.config.ts           # Tailwind customization
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** and npm

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd SevaCarsInfo

# 2. Install dependencies
npm install

# 3. (Optional) Install agent skills
# Note: Each skill must be added individually
# npx skills add <github-repo-url>

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🌍 Internationalization (i18n)

The site uses **react-i18next** for client-side translations:

- **Default Language**: Bulgarian (bg) — Primary target audience
- **Secondary Language**: English (en) — International visitors
- **Language Detection**: Automatic with localStorage fallback
- **Persistence**: Language preference saved in localStorage
- **Translation Files**: `public/locales/{lang}/common.json`
- **Dynamic Updates**: HTML `lang` attribute updates on language switch

### Adding Translations

Edit the JSON files in `public/locales/`:

```json
// public/locales/en/common.json
{
  "nav": {
    "home": "Home",
    "services": "Services"
  }
}

// public/locales/bg/common.json
{
  "nav": {
    "home": "Начало",
    "services": "Услуги"
  }
}
```

---

## 📱 Pages

### 1. Home (`/`)
- **Hero Section**: Full-screen with animated title, subtitle, and dual CTAs
- **Features**: 3 cards (Expert Mechanics, Fast Service, Quality Guarantee)
- **Visual Elements**: Scroll indicator, background patterns, animated badges

### 2. Services (`/services`)
- **6 Service Categories**:
  - General Maintenance (oil, filters, inspections)
  - Engine Diagnostics (computer diagnostics, repair)
  - Brake Service (pads, rotors, system checks)
  - Electrical Systems (battery, alternator, wiring)
  - Suspension & Steering (shocks, alignment, repair)
  - Transmission Service (flush, repair, replacement)
- **Visual Design**: Icon-based cards with hover animations and decorative accents

### 3. About (`/about`)
- **Company Story**: Passion for American muscle cars and automotive excellence
- **Mission Statement**: Honest, reliable, professional service
- **4 Core Values**: Customer First, Technical Excellence, Honesty & Integrity, Passion for Cars
- **Team Section**: Placeholder for team member profiles

### 4. Contacts (`/contacts`)
- **Contact Information**: Phone, email, address, working hours
- **Contact Form**: Name, email, phone, message (with styled inputs and validation-ready)
- **Map Placeholder**: Ready for Google Maps API integration
- **Visual Design**: Split layout with info cards and form side-by-side

---

## 🎭 Animations

Framer Motion variants defined in `src/lib/animations.ts`:

| Variant | Description | Usage |
|---|---|---|
| `fadeInUp` | Fade in from bottom with 40px Y offset | General page content |
| `fadeInLeft` | Fade in from left with 30px X offset | Directional reveals |
| `fadeInRight` | Fade in from right with 30px X offset | Directional reveals |
| `scaleIn` | Scale from 90% to 100% with fade | Service cards, icons |
| `pageTransition` | Smooth page change with stagger | PageLayout wrapper |
| `staggerContainer` | Parent container for staggered children | Grids, lists |
| `hoverScale` | Scale 105% on hover | Buttons, interactive elements |
| `tapScale` | Scale 95% on tap/click | Buttons, CTAs |

**Custom Easing**: `[0.22, 1, 0.36, 1]` for smooth, natural motion

---

## 🔧 Configuration

### Tailwind Config (`tailwind.config.ts`)
- **Extended Colors**: Carbon (9 shades), Racing (9 shades), Chrome
- **Custom Fonts**: Bebas Neue (display), Manrope (sans)
- **Animations**: fadeIn, slideUp/Down/Left/Right, scaleIn, pulse-slow
- **Background Patterns**: grid-pattern, diagonal-lines
- **Keyframes**: Custom animation definitions for utilities

### i18n Config (`src/lib/i18n.ts`)
- **Resources**: English + Bulgarian translation objects
- **Detection**: Order → localStorage → default (bg)
- **Fallback**: Bulgarian (bg) for missing keys
- **Interpolation**: Standard escaping, no prefix/suffix
- **Auto-Updates**: HTML `lang` attribute synced with language changes

---

## 📊 SEO & Metadata

Enhanced SEO in `src/app/layout.tsx`:

- **Title**: Bilingual (Bulgarian + English) in meta title
- **Description**: 160-character optimized description mentioning key services
- **Keywords**: 15+ relevant terms (Bulgarian + English)
- **OpenGraph**: Title, description, type, locale, alternate locale
- **Structured Data**: Ready for JSON-LD integration (future enhancement)
- **Viewport**: Responsive with maximum-scale 5 for accessibility

---

## 🎯 Roadmap & Future Enhancements

- [ ] Google Maps integration on Contacts page
- [ ] Form submission handling (EmailJS or Formspree)
- [ ] Team member profiles with photos
- [ ] Service booking system (calendar integration)
- [ ] Customer testimonials section
- [ ] Gallery/portfolio of work completed
- [ ] Blog/news section for automotive tips
- [ ] Chat widget integration (WhatsApp or Messenger)

---

## 📄 License

This project is private and proprietary to Seva Cars.

---

## 📞 Contact

- **Website**: [sevacars.bg](http://sevacars.bg) (when deployed)
- **Email**: info@sevacars.bg
- **Phone**: +359 XX XXX XXXX
- **Location**: Bulgaria

---

Built with ❤️ and ⚙️ by the Seva Cars Team  
*Powered by Next.js 15, React 19, and Tailwind CSS v4*
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

