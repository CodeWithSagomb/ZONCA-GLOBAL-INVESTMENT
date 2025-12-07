# 🚀 Remplacement des Images - Démarrage Rapide

Guide ultra-simplifié pour remplacer les images placeholder en 15 minutes.

---

## ✅ Checklist Express

### Étape 1: Préparer les Images (5 min)

Placez vos 10 images dans `public/images-source/` :

```
public/images-source/
├── products/
│   ├── wd50t-thermal-series.jpg
│   ├── wd50t-technical-drawing.jpg
│   ├── fs50-structural-glazing.jpg
│   ├── s32-heavy-duty-slider.jpg
│   └── of80-modular-partition.jpg
├── projects/
│   ├── eko-atlantic-towers.jpg
│   ├── lekki-luxury-villa.jpg
│   └── victoria-island-office.jpg
├── hero/
│   └── hero-background.jpg
└── team/
    └── emmanuel-senameh.jpg
```

**IMPORTANT:** Noms de fichiers exacts requis !

---

### Étape 2: Installer & Optimiser (3 min)

```bash
# Installer l'outil d'optimisation
npm install --save-dev sharp

# Lancer l'optimisation
npm run optimize-images
```

**Résultat:** Images optimisées créées dans `public/images/`

---

### Étape 3: Mettre à Jour le Code (5 min)

#### A. Produits - `src/constants/products.ts`

Remplacez les URLs Unsplash par :

```typescript
// WD50T
image: '/images/products/wd50t-thermal-series.jpg',
techDrawing: '/images/products/wd50t-technical-drawing.jpg',

// FS50
image: '/images/products/fs50-structural-glazing.jpg',

// S32
image: '/images/products/s32-heavy-duty-slider.jpg',

// OF80
image: '/images/products/of80-modular-partition.jpg',
```

#### B. Projets - `src/constants/config.ts`

```typescript
export const PROJECTS: Project[] = [
  {
    title: "Eko Atlantic Towers",
    system: "Curtain Wall",
    img: "/images/projects/eko-atlantic-towers.jpg"
  },
  {
    title: "Lekki Luxury Villa",
    system: "Thermal Windows",
    img: "/images/projects/lekki-luxury-villa.jpg"
  },
  {
    title: "Victoria Island Office",
    system: "Office Glazing",
    img: "/images/projects/victoria-island-office.jpg"
  },
];
```

#### C. Hero - `src/components/sections/Hero.tsx` (ligne 15)

```typescript
style={{ backgroundImage: 'url("/images/hero/hero-background.jpg")' }}
```

#### D. CEO - `src/pages/FounderPage.tsx` (ligne 47)

```typescript
src="/images/team/emmanuel-senameh.jpg"
```

#### E. Pattern - `src/pages/FounderPage.tsx` (ligne 20) et `src/components/sections/Hero.tsx` (ligne 19)

```typescript
<div className="absolute inset-0 bg-[url('/images/patterns/graphy.png')] opacity-20"></div>
```

Téléchargez graphy.png depuis:
https://www.transparenttextures.com/patterns/graphy.png
→ Placez dans `public/images/patterns/graphy.png`

---

### Étape 4: Tester (2 min)

```bash
npm run dev
```

Ouvrez http://localhost:3000 et vérifiez :
- ✅ Hero background s'affiche
- ✅ 4 produits avec images
- ✅ 3 projets avec images
- ✅ Photo CEO sur page Leadership

---

## 🎯 C'est Tout !

Votre site utilise maintenant vos images réelles optimisées.

---

## 📚 Besoin de Plus de Détails ?

- **Spécifications complètes:** `IMAGE-SPECIFICATIONS.md`
- **Guide détaillé:** `GUIDE-MIGRATION-IMAGES.md`
- **Configuration avancée:** `src/constants/images.ts`

---

## 🆘 Problèmes Fréquents

**Images ne s'affichent pas ?**
- Vérifiez les chemins (doivent commencer par `/images/`)
- Vérifiez les noms de fichiers (sensible à la casse)
- Ouvrez F12 → Console pour voir les erreurs

**Sharp ne s'installe pas ?** (Windows)
```bash
npm install --global --production windows-build-tools
npm install --save-dev sharp
```

**Images trop lourdes ?**
- Réduisez la qualité dans `scripts/optimize-images.js`
- Ou utilisez https://tinypng.com manuellement
