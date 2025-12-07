# 🏢 Zonca Global Investment Ltd - Corporate Website

> Professional corporate website for Zonca Global Investment Ltd, a leading provider of high-performance aluminium extrusion, facades, curtain walls, and architectural systems in West Africa.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.21-646cff)](https://vitejs.dev/)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About

**Zonca Global Investment Ltd** is a premier aluminium manufacturing and architectural systems company based in Lagos, Nigeria. This repository contains the official corporate website built with modern web technologies.

### Company Information

- **Founded:** 2010
- **Experience:** 16+ years in engineering and construction
- **Certification:** ISO 9001:2015
- **Headquarters:** 48 Lambe Iluyomade Street, Okota, Lagos, Nigeria
- **Contact:** zoncaglobalinvestment@gmail.com | +234 805 540 8624

---

## ✨ Features

### Core Functionality

- 🎨 **Modern Design** - Clean, professional corporate website
- 📱 **Fully Responsive** - Mobile-first design, works on all devices
- ⚡ **High Performance** - 100 KB gzipped bundle, optimized for speed
- 🔍 **SEO Optimized** - Meta tags, structured data, sitemap
- 📊 **Analytics Ready** - Google Analytics 4 integration
- 📧 **Contact Form** - Functional contact form with EmailJS
- 💬 **WhatsApp Integration** - Direct messaging capability
- 🖼️ **Image Optimization** - WebP format with fallbacks

### Pages

- **Home** - Complete landing page with all sections
- **Product Catalog** - 4 product categories with filtering
- **Services** - Company services and capabilities
- **Projects** - Portfolio of completed projects
- **Leadership** - CEO profile (Emmanuel Senameh)
- **Contact** - Contact form and company information

### Product Categories

1. **Windows & Doors** - WD50T Thermal Series
2. **Facades** - FS50 Structural Glazing
3. **Sliders** - S32 Heavy Duty Slider
4. **Office Systems** - OF80 Modular Partition

---

## 🛠️ Tech Stack

### Core

- **React 18.3.1** - UI library
- **TypeScript 5.6.3** - Type safety
- **Vite 5.4.21** - Build tool & dev server
- **Tailwind CSS 3.4.17** - Styling

### Libraries

- **React Hook Form 7.68.0** - Form management
- **Zod 4.1.13** - Schema validation
- **EmailJS 4.4.1** - Email service
- **Lucide React 0.460.0** - Icons
- **React Helmet Async 2.0.5** - SEO meta tags
- **React GA4 2.1.0** - Google Analytics

### Development Tools

- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.22** - Vendor prefixes
- **Sharp** - Image optimization

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/VOTRE-USERNAME/zonca-global-investment.git
cd zonca-global-investment
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env.local` file (see [Environment Variables](#environment-variables))

4. **Start development server**

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run optimize-images  # Optimize images
```

---

## 📁 Project Structure

```
zonca-global-investment/
├── public/
│   ├── images/              # Optimized images (JPG + WebP)
│   │   ├── products/        # Product images
│   │   ├── projects/        # Project portfolio images
│   │   ├── team/            # Team member photos
│   │   └── patterns/        # Background patterns
│   ├── images-source/       # Source images (for optimization)
│   ├── robots.txt           # SEO robots file
│   └── sitemap.xml          # SEO sitemap
│
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components (7 files)
│   │   ├── layout/          # Layout components (3 files)
│   │   ├── sections/        # Home page sections (7 files)
│   │   └── products/        # Product components (3 files)
│   ├── pages/               # Page components (6 files)
│   ├── constants/           # Data & configuration (3 files)
│   ├── types/               # TypeScript definitions
│   ├── utils/               # Utility functions
│   ├── services/            # External services (EmailJS)
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
│
├── scripts/
│   └── optimize-images.js   # Image optimization script
│
├── vercel.json              # Vercel deployment config
├── .vercelignore            # Vercel ignore file
├── .gitignore               # Git ignore file
├── .env.example             # Environment variables template
├── package.json             # Project dependencies
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 🌐 Deployment

This project is optimized for deployment on **Vercel**.

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/VOTRE-USERNAME/zonca-global-investment)

### Manual Deployment

1. **Push to GitHub**

```bash
git push origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy!

For detailed deployment instructions, see [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Google Analytics 4 (Optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# EmailJS (Required for contact form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### How to Get API Keys

**EmailJS** (Contact Form):
1. Create account at [emailjs.com](https://www.emailjs.com)
2. Configure email service (Gmail, Outlook, etc.)
3. Create email template
4. Copy Service ID, Template ID, and Public Key

**Google Analytics** (Analytics):
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Create property for your site
3. Copy Measurement ID (format: G-XXXXXXXXXX)

See `.env.example` for template.

---

## 📚 Documentation

Comprehensive documentation is available:

- **[DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)** - Complete deployment guide for Vercel
- **[PRE-DEPLOYMENT-CHECKLIST.md](PRE-DEPLOYMENT-CHECKLIST.md)** - Pre-deployment checklist
- **[READY-FOR-DEPLOYMENT.md](READY-FOR-DEPLOYMENT.md)** - Deployment readiness summary
- **[IMAGES-QUICK-START.md](IMAGES-QUICK-START.md)** - Image replacement guide
- **[DEMARRAGE-RAPIDE.md](DEMARRAGE-RAPIDE.md)** - Quick start (French)
- **[AMELIORATION-ROADMAP.md](AMELIORATION-ROADMAP.md)** - Development roadmap (French)

---

## 🎨 Image Optimization

### Optimize New Images

1. Place your images in `public/images-source/`
2. Run the optimization script:

```bash
npm run optimize-images
```

3. Optimized images will be created in `public/images/` (JPG + WebP formats)

**Image Specifications:**
- Products: 800×600px
- Projects: 800×600px
- Hero: 1920×1080px
- Team: 800×1000px

See [IMAGE-SPECIFICATIONS.md](IMAGE-SPECIFICATIONS.md) for details.

---

## 📊 Performance

### Bundle Size

- **JavaScript**: 308 KB (94.8 KB gzipped) ⚡
- **CSS**: 27.2 KB (5.28 KB gzipped) ⚡
- **Total**: ~100 KB gzipped

### Lighthouse Score Goals

- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Zonca Global Investment Ltd**

- **Website**: [Coming Soon]
- **Email**: zoncaglobalinvestment@gmail.com
- **Phone**: +234 805 540 8624
- **WhatsApp**: +234 805 540 8624
- **Address**: 48 Lambe Iluyomade Street, Okota, Lagos, Nigeria

**CEO**: Emmanuel Senameh

---

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Powered by [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

## 📈 Status

- ✅ **Build**: Passing
- ✅ **Tests**: N/A
- ✅ **Deployment**: Ready
- ✅ **Performance**: Optimized

**Current Version**: 1.0.0
**Last Updated**: December 2025

---

<div align="center">

**Made with ❤️ in Nigeria**

⭐ Star this repo if you find it useful!

</div>
