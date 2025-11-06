# NOLA Pool Solutions Website

A modern, sleek website for NOLA Pool Solutions - Premier pool services in New Orleans, LA.

## 🌊 Overview

This website showcases NOLA Pool Solutions' professional pool maintenance, repair, and renovation services with a clean, underwater-inspired design featuring subtle New Orleans cultural elements.

## ✨ Features

- **Modern SPA Design**: Non-scrollable desktop experience with smooth section transitions
- **Fully Responsive**: Mobile-optimized with traditional scrolling for smaller screens
- **NOLA Themed**: Subtle Fleur-de-lis accents and Mardi Gras color touches
- **Clean UI**: Blues and whites color palette reminiscent of pools and water
- **Service Sections**: Comprehensive display of maintenance, repair, and renovation services
- **Gallery**: Showcase of past projects (ready for actual photos)
- **Contact Form**: Direct communication channel with form validation
- **Quick Actions**:
  - Link to Skimmer customer portal
  - Google Reviews integration
  - Calendar scheduling integration

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment Ready**: Optimized for Vercel or any Node.js hosting

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/WBHankins93/nps.git
cd nps
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
nps/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with SPA navigation
│   └── globals.css         # Global styles and color palette
├── components/
│   ├── Navigation.tsx      # Main navigation bar
│   ├── Button.tsx          # Reusable button component
│   ├── FleurDeLis.tsx      # NOLA accent SVG component
│   └── sections/
│       ├── HeroSection.tsx      # Home/Hero section
│       ├── ServicesSection.tsx  # Services display
│       ├── GallerySection.tsx   # Project gallery
│       └── ContactSection.tsx   # Contact form and info
└── public/                 # Static assets
```

## 🎨 Color Palette

- **Deep Blue**: `#0a4c7a` - Primary brand color
- **Ocean Blue**: `#1e88e5` - Interactive elements
- **Pool Blue**: `#42a5f5` - Accents and gradients
- **Light Blue**: `#90caf9` - Highlights
- **Water Blue**: `#b3e5fc` - Backgrounds
- **White/Off-White**: `#ffffff` / `#f8fbff` - Main backgrounds
- **Gold**: `#d4af37` - NOLA Fleur-de-lis accents
- **Purple**: `#6b21a8` - Subtle Mardi Gras touches

## 📝 Configuration Tasks

### 1. Gallery Images

Replace the placeholder gallery items in `components/sections/GallerySection.tsx` with actual pool photos:

- Add images to `/public/gallery/`
- Update the `galleryImages` array with actual image paths
- Replace placeholder SVG icons with `<Image>` components from Next.js

### 2. Contact Form Integration

The contact form currently simulates submission. To make it functional:

**Option A: Email Service (Recommended)**
- Use [SendGrid](https://sendgrid.com/), [Mailgun](https://www.mailgun.com/), or [Resend](https://resend.com/)
- Create an API route at `app/api/contact/route.ts`
- Handle form submissions and send to `nolapoolsolutions@gmail.com`

**Option B: Form Service**
- Use [Formspree](https://formspree.io/) or [Netlify Forms](https://www.netlify.com/products/forms/)
- Update the form action in `ContactSection.tsx`

### 3. Google Calendar Integration

Update the calendar link in `ContactSection.tsx` (line ~223):

1. Set up Google Workspace calendar scheduling
2. Get your scheduling page URL from Google Calendar
3. Replace the `href="#"` with your actual scheduling URL
4. Remove the `onClick` alert handler

Example:
```tsx
href="https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID"
```

### 4. Google Reviews Link

Update the reviews button in `ContactSection.tsx` (line ~242):

1. Find your Google Business Profile
2. Get your Place ID or review link
3. Replace the `href="#"` with your actual review URL
4. Remove the `onClick` alert handler

Example:
```tsx
href="https://g.page/r/YOUR_PLACE_ID/review"
```

### 5. Phone Number

Update the phone number throughout the site:
- `ContactSection.tsx` (currently placeholder: (504) 555-0123)
- Update all `tel:` links with actual phone number

### 6. Custom Domain

Once deployed, configure your custom domain through your hosting provider.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Deploy to Other Platforms

The site can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- DigitalOcean App Platform

Build command: `npm run build`
Start command: `npm start`
Output directory: `.next`

## 📱 Responsive Behavior

- **Desktop (≥768px)**: SPA-style navigation with no scrolling. Section indicators on the right side.
- **Mobile (<768px)**: Traditional scrollable layout with all sections visible.
- Navigation automatically adapts to screen size.

## 🧪 Testing

Test the site on:
- ✅ Desktop browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile devices (iOS Safari, Chrome Mobile)
- ✅ Tablet devices (iPad, Android tablets)

## 📧 Contact

**NOLA Pool Solutions**
- Email: nolapoolsolutions@gmail.com
- Website: [Coming Soon]

## 📄 License

Copyright © 2024 NOLA Pool Solutions. All rights reserved.

---

Built with ❤️ in New Orleans
