# Project: HaulSafe Insurance Services Website

## 1. Project Overview
HaulSafe Insurance is a premium US-based trucking insurance and FMCSA compliance provider. 
The goal is a high-conversion, professional frontend portfolio website.
**Core USP:** 50% Upfront payment facility and 7-day complete legal setup.

## 2. Tech Stack (Frontend Only)
- **Framework:** Next.js 14/15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Mobile-first approach)
- **Animations:** Framer Motion (For timeline and transitions)
- **Icons:** Lucide-react
- **Form Handling:** React Hook Form + Zod (Validation)
- **Form Submission:** EmailJS or WhatsApp Integration (No Database/Backend)

## 3. Design System (Based on Logo)
- **Primary Color:** #043927(Dark Forest Green)
- **Secondary Color:** #D2BD69 (Premium Gold)
- **Background Accent:** #FDFCF0 (Off-white / Cream)
- **Style:** Corporate, High-trust, Bold typography. Similar to fiscaledge.pk.

## 4. Site Map & Routes
1.  **Home (`/`):** Hero, Pain points, 7-day roadmap, Payment plan math.
2.  **Dynamic Services (`/services/[slug]`):** - Slugs: `insurance`, `compliance`, `business-formation`
    - Uses a central data object to render content.
3.  **Referral Program (`/referral`):** Commission logic (5% cash / 10% discount).
4.  **Get a Quote (`/quote`):** Multi-step lead generation form.
5.  **Contact Us (`/contact`):** General inquiry form & contact details.
6.  **Privacy Policy (`/privacy`):** Legal and owner info.

## 5. Implementation Rules
- **Component-Driven:** All UI elements must be in `@/components/`.
- **Data-Centric:** All text content for services must be stored in `@/constants/servicesData.ts`.
- **Responsive:** Must be pixel-perfect on mobile (Truckers use phones).
- **SEO:** Metadata should be optimized for "Trucking Insurance US" and "FMCSA Compliance".

## 6. Key Features to Build
- **7-Day Roadmap:** A visual vertical stepper showing progress from Day 1 to Day 7.
- **Half-Pay Calculator:** A visual card showing how a $1000 quote breaks down into $500 upfront.
- **The Quote Form:** Fields must include Business Name, VIN, SSN, LLC status, and DOT/MC numbers.