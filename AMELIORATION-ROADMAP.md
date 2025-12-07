# 🚀 ROADMAP D'AMÉLIORATION - ZONCA GLOBAL INVESTMENT

**Date de création:** 6 Décembre 2025
**Objectif:** Transformer le site en une plateforme professionnelle, performante et fonctionnelle
**Durée estimée:** 5 semaines
**Statut:** 🔴 Non commencé

---

## 📊 TABLEAU DE BORD

| Phase | Statut | Progression | Priorité |
|-------|--------|-------------|----------|
| Phase 1: Fondations | 🔴 Non commencé | 0% | CRITIQUE |
| Phase 2: Performance & SEO | 🔴 Non commencé | 0% | HAUTE |
| Phase 3: Contenu Réel | 🔴 Non commencé | 0% | HAUTE |
| Phase 4: Polish & Production | 🔴 Non commencé | 0% | MOYENNE |

**Légende:** 🔴 Non commencé | 🟡 En cours | 🟢 Terminé

---

## 🎯 PHASE 1: FONDATIONS (Semaine 1-2)

### 1.1 Restructuration Architecture du Code ⚡ CRITIQUE

**Problème actuel:**
- 1025 lignes dans un seul fichier `index.tsx`
- Maintenance impossible
- Performances médiocres
- Code non réutilisable

**Actions à réaliser:**

#### ✅ Étape 1.1.1: Créer la structure de dossiers
```bash
mkdir -p src/components/common
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/components/products
mkdir -p src/pages
mkdir -p src/hooks
mkdir -p src/utils
mkdir -p src/types
mkdir -p src/constants
mkdir -p src/styles
mkdir -p src/services
```

**Structure finale:**
```
src/
├── components/
│   ├── common/
│   │   ├── ZoncaLogo.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── FeatureCard.tsx
│   │   └── Button.tsx
│   ├── layout/
│   │   ├── TopBar.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Capabilities.tsx
│   │   ├── Markets.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── CatalogPreview.tsx
│   └── products/
│       ├── ProductCard.tsx
│       ├── ProductDetail.tsx
│       └── ProductGrid.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── CatalogPage.tsx
│   ├── ServicesPage.tsx
│   ├── ProjectsPage.tsx
│   ├── ContactPage.tsx
│   └── FounderPage.tsx
├── hooks/
│   ├── useScrollPosition.ts
│   └── useFormValidation.ts
├── utils/
│   ├── validation.ts
│   └── api.ts
├── types/
│   └── index.ts
├── constants/
│   ├── products.ts
│   ├── testimonials.ts
│   └── config.ts
├── services/
│   └── emailService.ts
└── App.tsx
```

**Critères de validation:**
- [ ] Tous les dossiers créés
- [ ] Chaque composant dans son fichier séparé
- [ ] Imports organisés et fonctionnels
- [ ] Application fonctionne sans erreur

---

#### ✅ Étape 1.1.2: Extraire les types TypeScript

**Créer:** `src/types/index.ts`

```typescript
export type Category = 'all' | 'windows-doors' | 'facades' | 'sliders' | 'office';

export interface Product {
  id: string;
  name: string;
  category: Category;
  shortDesc: string;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
  techDrawing?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  bg: string;
}

export interface Project {
  title: string;
  system: string;
  img: string;
  description?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
}

export type ViewType = 'home' | 'catalog' | 'services' | 'founder' | 'projects' | 'contact' | 'product-detail';
```

**Critères de validation:**
- [ ] Fichier créé
- [ ] Tous les types exportés
- [ ] Pas d'erreurs TypeScript

---

#### ✅ Étape 1.1.3: Extraire les constantes

**Créer:** `src/constants/products.ts`

```typescript
import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // Copier les données des lignes 25-99 de index.tsx
  {
    id: 'wd50t',
    name: 'WD50T Thermal Series',
    category: 'windows-doors',
    // ... reste des données
  },
  // ... autres produits
];
```

**Créer:** `src/constants/config.ts`

```typescript
export const COMPANY_INFO = {
  name: 'Zonca Global Investment Ltd',
  phone: '+234 805 540 8624',
  email: 'zoncaglobalinvestment@gmail.com',
  address: '48 Lambe Iluyomade Street, Okota, Lagos, Nigeria',
  hours: 'Mon - Sat: 08:00 - 18:00',
  whatsapp: '+2348055408624',
  social: {
    linkedin: 'https://linkedin.com/company/zonca-global',
    instagram: 'https://instagram.com/zoncaglobal'
  }
};

export const CERTIFICATIONS = [
  'ISO 9001:2015',
  'SONCAP Certified',
  'Qualicoat Standards'
];
```

**Critères de validation:**
- [ ] Constantes extraites
- [ ] Importées correctement dans l'app
- [ ] Aucune duplication de données

---

### 1.2 Formulaire de Contact Fonctionnel ⚡ CRITIQUE

**Problème actuel:**
- Formulaire ne fait rien (ligne 787: `e.preventDefault()`)
- Pas de validation
- Pas d'envoi d'email

**Actions à réaliser:**

#### ✅ Étape 1.2.1: Installer les dépendances

```bash
npm install react-hook-form zod @hookform/resolvers
npm install axios
npm install --save-dev @types/node
```

**Critères de validation:**
- [ ] Packages installés
- [ ] package.json mis à jour

---

#### ✅ Étape 1.2.2: Créer le schéma de validation

**Créer:** `src/utils/validation.ts`

```typescript
import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z.string()
    .min(2, 'Le prénom doit contenir au moins 2 caractères')
    .max(50, 'Le prénom est trop long'),

  lastName: z.string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom est trop long'),

  company: z.string()
    .max(100, 'Le nom de l\'entreprise est trop long')
    .optional(),

  email: z.string()
    .email('Email invalide')
    .min(5, 'Email trop court')
    .max(100, 'Email trop long'),

  phone: z.string()
    .regex(/^[\d\s\+\-\(\)]+$/, 'Numéro de téléphone invalide')
    .min(10, 'Numéro trop court')
    .max(20, 'Numéro trop long')
    .optional(),

  projectType: z.string()
    .min(1, 'Veuillez sélectionner un type de projet'),

  message: z.string()
    .min(20, 'Le message doit contenir au moins 20 caractères')
    .max(2000, 'Le message est trop long')
});

export type ContactFormData = z.infer<typeof contactSchema>;
```

**Critères de validation:**
- [ ] Fichier créé
- [ ] Validation fonctionne
- [ ] Messages d'erreur en français

---

#### ✅ Étape 1.2.3: Créer le service d'envoi d'email

**Option A: EmailJS (Gratuit, simple)**

```bash
npm install @emailjs/browser
```

**Créer:** `src/services/emailService.ts`

```typescript
import emailjs from '@emailjs/browser';
import { ContactFormData } from '../types';

// Configurer sur https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
  try {
    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      company: data.company || 'Non spécifié',
      phone: data.phone || 'Non fourni',
      project_type: data.projectType,
      message: data.message,
      to_email: 'zoncaglobalinvestment@gmail.com'
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    console.error('Erreur envoi email:', error);
    throw new Error('Échec de l\'envoi du message. Veuillez réessayer.');
  }
};
```

**Option B: API Backend (Recommandé pour production)**

**Créer:** `src/services/api.ts`

```typescript
import axios from 'axios';
import { ContactFormData } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const api = {
  sendContactForm: async (data: ContactFormData) => {
    const response = await axios.post(`${API_URL}/api/contact`, data);
    return response.data;
  },

  getProducts: async () => {
    const response = await axios.get(`${API_URL}/api/products`);
    return response.data;
  }
};
```

**Critères de validation:**
- [ ] Service email configuré
- [ ] Test d'envoi réussi
- [ ] Emails reçus dans la boîte

---

#### ✅ Étape 1.2.4: Mettre à jour le composant Contact

**Modifier:** `src/pages/ContactPage.tsx`

```typescript
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '../utils/validation';
import { sendContactEmail } from '../services/emailService';

export const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await sendContactEmail(data);
      setSubmitStatus('success');
      reset();

      // Réinitialiser après 5 secondes
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erreur:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... Header ... */}

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
              Prénom *
            </label>
            <input
              type="text"
              {...register('firstName')}
              className={`w-full bg-gray-50 border p-3 text-sm outline-none transition-colors ${
                errors.firstName ? 'border-red-500' : 'border-gray-300 focus:border-zonca-red'
              }`}
              placeholder="Jean"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
            )}
          </div>

          {/* Répéter pour tous les champs... */}

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-bold uppercase tracking-widest py-4 transition-colors ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-zonca-red hover:bg-red-800 text-white'
              }`}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="md:col-span-2 bg-green-50 border border-green-200 text-green-800 p-4 rounded">
              ✅ Message envoyé avec succès ! Nous vous répondrons dans les 24h.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="md:col-span-2 bg-red-50 border border-red-200 text-red-800 p-4 rounded">
              ❌ Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
```

**Critères de validation:**
- [ ] Validation fonctionne
- [ ] Messages d'erreur s'affichent
- [ ] Formulaire s'envoie
- [ ] Email reçu
- [ ] Formulaire se réinitialise

---

### 1.3 Corriger le Bouton WhatsApp ⚡ CRITIQUE

**Problème actuel:**
- Bouton WhatsApp redirige vers la page contact au lieu d'ouvrir WhatsApp

**Action:**

**Modifier:** `src/App.tsx` (ou créer `src/components/common/WhatsAppButton.tsx`)

```typescript
export const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/2348055408624?text=${encodeURIComponent(
    'Bonjour Zonca Global Investment, je souhaite obtenir des informations sur vos services.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <Phone size={28} />
        <span className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-900 text-white text-xs px-3 py-1 rounded whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </div>
  );
};
```

**Critères de validation:**
- [ ] Bouton ouvre WhatsApp
- [ ] Message pré-rempli correct
- [ ] Fonctionne sur mobile et desktop

---

### 1.4 Sécurité des Données ⚡ HAUTE

#### ✅ Étape 1.4.1: Masquer l'email contre les bots

**Créer:** `src/utils/security.ts`

```typescript
// Encoder l'email
export const getEmail = (): string => {
  return atob('em9uY2FnbG9iYWxpbnZlc3RtZW50QGdtYWlsLmNvbQ==');
};

// Créer un lien mailto sécurisé
export const createMailtoLink = (subject?: string): string => {
  const email = getEmail();
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${email}${params}`;
};
```

**Modifier les composants qui affichent l'email:**

```typescript
import { getEmail, createMailtoLink } from '../utils/security';

// Dans TopBar.tsx
<a href={createMailtoLink()} className="...">
  <Mail size={12} className="mr-2 text-zonca-red"/>
  {getEmail()}
</a>
```

**Critères de validation:**
- [ ] Email masqué dans le code source
- [ ] Liens mailto fonctionnent
- [ ] Email affiché correctement à l'utilisateur

---

#### ✅ Étape 1.4.2: Ajouter variables d'environnement

**Créer:** `.env.local`

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_API_URL=http://localhost:3001
```

**Créer:** `.env.example`

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_API_URL=
```

**Mettre à jour:** `.gitignore`

```
.env.local
.env.production
.env
```

**Critères de validation:**
- [ ] Variables d'environnement configurées
- [ ] .env.local dans .gitignore
- [ ] .env.example créé pour la documentation

---

## 🚀 PHASE 2: PERFORMANCE & SEO (Semaine 3)

### 2.1 Remplacer CDN Tailwind par Build Local ⚡ CRITIQUE

**Problème actuel:**
- CDN Tailwind (ligne 7 de index.html) ajoute 300-400KB
- Configuration inline non optimisée

**Actions:**

#### ✅ Étape 2.1.1: Installation Tailwind

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Critères de validation:**
- [ ] Tailwind installé
- [ ] tailwind.config.js créé
- [ ] postcss.config.js créé

---

#### ✅ Étape 2.1.2: Configuration Tailwind

**Modifier:** `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zonca: {
          red: '#8B0000',
          redLight: '#A52A2A',
          grey: '#A9A9A9',
          dark: '#1A1A1A',
          light: '#F5F5F5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'diagonal-stripes': 'repeating-linear-gradient(45deg, rgba(169, 169, 169, 0.05), rgba(169, 169, 169, 0.05) 10px, transparent 10px, transparent 20px)',
      }
    },
  },
  plugins: [],
}
```

**Créer:** `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans overflow-x-hidden;
  }
}

@layer utilities {
  .tech-scroll::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  .tech-scroll::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  .tech-scroll::-webkit-scrollbar-thumb {
    background: #8B0000;
    border-radius: 3px;
  }
}
```

**Modifier:** `src/main.tsx` ou `src/index.tsx`

```typescript
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Importer le CSS Tailwind
import App from './App';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
```

**Modifier:** `index.html` - SUPPRIMER:

```html
<!-- SUPPRIMER CES LIGNES: -->
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = { ... }
</script>
```

**Critères de validation:**
- [ ] CDN supprimé
- [ ] Tailwind compilé localement
- [ ] Styles fonctionnent
- [ ] Taille bundle réduite

---

### 2.2 Optimisation des Images ⚡ HAUTE

**Problème actuel:**
- Images Unsplash lourdes (plusieurs MB)
- Pas de lazy loading
- Pas de formats modernes (WebP)

#### ✅ Étape 2.2.1: Créer dossier assets

```bash
mkdir -p public/images/products
mkdir -p public/images/projects
mkdir -p public/images/hero
mkdir -p public/images/team
```

**Structure:**
```
public/
├── images/
│   ├── products/
│   │   ├── wd50t.webp
│   │   ├── fs50.webp
│   │   └── ...
│   ├── projects/
│   ├── hero/
│   └── team/
│       └── emmanuel-senameh.webp
```

**Critères de validation:**
- [ ] Dossiers créés
- [ ] Structure organisée

---

#### ✅ Étape 2.2.2: Optimiser les images

**Outils recommandés:**
- Squoosh (https://squoosh.app/) - en ligne
- ImageOptim (Mac)
- RIOT (Windows)

**Conversions à faire:**
1. Convertir toutes les images en WebP
2. Créer plusieurs tailles:
   - Thumbnail: 400x300
   - Medium: 800x600
   - Large: 1600x1200

**Nommage:**
```
product-wd50t-thumb.webp
product-wd50t-medium.webp
product-wd50t-large.webp
```

**Critères de validation:**
- [ ] Toutes les images converties en WebP
- [ ] Plusieurs tailles disponibles
- [ ] Images < 100KB chacune

---

#### ✅ Étape 2.2.3: Créer composant Image optimisé

**Créer:** `src/components/common/OptimizedImage.tsx`

```typescript
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  sizes = '100vw',
  priority = false
}) => {
  // Générer les srcset pour différentes tailles
  const generateSrcSet = (baseSrc: string) => {
    const sizes = ['400w', '800w', '1200w'];
    return sizes
      .map(size => `${baseSrc.replace('.webp', `-${size}.webp`)} ${size}`)
      .join(', ');
  };

  return (
    <img
      src={src}
      srcSet={generateSrcSet(src)}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
};
```

**Utilisation:**

```typescript
// Avant:
<img src="https://images.unsplash.com/..." alt="..." />

// Après:
<OptimizedImage
  src="/images/products/wd50t.webp"
  alt="WD50T Thermal Series"
  className="w-full h-full object-cover"
/>
```

**Critères de validation:**
- [ ] Composant créé
- [ ] Lazy loading fonctionne
- [ ] Images responsive

---

### 2.3 SEO & Meta Tags ⚡ HAUTE

#### ✅ Étape 2.3.1: Installer React Helmet

```bash
npm install react-helmet-async
npm install --save-dev @types/react-helmet-async
```

**Critères de validation:**
- [ ] Package installé

---

#### ✅ Étape 2.3.2: Configurer Helmet Provider

**Modifier:** `src/App.tsx`

```typescript
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
      {/* Votre app */}
    </HelmetProvider>
  );
};
```

**Critères de validation:**
- [ ] Provider configuré

---

#### ✅ Étape 2.3.3: Créer composant SEO

**Créer:** `src/components/common/SEO.tsx`

```typescript
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zonca Global Investment Ltd - Premium Aluminium Solutions Nigeria',
  description = 'Leading provider of high-performance facades, custom aluminium extrusion, and architectural systems in West Africa. ISO 9001:2015 certified. 16+ years experience.',
  keywords = 'aluminium extrusion, facades Nigeria, curtain wall, windows doors Lagos, architectural systems, Zonca Global, aluminium profiles',
  image = '/images/og-image.jpg',
  url = 'https://zoncaglobal.com',
  type = 'website'
}) => {
  const siteTitle = title.includes('Zonca') ? title : `${title} | Zonca Global Investment`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};
```

**Utilisation dans les pages:**

```typescript
// HomePage.tsx
import { SEO } from '../components/common/SEO';

export const HomePage = () => {
  return (
    <>
      <SEO />
      {/* Contenu de la page */}
    </>
  );
};

// ProductDetailPage.tsx
export const ProductDetailPage = ({ product }) => {
  return (
    <>
      <SEO
        title={product.name}
        description={product.shortDesc}
        image={product.image}
        url={`https://zoncaglobal.com/products/${product.id}`}
      />
      {/* Contenu */}
    </>
  );
};
```

**Critères de validation:**
- [ ] Composant SEO créé
- [ ] Utilisé dans toutes les pages
- [ ] Meta tags présents dans le HTML

---

#### ✅ Étape 2.3.4: Ajouter Schema.org markup

**Créer:** `src/components/common/StructuredData.tsx`

```typescript
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zonca Global Investment Ltd",
    "url": "https://zoncaglobal.com",
    "logo": "https://zoncaglobal.com/images/logo.png",
    "description": "Leading provider of aluminium solutions in Nigeria",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "48 Lambe Iluyomade Street",
      "addressLocality": "Okota",
      "addressRegion": "Lagos",
      "addressCountry": "NG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-805-540-8624",
      "contactType": "sales",
      "availableLanguage": ["en", "fr"]
    },
    "sameAs": [
      "https://linkedin.com/company/zonca-global",
      "https://instagram.com/zoncaglobal"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const ProductSchema = ({ product }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.shortDesc,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": "Zonca Global Investment"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "NGN"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
```

**Utilisation:**

```typescript
// App.tsx
import { OrganizationSchema } from './components/common/StructuredData';

<HelmetProvider>
  <OrganizationSchema />
  {/* App */}
</HelmetProvider>
```

**Critères de validation:**
- [ ] Schema.org ajouté
- [ ] Validé avec Google Rich Results Test
- [ ] Pas d'erreurs

---

#### ✅ Étape 2.3.5: Créer sitemap.xml

**Créer:** `public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://zoncaglobal.com/</loc>
    <lastmod>2025-12-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://zoncaglobal.com/catalog</loc>
    <lastmod>2025-12-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://zoncaglobal.com/services</loc>
    <lastmod>2025-12-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://zoncaglobal.com/founder</loc>
    <lastmod>2025-12-06</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://zoncaglobal.com/projects</loc>
    <lastmod>2025-12-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://zoncaglobal.com/contact</loc>
    <lastmod>2025-12-06</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

**Créer:** `public/robots.txt`

```txt
User-agent: *
Allow: /

Sitemap: https://zoncaglobal.com/sitemap.xml
```

**Critères de validation:**
- [ ] sitemap.xml créé
- [ ] robots.txt créé
- [ ] Accessible à /sitemap.xml

---

### 2.4 Analytics & Monitoring ⚡ MOYENNE

#### ✅ Étape 2.4.1: Google Analytics 4

**Option A: Google Analytics**

```bash
npm install react-ga4
```

**Créer:** `src/utils/analytics.ts`

```typescript
import ReactGA from 'react-ga4';

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (MEASUREMENT_ID) {
    ReactGA.initialize(MEASUREMENT_ID);
  }
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const trackEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label
  });
};
```

**Dans App.tsx:**

```typescript
import { useEffect } from 'react';
import { initGA, trackPageView } from './utils/analytics';

useEffect(() => {
  initGA();
}, []);

useEffect(() => {
  trackPageView(view);
}, [view]);
```

**Option B: Plausible Analytics (Privacy-friendly)**

```html
<!-- Dans index.html -->
<script defer data-domain="zoncaglobal.com" src="https://plausible.io/js/script.js"></script>
```

**Critères de validation:**
- [ ] Analytics installé
- [ ] Tracking fonctionne
- [ ] Événements enregistrés

---

## 📸 PHASE 3: CONTENU RÉEL (Semaine 4)

### 3.1 Remplacer les Images Placeholder ⚡ CRITIQUE

**Actions nécessaires:**

#### ✅ Étape 3.1.1: Liste des images à fournir

**À obtenir du client:**

1. **Logo de l'entreprise** (haute résolution)
   - Format: SVG + PNG
   - Tailles: Original + 500px + 200px

2. **Photo du CEO Emmanuel Senameh**
   - Format: Portrait professionnel
   - Résolution: Minimum 1200x1600px

3. **Photos des produits** (4 produits minimum)
   - WD50T Thermal Series
   - FS50 Structural Glazing
   - S32 Heavy Duty Slider
   - OF80 Modular Partition
   - Format: Haute résolution
   - Angles: Face + profil + détails

4. **Dessins techniques**
   - Coupes de profils
   - Spécifications dimensionnelles
   - Format: PDF ou PNG haute résolution

5. **Photos de projets réalisés** (minimum 6)
   - Avant/après si possible
   - Différents angles
   - Qualité professionnelle

6. **Photos de l'usine/showroom**
   - Équipements
   - Processus de fabrication
   - Équipe au travail

**Critères de validation:**
- [ ] Liste envoyée au client
- [ ] Photos reçues
- [ ] Photos optimisées (WebP)
- [ ] Photos uploadées dans /public/images

---

#### ✅ Étape 3.1.2: Mettre à jour les chemins d'images

**Modifier:** `src/constants/products.ts`

```typescript
export const PRODUCTS: Product[] = [
  {
    id: 'wd50t',
    name: 'WD50T Thermal Series',
    category: 'windows-doors',
    shortDesc: '...',
    image: '/images/products/wd50t-main.webp', // Nouvelle image
    techDrawing: '/images/products/wd50t-technical.webp',
    // ...
  },
  // ...
];
```

**Critères de validation:**
- [ ] Toutes les images Unsplash remplacées
- [ ] Chemins corrects
- [ ] Images affichées correctement

---

### 3.2 Vrais Témoignages Clients ⚡ HAUTE

#### ✅ Étape 3.2.1: Collecter les témoignages

**Format à demander au client:**

```typescript
interface Testimonial {
  quote: string;           // Max 200 caractères
  author: string;          // Nom complet
  role: string;            // Titre + Entreprise
  company: string;         // Nom de l'entreprise
  photo?: string;          // Photo du client (optionnel)
  projectName?: string;    // Projet concerné
  rating?: number;         // 1-5 étoiles
}
```

**Exemple de collecte:**
- Envoyer email aux clients récents
- Demander permission d'utilisation
- Obtenir photos si possible

**Critères de validation:**
- [ ] Au moins 6 témoignages réels
- [ ] Autorisations obtenues
- [ ] Photos des clients (si possible)

---

#### ✅ Étape 3.2.2: Mettre à jour les témoignages

**Créer:** `src/constants/testimonials.ts`

```typescript
export const TESTIMONIALS = [
  {
    quote: "Zonca's engineering team solved a complex wind-load challenge...",
    author: "Engr. Tunde Bakare",
    role: "Project Director",
    company: "Eko Atlantic",
    photo: "/images/testimonials/tunde-bakare.webp",
    rating: 5
  },
  // Vrais témoignages du client
];
```

**Critères de validation:**
- [ ] Témoignages réels ajoutés
- [ ] Photos ajoutées
- [ ] Affichage correct

---

### 3.3 Projets Réalisés ⚡ HAUTE

#### ✅ Étape 3.3.1: Documenter les projets

**Créer:** `src/constants/projects.ts`

```typescript
export interface ProjectDetail {
  id: string;
  title: string;
  client: string;
  location: string;
  year: number;
  category: 'commercial' | 'residential' | 'industrial';
  system: string;
  description: string;
  features: string[];
  images: string[];
  stats?: {
    area?: string;
    duration?: string;
    team?: number;
  };
}

export const PROJECTS: ProjectDetail[] = [
  {
    id: 'eko-atlantic-towers',
    title: 'Eko Atlantic Towers',
    client: 'Eko Atlantic Development',
    location: 'Lagos, Nigeria',
    year: 2024,
    category: 'commercial',
    system: 'FS50 Curtain Wall System',
    description: 'High-rise facade installation...',
    features: [
      'Wind-load resistant design',
      'Structural glazing',
      '5000m² of curtain wall'
    ],
    images: [
      '/images/projects/eko-atlantic-1.webp',
      '/images/projects/eko-atlantic-2.webp',
    ],
    stats: {
      area: '5,000 m²',
      duration: '8 months',
      team: 25
    }
  },
  // Autres projets...
];
```

**Critères de validation:**
- [ ] Au moins 6 projets documentés
- [ ] Photos de qualité
- [ ] Informations complètes

---

### 3.4 Backend & CMS (Optionnel mais recommandé) ⚡ MOYENNE

#### ✅ Option A: Headless CMS (Strapi)

**Installation:**

```bash
npx create-strapi-app@latest zonca-backend --quickstart
cd zonca-backend
npm run develop
```

**Configuration:**
1. Créer Collections:
   - Products
   - Projects
   - Testimonials
   - Contact Forms

2. API Endpoints automatiques:
   - GET /api/products
   - GET /api/projects
   - POST /api/contact-forms

**Critères de validation:**
- [ ] Strapi installé
- [ ] Collections créées
- [ ] API fonctionnelle

---

#### ✅ Option B: Supabase (Base de données + Auth)

```bash
npm install @supabase/supabase-js
```

**Créer:** `src/lib/supabase.ts`

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

**Tables à créer:**
- products
- projects
- testimonials
- contact_submissions

**Critères de validation:**
- [ ] Supabase configuré
- [ ] Tables créées
- [ ] Requêtes fonctionnent

---

## 🎨 PHASE 4: POLISH & PRODUCTION (Semaine 5)

### 4.1 Accessibilité (A11y) ⚡ MOYENNE

#### ✅ Étape 4.1.1: Installer outils d'audit

```bash
npm install --save-dev @axe-core/react
```

**En développement:**

```typescript
// src/main.tsx
if (import.meta.env.DEV) {
  import('@axe-core/react').then(axe => {
    axe.default(React, ReactDOM, 1000);
  });
}
```

**Critères de validation:**
- [ ] Axe installé
- [ ] Audit lancé
- [ ] Erreurs identifiées

---

#### ✅ Étape 4.1.2: Corriger les problèmes d'accessibilité

**Checklist:**

1. **Attributs ARIA**
```typescript
<button aria-label="Ouvrir le menu" onClick={...}>
  <Menu />
</button>

<nav aria-label="Navigation principale">
  {/* ... */}
</nav>
```

2. **Navigation au clavier**
```typescript
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
```

3. **Alt text sur images**
```typescript
<img
  src="..."
  alt="Système de façade WD50T installé sur un immeuble commercial"
/>
```

4. **Contraste des couleurs**
- Vérifier que zonca-red (#8B0000) a un contraste suffisant
- Utiliser WebAIM Contrast Checker

5. **Focus visible**
```css
/* Dans index.css */
*:focus-visible {
  @apply outline-2 outline-offset-2 outline-zonca-red;
}
```

**Critères de validation:**
- [ ] Score Lighthouse Accessibility > 90
- [ ] Navigation clavier complète
- [ ] Lecteur d'écran compatible
- [ ] Contraste > 4.5:1

---

### 4.2 Gestion d'Erreurs ⚡ HAUTE

#### ✅ Étape 4.2.1: Error Boundaries

**Créer:** `src/components/common/ErrorBoundary.tsx`

```typescript
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white p-8 rounded shadow-lg text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Oups ! Une erreur est survenue
            </h1>
            <p className="text-gray-600 mb-6">
              Nous sommes désolés. Une erreur inattendue s'est produite.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-zonca-red text-white px-6 py-2 rounded hover:bg-red-800"
            >
              Recharger la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

**Utilisation:**

```typescript
// App.tsx
import { ErrorBoundary } from './components/common/ErrorBoundary';

<ErrorBoundary>
  <App />
</ErrorBoundary>
```

**Critères de validation:**
- [ ] Error boundary implémenté
- [ ] Erreurs capturées
- [ ] UI de fallback affichée

---

#### ✅ Étape 4.2.2: Page 404

**Créer:** `src/pages/NotFoundPage.tsx`

```typescript
export const NotFoundPage = ({ setView }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-zonca-red">404</h1>
        <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-2">
          Page non trouvée
        </h2>
        <p className="text-gray-600 mb-8">
          La page que vous cherchez n'existe pas.
        </p>
        <button
          onClick={() => setView('home')}
          className="bg-zonca-red text-white px-8 py-3 font-bold hover:bg-red-800"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};
```

**Critères de validation:**
- [ ] Page 404 créée
- [ ] Navigation fonctionne

---

### 4.3 Tests ⚡ MOYENNE

#### ✅ Étape 4.3.1: Tests unitaires (Vitest)

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

**Créer:** `vitest.config.ts`

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
});
```

**Exemple de test:**

```typescript
// src/components/common/__tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '../Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

**Critères de validation:**
- [ ] Vitest configuré
- [ ] Tests écrits pour composants critiques
- [ ] Tests passent

---

### 4.4 Performance Optimizations ⚡ HAUTE

#### ✅ Étape 4.4.1: Code Splitting

**Utiliser React.lazy:**

```typescript
import React, { lazy, Suspense } from 'react';

const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FounderPage = lazy(() => import('./pages/FounderPage'));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      {view === 'catalog' && <CatalogPage />}
      {view === 'contact' && <ContactPage />}
      {view === 'founder' && <FounderPage />}
    </Suspense>
  );
};
```

**Critères de validation:**
- [ ] Pages chargées à la demande
- [ ] Bundle size réduit
- [ ] Loading indicator

---

#### ✅ Étape 4.4.2: Optimisations React

```typescript
// Mémoization
import { memo, useMemo, useCallback } from 'react';

export const ProductCard = memo(({ product }) => {
  // ...
});

// Dans le parent:
const handleClick = useCallback(() => {
  setView('contact');
}, []);

const filteredProducts = useMemo(() => {
  return PRODUCTS.filter(p => p.category === selectedCategory);
}, [selectedCategory]);
```

**Critères de validation:**
- [ ] Composants lourds mémoïsés
- [ ] Pas de re-renders inutiles

---

### 4.5 Déploiement ⚡ CRITIQUE

#### ✅ Étape 4.5.1: Configuration production

**Créer:** `.env.production`

```env
VITE_API_URL=https://api.zoncaglobal.com
VITE_EMAILJS_SERVICE_ID=prod_service_id
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Modifier:** `vite.config.ts`

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }) // Analyse du bundle
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['lucide-react'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  }
});
```

**Critères de validation:**
- [ ] Variables d'environnement production
- [ ] Build optimisé
- [ ] Bundle < 500KB

---

#### ✅ Étape 4.5.2: Déploiement Vercel/Netlify

**Option A: Vercel**

```bash
npm install -g vercel
vercel login
vercel --prod
```

**Créer:** `vercel.json`

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

**Option B: Netlify**

**Créer:** `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

**Critères de validation:**
- [ ] Site déployé
- [ ] HTTPS actif
- [ ] Domaine configuré
- [ ] Performance > 90 sur Lighthouse

---

### 4.6 Monitoring & Maintenance ⚡ MOYENNE

#### ✅ Étape 4.6.1: Error Tracking (Sentry)

```bash
npm install @sentry/react @sentry/vite-plugin
```

**Créer:** `src/lib/sentry.ts`

```typescript
import * as Sentry from "@sentry/react";

export const initSentry = () => {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.MODE,
    integrations: [
      new Sentry.BrowserTracing(),
      new Sentry.Replay()
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
};
```

**Critères de validation:**
- [ ] Sentry configuré
- [ ] Erreurs trackées
- [ ] Alertes configurées

---

## ✅ CHECKLIST FINALE DE MISE EN PRODUCTION

### Fonctionnalités
- [ ] Toutes les pages fonctionnent
- [ ] Navigation fluide
- [ ] Formulaire de contact envoie des emails
- [ ] Bouton WhatsApp ouvre WhatsApp
- [ ] Images optimisées chargent rapidement
- [ ] Responsive sur mobile/tablette/desktop

### Performance
- [ ] Lighthouse Performance > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s
- [ ] Bundle size < 500KB
- [ ] Images < 100KB chacune

### SEO
- [ ] Meta tags sur toutes les pages
- [ ] sitemap.xml accessible
- [ ] robots.txt configuré
- [ ] Schema.org markup présent
- [ ] Lighthouse SEO > 95

### Sécurité
- [ ] HTTPS actif
- [ ] Headers de sécurité configurés
- [ ] Variables sensibles en .env
- [ ] Email masqué contre les bots
- [ ] Validation des inputs

### Accessibilité
- [ ] Lighthouse Accessibility > 90
- [ ] Navigation clavier complète
- [ ] ARIA labels présents
- [ ] Contraste suffisant
- [ ] Alt text sur images

### Contenu
- [ ] Toutes les images réelles (pas de placeholder)
- [ ] Témoignages authentiques
- [ ] Projets documentés
- [ ] Informations de contact exactes
- [ ] Liens sociaux fonctionnels

### Tests
- [ ] Tests sur Chrome
- [ ] Tests sur Firefox
- [ ] Tests sur Safari
- [ ] Tests sur mobile (iOS/Android)
- [ ] Formulaire testé en production

### Monitoring
- [ ] Analytics configuré
- [ ] Error tracking actif
- [ ] Backup configuré

---

## 📞 RESSOURCES & CONTACTS

### Outils recommandés
- **Optimisation images:** https://squoosh.app/
- **Test SEO:** https://search.google.com/test/rich-results
- **Test performance:** https://pagespeed.web.dev/
- **Test accessibilité:** https://wave.webaim.org/
- **Validation HTML:** https://validator.w3.org/

### Documentation
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/
- Vite: https://vitejs.dev/
- EmailJS: https://www.emailjs.com/docs/
- React Hook Form: https://react-hook-form.com/

### Support
- Pour questions techniques: Consulter la documentation
- Pour problèmes de déploiement: Discord Vercel/Netlify
- Pour bugs: GitHub Issues du projet

---

## 📊 MÉTRIQUES DE SUCCÈS

### Avant amélioration (Estimé)
- ⚠️ Performance: 60/100
- ⚠️ SEO: 45/100
- ⚠️ Accessibilité: 70/100
- ⚠️ Best Practices: 75/100

### Après amélioration (Cible)
- ✅ Performance: 90+/100
- ✅ SEO: 95+/100
- ✅ Accessibilité: 90+/100
- ✅ Best Practices: 95+/100

---

## 🎯 PROCHAINES ÉTAPES APRÈS LANCEMENT

1. **Mois 1-3:**
   - Monitorer analytics
   - Collecter feedback utilisateurs
   - Optimiser SEO basé sur les données

2. **Mois 3-6:**
   - Ajouter blog pour content marketing
   - Implémenter chat en direct
   - Créer espace client (login)

3. **Mois 6-12:**
   - Système de devis automatique
   - Calculateur de prix
   - Application mobile (Progressive Web App)

---

**Document créé le:** 6 Décembre 2025
**Dernière mise à jour:** 6 Décembre 2025
**Version:** 1.0
**Auteur:** Claude Code (Assistant IA)

---

**IMPORTANT:** Ce document est un guide vivant. Mettez à jour les statuts au fur et à mesure de votre progression. N'hésitez pas à adapter les étapes selon vos besoins spécifiques.

**Bonne chance avec votre transformation digitale! 🚀**
