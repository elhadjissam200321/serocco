# SEROCCO Luxury Travel Website

A premium, animated luxury travel website built with Vanilla JS, Vite, GSAP, and Lenis.

## Features

- **GSAP Animations** - Scroll-triggered animations, text reveals, staggered entrances
- **Lenis Smooth Scroll** - buttery smooth scrolling experience
- **Custom Cursor** - Magnetic effect on interactive elements
- **Responsive Design** - Mobile-first approach
- **Multi-page Structure** - Home, About, Packages, FAQ, Contact, Reservation

## Pages

- **Home** - Hero, Services (SOAR/SAIL/STAY/ROAM), Why SEROCCO, Partners, Testimonials, CTA
- **About** - Brand story, Flamingo philosophy, Values, FORA Partnership
- **Packages** - Detailed service pages + Tier packages (Sirocco/Levante/Tramontane)
- **FAQ** - Accordion-style FAQ with all questions from the brief
- **Contact** - Contact form + WhatsApp integration
- **Reservation** - Comprehensive trip planning form

## Design System

### Colors
- Background: `#000000`
- Surface: `#0A0A0A`
- Accent: `#5CADD2`
- Text: `#FFFFFF`

### Typography
- Display: **Instrument Serif**
- Body: **Newsreader**

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
serocco/
├── index.html              # Homepage
├── pages/                  # Additional pages
│   ├── about.html
│   ├── packages.html
│   ├── faq.html
│   ├── contact.html
│   └── reservation.html
├── src/
│   ├── styles/
│   │   ├── main.css
│   │   ├── _variables.css
│   │   ├── _typography.css
│   │   ├── _animations.css
│   │   └── components/
│   │       └── _additional.css
│   └── scripts/
│       ├── main.js
│       ├── gsap-setup.js
│       └── scroll-animations.js
├── public/
│   ├── logo.svg
│   └── favicon.svg
└── package.json
```

## Customization

### WhatsApp Number
Replace `1234567890` with your actual WhatsApp number in:
- `index.html` (CTA section)
- `pages/contact.html`
- `pages/reservation.html`

### Email
Update `hello@serocco.travel` in:
- Footer of all pages
- Contact form action
- FAQ page

### Images
Replace Unsplash placeholder images with your own luxury travel photography.

## Technologies

- **Vite** - Build tool
- **GSAP** - Animations
- **Lenis** - Smooth scrolling
- **ScrollTrigger** - Scroll-based animations

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge).
