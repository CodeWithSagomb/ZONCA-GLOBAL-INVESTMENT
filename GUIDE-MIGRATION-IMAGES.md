# 🔄 Guide de Migration des Images

Ce guide vous accompagne étape par étape pour remplacer les images placeholder Unsplash par vos images réelles optimisées.

---

## 📋 Vue d'Ensemble

**Objectif:** Remplacer 10 images Unsplash par du contenu Zonca authentique
**Durée estimée:** 2-4 heures (avec optimisation)
**Prérequis:** Images sources disponibles, Node.js installé

---

## 🎯 Étape 1: Préparation des Images Sources

### 1.1 Créer le dossier source

```bash
cd C:\Users\pc\Videos\ZONCA-GLOBAL-INVESTMENT
mkdir -p public/images-source/products
mkdir -p public/images-source/projects
mkdir -p public/images-source/hero
mkdir -p public/images-source/team
mkdir -p public/images-source/patterns
```

### 1.2 Placer vos images brutes

Copiez vos images (haute résolution, non optimisées) dans les dossiers correspondants :

```
public/images-source/
├── products/
│   ├── wd50t-thermal-series.jpg       (votre photo WD50T)
│   ├── wd50t-technical-drawing.jpg    (dessin technique)
│   ├── fs50-structural-glazing.jpg    (votre photo FS50)
│   ├── s32-heavy-duty-slider.jpg      (votre photo S32)
│   └── of80-modular-partition.jpg     (votre photo OF80)
├── projects/
│   ├── eko-atlantic-towers.jpg        (photo projet 1)
│   ├── lekki-luxury-villa.jpg         (photo projet 2)
│   └── victoria-island-office.jpg     (photo projet 3)
├── hero/
│   └── hero-background.jpg            (image hero principale)
└── team/
    └── emmanuel-senameh.jpg           (photo CEO)
```

**Notes:**
- Noms de fichiers **exacts** requis (sensible à la casse)
- Formats acceptés: JPG, JPEG, PNG
- Qualité maximale recommandée (l'optimisation viendra après)

---

## 🛠️ Étape 2: Installation & Optimisation

### 2.1 Installer Sharp (outil d'optimisation)

```bash
npm install --save-dev sharp
```

### 2.2 Ajouter le script au package.json

Ouvrez `package.json` et ajoutez dans la section `"scripts"`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "optimize-images": "node scripts/optimize-images.js"
  }
}
```

### 2.3 Lancer l'optimisation

```bash
npm run optimize-images
```

**Résultat attendu:**
```
🚀 Zonca Global Investment - Image Optimization
================================================

✅ Created: public/images/products
✅ Created: public/images/projects
...

📂 Found 10 images to optimize

📸 Processing: wd50t-thermal-series.jpg
   Original: 3000×2000, 2450.3 KB
   ✅ JPG: 800×600, 142.7 KB
   ✅ WebP: 800×600, 89.4 KB
   💾 WebP savings: 37.4%

...

📊 OPTIMIZATION SUMMARY
✅ Success: 10 images
📦 Total JPG size: 1580.5 KB
📦 Total WebP size: 982.3 KB
💾 Total WebP savings: 37.9%

✨ Optimization complete!
```

Vos images optimisées sont maintenant dans `public/images/` !

---

## 📝 Étape 3: Migration du Code

### 3.1 Mettre à jour les produits

Ouvrez `src/constants/products.ts` et remplacez les URLs Unsplash :

**AVANT:**
```typescript
image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfe1?...',
```

**APRÈS:**
```typescript
image: '/images/products/wd50t-thermal-series.jpg',
```

**Modification complète:**

```typescript
import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'wd50t',
    name: 'WD50T Thermal Series',
    category: 'windows-doors',
    shortDesc: 'High-performance thermal break system optimized for energy efficiency in tropical climates.',
    image: '/images/products/wd50t-thermal-series.jpg',  // ✅ MODIFIÉ
    techDrawing: '/images/products/wd50t-technical-drawing.jpg',  // ✅ MODIFIÉ
    specs: [
      { label: 'Alloy', value: '6063-T6' },
      { label: 'Frame Depth', value: '50 mm' },
      { label: 'Insulation', value: 'Polyamide Strip 24mm' },
      { label: 'Glass Capacity', value: 'Double Glazed (24mm)' },
    ],
    features: [
      'Euro-groove standard hardware',
      'Dual-color extrusion capability',
      'High wind-load resistance',
      'Acoustic insulation up to 40dB'
    ]
  },
  {
    id: 'fs50',
    name: 'FS50 Structural Glazing',
    category: 'facades',
    shortDesc: 'Stick curtain wall system for high-rise applications offering seamless glass aesthetics.',
    image: '/images/products/fs50-structural-glazing.jpg',  // ✅ MODIFIÉ
    specs: [
      { label: 'Mullion Face', value: '50 mm' },
      { label: 'Inertia (Ix)', value: 'Up to 1200 cm4' },
      { label: 'Glazing', value: 'Structural Silicone / Cap' },
      { label: 'Max Height', value: '6000mm (single span)' },
    ],
    features: [
      'Integrated water drainage',
      'Earthquake resistant design',
      'Supports heavy glass weights',
      'Rapid installation brackets'
    ]
  },
  {
    id: 's32',
    name: 'S32 Heavy Duty Slider',
    category: 'sliders',
    shortDesc: 'Robust sliding system designed for large span openings and penthouse terraces.',
    image: '/images/products/s32-heavy-duty-slider.jpg',  // ✅ MODIFIÉ
    specs: [
      { label: 'Track Depth', value: '120 mm (3-Track)' },
      { label: 'Sash Height', value: 'Up to 3.0m' },
      { label: 'Rollers', value: 'Stainless Steel (300kg)' },
    ],
    features: [
      'Lift-and-slide mechanism available',
      'Embedded bottom track option',
      'Interlocking reinforced mullion'
    ]
  },
  {
    id: 'of80',
    name: 'OF80 Modular Partition',
    category: 'office',
    shortDesc: 'Demountable aluminum partition system for flexible commercial workspaces.',
    image: '/images/products/of80-modular-partition.jpg',  // ✅ MODIFIÉ
    specs: [
      { label: 'Profile Width', value: '80 mm' },
      { label: 'Infill', value: 'Glass / Melamine / Fabric' },
      { label: 'Door Frames', value: 'Integrated Aluminum' },
    ],
    features: [
      'Concealed wiring channels',
      'Quick assembly clip system',
      'Single or double glazing'
    ]
  }
];
```

### 3.2 Mettre à jour les projets

Ouvrez `src/constants/config.ts` et modifiez la section `PROJECTS`:

**Modification:**

```typescript
export const PROJECTS: Project[] = [
  {
    title: "Eko Atlantic Towers",
    system: "Curtain Wall",
    img: "/images/projects/eko-atlantic-towers.jpg"  // ✅ MODIFIÉ
  },
  {
    title: "Lekki Luxury Villa",
    system: "Thermal Windows",
    img: "/images/projects/lekki-luxury-villa.jpg"  // ✅ MODIFIÉ
  },
  {
    title: "Victoria Island Office",
    system: "Office Glazing",
    img: "/images/projects/victoria-island-office.jpg"  // ✅ MODIFIÉ
  },
];
```

### 3.3 Mettre à jour le Hero

Ouvrez `src/components/sections/Hero.tsx` et modifiez la ligne 15 :

**AVANT:**
```typescript
style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600")' }}
```

**APRÈS:**
```typescript
style={{ backgroundImage: 'url("/images/hero/hero-background.jpg")' }}
```

### 3.4 Mettre à jour la photo du CEO

Ouvrez `src/pages/FounderPage.tsx` et modifiez la ligne 47 :

**AVANT:**
```typescript
src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800"
```

**APRÈS:**
```typescript
src="/images/team/emmanuel-senameh.jpg"
```

### 3.5 Télécharger le pattern graphy

Le pattern est petit (10 KB), vous pouvez le télécharger directement :

```bash
# Windows PowerShell
Invoke-WebRequest -Uri "https://www.transparenttextures.com/patterns/graphy.png" -OutFile "public/images/patterns/graphy.png"
```

Ou téléchargez manuellement depuis: https://www.transparenttextures.com/patterns/graphy.png

Puis mettez à jour `src/pages/FounderPage.tsx` ligne 20 et `src/components/sections/Hero.tsx` ligne 19 :

**APRÈS:**
```typescript
<div className="absolute inset-0 bg-[url('/images/patterns/graphy.png')] opacity-20"></div>
```

---

## ✅ Étape 4: Tests

### 4.1 Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez http://localhost:3000

### 4.2 Vérifier l'affichage

Vérifiez que toutes les images s'affichent correctement :

- [ ] **Homepage Hero** - Image de fond chargée
- [ ] **Section Products** - 4 produits avec images
- [ ] **Page Catalog** - Toutes les images produits
- [ ] **Product Detail** - Image + dessin technique (WD50T)
- [ ] **Projects Section** - 3 projets avec images
- [ ] **Founder Page** - Photo Emmanuel Senameh
- [ ] **Patterns** - Overlay visible sur Hero et Founder page

### 4.3 Tester dans la console développeur

Ouvrez DevTools (F12) → onglet Network :

- Filtrer par "Img"
- Rafraîchir la page
- Vérifier que les images se chargent depuis `/images/` (pas Unsplash)
- Vérifier la taille des images (< 200 KB chacune)

### 4.4 Tester les fallbacks

Renommez temporairement une image pour tester le comportement en cas d'erreur.

---

## 🚀 Étape 5: Build de Production

### 5.1 Build

```bash
npm run build
```

Vérifiez qu'il n'y a pas d'erreurs de build.

### 5.2 Vérifier la taille du bundle

Le terminal devrait afficher :

```
dist/index.html                   1.12 kB │ gzip:   0.59 kB
dist/assets/index-[hash].css     27.27 kB │ gzip:   5.32 kB
dist/assets/index-[hash].js     308.44 kB │ gzip:  94.98 kB
```

Les images ne sont **pas** incluses dans le bundle JS !

### 5.3 Preview production

```bash
npm run preview
```

Testez le site en mode production.

---

## 📊 Étape 6: Validation Performance

### 6.1 Google Lighthouse

1. Ouvrez Chrome DevTools (F12)
2. Onglet "Lighthouse"
3. Cochez "Performance" + "SEO"
4. Cliquez "Analyze page load"

**Objectifs:**
- Performance: > 90
- SEO: > 95
- Best Practices: > 90

### 6.2 Vérifier le chargement des images

Dans le rapport Lighthouse, section "Opportunities":
- ✅ "Properly size images" devrait être vert
- ✅ "Serve images in next-gen formats" (si WebP supporté)
- ✅ "Efficiently encode images"

---

## 🎨 Option Avancée: Utiliser le Composant OptimizedImage

Pour des performances encore meilleures, utilisez le composant `OptimizedImage` :

### Mise à jour de ProductCard.tsx

**AVANT:**
```typescript
<img
  src={product.image}
  alt={product.name}
  className="w-full h-64 object-cover"
/>
```

**APRÈS:**
```typescript
import { OptimizedImage } from '../common/OptimizedImage';

<OptimizedImage
  src={product.image}
  webp={product.image.replace('.jpg', '.webp')}
  alt={product.name}
  className="w-full h-64 object-cover"
  loading="lazy"
/>
```

Répétez pour tous les composants qui affichent des images.

---

## 🔍 Troubleshooting

### ❌ Les images ne s'affichent pas

**Problème:** Page blanche ou images cassées

**Solutions:**
1. Vérifiez les chemins: `/images/products/...` (avec `/` au début)
2. Vérifiez les noms de fichiers (sensible à la casse)
3. Vérifiez que les images sont bien dans `public/images/`
4. Ouvrez la console (F12) pour voir les erreurs 404

### ❌ "Sharp not found"

**Problème:** Erreur lors de `npm run optimize-images`

**Solution:**
```bash
npm install --save-dev sharp
```

Si l'installation échoue (Windows), installez les build tools:
```bash
npm install --global --production windows-build-tools
```

### ❌ Images trop lourdes

**Problème:** Images > 200 KB après optimisation

**Solutions:**
1. Réduire la qualité JPG dans `optimize-images.js` (80 → 70)
2. Réduire les dimensions (800×600 → 600×450)
3. Utiliser un outil externe comme TinyPNG

### ❌ Pattern graphy ne se charge pas

**Problème:** Fond uni au lieu du pattern

**Solution:**
1. Téléchargez manuellement: https://www.transparenttextures.com/patterns/graphy.png
2. Placez dans `public/images/patterns/graphy.png`
3. Vérifiez le chemin: `bg-[url('/images/patterns/graphy.png')]`

---

## 📦 Résumé des Fichiers Modifiés

Au final, vous aurez modifié **5 fichiers** :

1. ✅ `src/constants/products.ts` - Produits (4 images)
2. ✅ `src/constants/config.ts` - Projets (3 images)
3. ✅ `src/components/sections/Hero.tsx` - Hero background (1 image)
4. ✅ `src/pages/FounderPage.tsx` - CEO photo + pattern (2 images)
5. ✅ `package.json` - Script d'optimisation

**Nouveaux fichiers créés:**

- `public/images/` (dossier avec images optimisées)
- `src/constants/images.ts` (configuration centralisée - optionnel)
- `src/components/common/OptimizedImage.tsx` (composant - optionnel)
- `scripts/optimize-images.js` (script d'optimisation)

---

## 🎯 Checklist Finale

Avant de déployer en production :

- [ ] Toutes les images sources sont dans `public/images-source/`
- [ ] Script d'optimisation exécuté avec succès
- [ ] Images optimisées générées dans `public/images/`
- [ ] 5 fichiers code mis à jour
- [ ] Tests en mode dev réussis (npm run dev)
- [ ] Build production réussi (npm run build)
- [ ] Performance Lighthouse > 90
- [ ] Toutes les images s'affichent correctement
- [ ] Pas d'erreurs 404 dans la console
- [ ] Taille totale des images < 3 MB

---

## 🚀 Prochaines Étapes Recommandées

### 1. CDN pour Images (Optionnel)

Pour des performances optimales en production :

- **Cloudinary:** Hébergement + optimisation automatique
- **ImageKit:** CDN avec transformations
- **Vercel Image Optimization:** Si déployé sur Vercel

### 2. Lazy Loading Avancé

Implémenter Intersection Observer pour charger les images au scroll.

### 3. Responsive Images

Générer plusieurs tailles (thumbnail, medium, large) :

```typescript
<picture>
  <source media="(min-width: 1024px)" srcSet="/images/hero/hero-large.webp">
  <source media="(min-width: 768px)" srcSet="/images/hero/hero-medium.webp">
  <img src="/images/hero/hero-small.jpg" alt="Hero">
</picture>
```

---

**Besoin d'aide ?** Contactez-moi pour toute question sur la migration !
