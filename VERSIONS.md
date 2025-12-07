# 📦 VERSIONS DES DÉPENDANCES - ZONCA GLOBAL INVESTMENT

**Dernière mise à jour:** 6 Décembre 2025
**Statut:** ✅ Production Ready

---

## 🎯 STACK TECHNIQUE ACTUELLE

### ⚛️ Framework & Librairies Core

| Package | Version | Statut | Notes |
|---------|---------|--------|-------|
| **React** | 18.3.1 | ✅ Stable | Version production-ready recommandée |
| **React DOM** | 18.3.1 | ✅ Stable | Compatible React 18 |
| **TypeScript** | 5.6.3 | ✅ Stable | Type safety complet |
| **Vite** | 5.4.10 | ✅ Stable | Build tool ultra-rapide |

### 🎨 UI & Icons

| Package | Version | Statut | Notes |
|---------|---------|--------|-------|
| **Lucide React** | 0.460.0 | ✅ Stable | Icons library moderne |
| **Tailwind CSS** | - | 🔜 À installer | Phase 2 du roadmap |

### 🔧 Outils de Développement

| Package | Version | Type | Notes |
|---------|---------|------|-------|
| **@vitejs/plugin-react** | 4.3.3 | DevDep | Plugin React pour Vite |
| **@types/react** | 18.3.12 | DevDep | Types TypeScript React |
| **@types/react-dom** | 18.3.1 | DevDep | Types TypeScript React DOM |
| **@types/node** | 22.9.0 | DevDep | Types Node.js |

---

## 🚀 PROCHAINES INSTALLATIONS (Roadmap Phase 1)

Ces packages seront installés lors de la restructuration :

### Formulaires & Validation
```bash
npm install react-hook-form zod @hookform/resolvers
```

| Package | Version recommandée | Usage |
|---------|-------------------|-------|
| **react-hook-form** | ^7.53.0 | Gestion de formulaires performante |
| **zod** | ^3.23.8 | Schéma de validation TypeScript |
| **@hookform/resolvers** | ^3.9.0 | Intégration Zod + React Hook Form |

### SEO & Meta Tags
```bash
npm install react-helmet-async
```

| Package | Version recommandée | Usage |
|---------|-------------------|-------|
| **react-helmet-async** | ^2.0.5 | Meta tags dynamiques + SEO |

### HTTP Client
```bash
npm install axios
```

| Package | Version recommandée | Usage |
|---------|-------------------|-------|
| **axios** | ^1.7.7 | Requêtes HTTP vers API/Backend |

### Email Service
```bash
npm install @emailjs/browser
```

| Package | Version recommandée | Usage |
|---------|-------------------|-------|
| **@emailjs/browser** | ^4.4.1 | Envoi d'emails depuis le formulaire |

---

## 🎨 PROCHAINES INSTALLATIONS (Roadmap Phase 2)

### Tailwind CSS & Plugins
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

| Package | Version recommandée | Type | Usage |
|---------|-------------------|------|-------|
| **tailwindcss** | ^3.4.15 | DevDep | Framework CSS utility-first |
| **postcss** | ^8.4.49 | DevDep | Transformation CSS |
| **autoprefixer** | ^10.4.20 | DevDep | Préfixes CSS automatiques |

---

## 📊 INSTALLATIONS OPTIONNELLES

### Analytics
```bash
npm install react-ga4
```

### Error Tracking
```bash
npm install @sentry/react @sentry/vite-plugin
```

### Testing
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

### Optimisation Images
```bash
npm install sharp          # Pour optimisation côté serveur
npm install react-lazy-load-image-component
```

---

## 🔄 POLITIQUE DE MISE À JOUR

### React & React DOM
- **Version actuelle:** 18.3.1
- **Politique:** Ne PAS upgrader vers React 19.x avant Q3 2025
- **Raison:** Attendre stabilisation complète de l'écosystème
- **Prochaine upgrade:** React 18.4.x (patches de sécurité uniquement)

### Vite
- **Version actuelle:** 5.4.10
- **Politique:** Suivre les versions 5.x (stable)
- **Éviter:** Vite 6.x pour l'instant (breaking changes)
- **Upgrade recommandée:** 5.x patches seulement

### TypeScript
- **Version actuelle:** 5.6.3
- **Politique:** Rester sur 5.6.x pour stabilité
- **Upgrade:** Possible vers 5.7.x si nécessaire

### Lucide React
- **Version actuelle:** 0.460.0
- **Politique:** Mettre à jour tous les 2-3 mois
- **Compatible:** Toute version 0.4xx.x

---

## 🛡️ SÉCURITÉ

### Audit régulier
```bash
# Vérifier les vulnérabilités
npm audit

# Voir les détails
npm audit --json

# Corriger (avec précaution)
npm audit fix
```

### Vulnérabilités actuelles
- **esbuild:** Moderate (dev only, non-critique)
- **Action:** Surveiller, corriger lors de prochaine mise à jour Vite

---

## 📝 NOTES DE COMPATIBILITÉ

### React 18.3.1
✅ **Compatible avec:**
- Tous les hooks modernes
- Concurrent Rendering
- Automatic Batching
- Suspense
- Server Components (Next.js 13+)

❌ **Non compatible avec:**
- Anciennes librairies React 16.x ou antérieures
- Class components obsolètes (migration requise)

### TypeScript 5.6.3
✅ **Fonctionnalités utilisées:**
- Types stricts
- Interfaces
- Génériques
- Type inference améliorée

---

## 🔍 COMMANDES UTILES

### Vérifier versions installées
```bash
npm list react react-dom
npm list --depth=0
```

### Vérifier versions disponibles
```bash
npm outdated
npm view react versions
```

### Mettre à jour un package spécifique
```bash
npm update lucide-react
npm install lucide-react@latest
```

### Installer une version spécifique
```bash
npm install react@18.3.1 --save-exact
```

---

## 📚 RESSOURCES

### Documentation officielle
- **React 18:** https://react.dev/blog/2022/03/29/react-v18
- **Vite:** https://vitejs.dev/
- **TypeScript:** https://www.typescriptlang.org/docs/
- **Lucide:** https://lucide.dev/guide/packages/lucide-react

### Migration guides
- **React 17 → 18:** https://react.dev/blog/2022/03/08/react-18-upgrade-guide
- **Vite migration:** https://vitejs.dev/guide/migration.html

---

**Maintenu par:** Équipe de développement Zonca Global
**Prochaine révision:** Après Phase 1 du roadmap
