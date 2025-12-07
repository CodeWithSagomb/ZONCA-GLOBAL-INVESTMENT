# ✅ Checklist Pré-Déploiement - Zonca Global Investment

Vérifiez tous ces points avant de déployer en production.

---

## 🎯 Code et Build

- [x] Build de production fonctionne (`npm run build`)
- [x] Aucune erreur TypeScript
- [x] Aucun warning critique
- [x] Bundle size acceptable (< 500 KB total)
- [x] Code CSS optimisé (pas de conflits)

**Résultat actuel :**
- ✅ JS Bundle : 308 KB (94.8 KB gzippé)
- ✅ CSS Bundle : 27.2 KB (5.3 KB gzippé)
- ✅ Build time : ~8 secondes

---

## 📸 Images et Assets

- [x] Images optimisées (sharp)
- [x] Images dans `public/images/` (pas images-source)
- [x] Format WebP disponible
- [x] Taille des images raisonnable (< 200 KB chacune)
- [ ] **TODO:** Ajouter images manquantes :
  - [ ] `hero-background.jpg` (Hero section)
  - [ ] `eko-atlantic-towers.jpg` (Projets)
  - [ ] `lekki-luxury-villa.jpg` (Projets)
  - [ ] `victoria-island-office.jpg` (Projets)

**Images actuellement optimisées :**
- ✅ 6 produits (WD50T, FS50, S32, OF80 + Commercial_tower)
- ✅ 1 photo équipe (Emmanuel Senameh)
- ✅ 1 pattern (graphy.png)

---

## 🔐 Variables d'Environnement

### Obligatoires pour Production

- [ ] `VITE_GA_MEASUREMENT_ID` - Google Analytics 4
- [ ] `VITE_EMAILJS_SERVICE_ID` - EmailJS
- [ ] `VITE_EMAILJS_TEMPLATE_ID` - EmailJS
- [ ] `VITE_EMAILJS_PUBLIC_KEY` - EmailJS

**Note :** Ces variables doivent être configurées dans Vercel lors du déploiement.

### Fichiers de Configuration

- [x] `.env.example` - Template créé
- [x] `.env.local` - Ne pas commit (gitignored)
- [x] Variables utilisées dans le code avec fallbacks

---

## 📦 Configuration Vercel

- [x] `vercel.json` créé
- [x] `.vercelignore` créé
- [x] Rewrites configurés (SPA routing)
- [x] Headers de cache configurés
- [x] Framework détecté : Vite

---

## 🧪 Tests Fonctionnels

### Pages Principales

- [ ] **Home** - Toutes les sections affichées
- [ ] **Catalog** - Produits et filtres fonctionnent
- [ ] **Services** - Contenu affiché
- [ ] **Projects** - Images de projets (actuellement placeholder)
- [ ] **Leadership** - Photo CEO affichée
- [ ] **Contact** - Formulaire fonctionnel

### Fonctionnalités

- [ ] **Navigation** - Tous les liens fonctionnent
- [ ] **Formulaire Contact** - Envoi email fonctionne
- [ ] **WhatsApp Button** - Ouvre WhatsApp (+234 805 540 8624)
- [ ] **Product Filtering** - Filtres de catégories fonctionnent
- [ ] **Product Detail** - Vue détaillée des produits
- [ ] **Responsive Design** - Mobile, tablette, desktop

---

## 🌐 SEO et Performance

### SEO

- [x] Meta tags dynamiques (react-helmet-async)
- [x] Schema.org structured data
- [x] Sitemap.xml créé (`public/sitemap.xml`)
- [x] robots.txt créé (`public/robots.txt`)
- [x] Balises Open Graph
- [x] Twitter Cards

### Performance

- [x] Images optimisées et lazy loading
- [x] Code splitting (architecture modulaire)
- [x] CSS minimal (Tailwind purge)
- [ ] **À tester après déploiement :** Lighthouse score

**Objectifs Lighthouse :**
- Performance : > 90
- Accessibility : > 90
- Best Practices : > 90
- SEO : > 90

---

## 📱 Responsive et Compatibilité

### Breakpoints à Tester

- [ ] Mobile (< 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (> 1024px)

### Navigateurs à Tester

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (Mac/iOS)
- [ ] Mobile browsers

---

## 🔗 Services Externes

### Google Analytics 4

- [ ] Compte créé sur https://analytics.google.com
- [ ] Propriété configurée
- [ ] Measurement ID obtenu (G-XXXXXXXXXX)
- [ ] Variable d'environnement configurée
- [ ] Test en mode "Real-time"

### EmailJS

- [ ] Compte créé sur https://www.emailjs.com
- [ ] Service email configuré (Gmail, Outlook, etc.)
- [ ] Template créé avec toutes les variables :
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{company}}`
  - `{{phone}}`
  - `{{project_type}}`
  - `{{message}}`
  - `{{to_email}}`
- [ ] Clés obtenues (Service ID, Template ID, Public Key)
- [ ] Variables d'environnement configurées
- [ ] Test d'envoi effectué

### WhatsApp Business

- [ ] Numéro vérifié : +234 805 540 8624
- [ ] Message pré-rempli configuré
- [ ] Testé sur mobile et desktop

---

## 🚀 Git et GitHub

- [ ] Repository GitHub créé
- [ ] `.gitignore` configuré correctement
- [ ] Fichiers sensibles non commités (.env.local)
- [ ] Code pushé sur GitHub
- [ ] Branche `main` à jour

### Fichiers à NE PAS commit

- ❌ `.env.local`
- ❌ `node_modules/`
- ❌ `dist/` (build artifacts)
- ❌ Fichiers IDE (.vscode, .idea)

---

## 📄 Documentation

- [x] README.md - Guide de démarrage
- [x] DEPLOYMENT-GUIDE.md - Guide de déploiement Vercel
- [x] PRE-DEPLOYMENT-CHECKLIST.md - Cette checklist
- [x] DEMARRAGE-RAPIDE.md - Quick start en français
- [x] AMELIORATION-ROADMAP.md - Roadmap des améliorations
- [x] IMAGES-QUICK-START.md - Guide images
- [x] Autres documentations techniques

---

## 🔒 Sécurité

- [x] Variables d'environnement sécurisées (pas dans le code)
- [x] Validation des formulaires (Zod)
- [x] Pas de clés API exposées dans le code
- [x] Headers de sécurité (Vercel par défaut)
- [x] HTTPS (automatique sur Vercel)

---

## 📊 Monitoring

### Après Déploiement

- [ ] Configurer Vercel Analytics
- [ ] Vérifier Google Analytics (données en temps réel)
- [ ] Tester le formulaire de contact
- [ ] Vérifier les emails reçus
- [ ] Monitorer les erreurs (Console Vercel)

---

## 🎨 Contenu

### Textes

- [x] Informations entreprise correctes
- [x] Descriptions produits complètes
- [x] Coordonnées à jour :
  - Email : zoncaglobalinvestment@gmail.com
  - Téléphone : +234 805 540 8624
  - Adresse : 48 Lambe Iluyomade Street, Okota, Lagos

### Images (État Actuel)

✅ **Complétées :**
- Produits (6 images)
- CEO Emmanuel Senameh
- Pattern de fond

⚠️ **Manquantes (utilise placeholder) :**
- Hero background
- 3 projets (Eko Atlantic, Lekki Villa, Victoria Island)

---

## 🎯 Dernières Vérifications

### Build Local

```bash
# Clean build
rm -rf dist node_modules
npm install
npm run build
npm run preview
```

Vérifier sur http://localhost:4173

### Taille des Fichiers

```bash
# Analyser le bundle
npm run build
ls -lh dist/assets/
```

**Limites recommandées :**
- JS total : < 500 KB (gzippé < 150 KB)
- CSS total : < 50 KB (gzippé < 10 KB)
- Chaque image : < 200 KB

---

## ✅ Prêt pour le Déploiement ?

**Cochez tous les points critiques :**

### Critiques (Obligatoire)

- [x] Build fonctionne sans erreur
- [ ] Variables d'environnement EmailJS configurées
- [ ] Formulaire de contact testé
- [x] Navigation fonctionne
- [x] Images optimisées

### Important (Recommandé)

- [ ] Google Analytics configuré
- [ ] Toutes les pages testées
- [ ] Responsive testé
- [ ] Code pushé sur GitHub

### Nice to Have (Optionnel)

- [ ] Images projets ajoutées
- [ ] Hero background ajouté
- [ ] Domaine personnalisé prêt
- [ ] Lighthouse > 90

---

## 🚀 Commande de Déploiement

Une fois TOUT vérifié :

### Via Vercel Dashboard

1. https://vercel.com
2. Import project from GitHub
3. Configurer variables d'environnement
4. Deploy !

### Via CLI

```bash
vercel --prod
```

---

## 📞 Contact Post-Déploiement

**Après le déploiement, vérifiez immédiatement :**

1. Site accessible (URL Vercel)
2. Envoi d'un email test via le formulaire
3. Vérification Google Analytics (Real-time)
4. Test WhatsApp button
5. Test sur mobile

**Si problème, consultez :**
- Logs Vercel : Dashboard → Deployments → View Function Logs
- Console navigateur : F12 → Console
- DEPLOYMENT-GUIDE.md → Section Troubleshooting

---

**Date de préparation :** 2025-12-07
**Statut :** 🟡 Presque prêt (variables d'environnement à configurer)
**Build :** ✅ Fonctionne
**Optimisations :** ✅ Complètes
