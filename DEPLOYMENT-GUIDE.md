# 🚀 Guide de Déploiement sur Vercel - Zonca Global Investment

Guide complet pour déployer votre site sur Vercel en production.

---

## ✅ Pré-requis

Avant de déployer, assurez-vous que :

- [x] Le build de production fonctionne (`npm run build`)
- [x] Toutes les images sont optimisées
- [x] Les variables d'environnement sont prêtes
- [x] Vous avez un compte GitHub (recommandé)
- [x] Vous avez un compte Vercel (gratuit)

---

## 📋 Étape 1 : Préparer le Projet

### 1.1 Vérification Finale du Code

```bash
# Tester le build de production
npm run build

# Prévisualiser le build
npm run preview
```

Vérifiez que tout fonctionne correctement sur http://localhost:4173

### 1.2 Vérifier les Fichiers de Configuration

✅ **Fichiers créés pour Vercel :**
- `vercel.json` - Configuration de déploiement
- `.vercelignore` - Fichiers à ignorer

---

## 📦 Étape 2 : Pousser sur GitHub (Recommandé)

### 2.1 Initialiser Git (si pas déjà fait)

```bash
# Initialiser le dépôt
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "🎉 Initial commit - Ready for production deployment"
```

### 2.2 Créer un Repository GitHub

1. Allez sur https://github.com/new
2. Nommez votre repository : `zonca-global-investment`
3. Choisissez **Private** (recommandé) ou **Public**
4. **Ne cochez pas** "Initialize with README" (déjà fait)
5. Cliquez sur **Create repository**

### 2.3 Pousser le Code

```bash
# Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE-USERNAME/zonca-global-investment.git

# Pousser le code
git branch -M main
git push -u origin main
```

---

## 🌐 Étape 3 : Déployer sur Vercel

### Méthode 1 : Déploiement depuis GitHub (Recommandé)

#### 3.1 Connecter Vercel à GitHub

1. Allez sur https://vercel.com
2. Cliquez sur **Sign Up** (si nouveau) ou **Login**
3. Choisissez **Continue with GitHub**
4. Autorisez Vercel à accéder à vos repositories

#### 3.2 Importer le Projet

1. Cliquez sur **Add New...** → **Project**
2. Sélectionnez votre repository `zonca-global-investment`
3. Cliquez sur **Import**

#### 3.3 Configurer le Projet

**Framework Preset :** Vercel détectera automatiquement **Vite**

**Build Settings :**
- Build Command : `npm run build` ✅ (déjà configuré)
- Output Directory : `dist` ✅ (déjà configuré)
- Install Command : `npm install` ✅ (déjà configuré)

**Root Directory :** Laissez vide (à la racine)

#### 3.4 Configurer les Variables d'Environnement

Dans la section **Environment Variables**, ajoutez :

| Name | Value | Environnement |
|------|-------|---------------|
| `VITE_GA_MEASUREMENT_ID` | Votre ID Google Analytics (ex: G-XXXXXXXXXX) | Production |
| `VITE_EMAILJS_SERVICE_ID` | Votre Service ID EmailJS | Production |
| `VITE_EMAILJS_TEMPLATE_ID` | Votre Template ID EmailJS | Production |
| `VITE_EMAILJS_PUBLIC_KEY` | Votre Public Key EmailJS | Production |

**Note :** Les variables `VITE_*` sont nécessaires pour que Vite les inclue dans le build.

#### 3.5 Déployer

1. Cliquez sur **Deploy**
2. Attendez 2-3 minutes (build + déploiement)
3. 🎉 Votre site est en ligne !

---

### Méthode 2 : Déploiement Direct (CLI)

Si vous préférez utiliser la ligne de commande :

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour déployer en production
vercel --prod
```

---

## 🔐 Étape 4 : Configurer les Services Externes

### 4.1 Google Analytics 4

1. Allez sur https://analytics.google.com
2. Créez une propriété pour votre site
3. Obtenez le **Measurement ID** (format: `G-XXXXXXXXXX`)
4. Ajoutez-le dans les variables d'environnement Vercel

### 4.2 EmailJS

1. Allez sur https://www.emailjs.com
2. Créez un compte gratuit
3. Configurez un service email (Gmail, Outlook, etc.)
4. Créez un template d'email avec ces variables :
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{company}}`
   - `{{phone}}`
   - `{{project_type}}`
   - `{{message}}`
   - `{{to_email}}`
5. Obtenez vos clés :
   - Service ID
   - Template ID
   - Public Key
6. Ajoutez-les dans Vercel

### 4.3 WhatsApp Button

Le bouton WhatsApp est déjà configuré avec le numéro :
`+234 805 540 8624`

Pour le modifier, éditez `src/constants/config.ts` ligne 1 :

```typescript
export const COMPANY_PHONE = '+234 805 540 8624'; // Modifier ici
```

---

## 🎯 Étape 5 : Configurer le Domaine Personnalisé

### 5.1 Ajouter un Domaine

1. Dans le dashboard Vercel, allez dans votre projet
2. Cliquez sur **Settings** → **Domains**
3. Cliquez sur **Add Domain**
4. Entrez votre domaine (ex: `zoncaglobal.com`)
5. Suivez les instructions pour configurer les DNS

### 5.2 Configuration DNS

Chez votre registrar (Namecheap, GoDaddy, etc.), ajoutez :

**Type A Record :**
- Name: `@`
- Value: `76.76.21.21`

**Type CNAME Record :**
- Name: `www`
- Value: `cname.vercel-dns.com`

**Temps de propagation :** 24-48 heures maximum

---

## ✅ Étape 6 : Vérifications Post-Déploiement

### Checklist de Vérification

Testez votre site déployé :

- [ ] **Page d'accueil** - Toutes les sections s'affichent
- [ ] **Navigation** - Tous les liens fonctionnent
- [ ] **Images** - Toutes les images se chargent
- [ ] **Catalogue Produits** - Filtrage et détails fonctionnent
- [ ] **Formulaire Contact** - Envoi d'email fonctionne
- [ ] **WhatsApp Button** - Ouvre WhatsApp correctement
- [ ] **Responsive** - Fonctionne sur mobile et tablette
- [ ] **Performance** - Chargement rapide (< 3 secondes)
- [ ] **SEO** - Balises meta présentes (View Source)
- [ ] **Analytics** - Google Analytics enregistre les visites

### Tests de Performance

```bash
# Installer Lighthouse CLI
npm install -g lighthouse

# Tester votre site
lighthouse https://votre-domaine.vercel.app --view
```

**Objectifs :**
- Performance : > 90
- Accessibility : > 90
- Best Practices : > 90
- SEO : > 90

---

## 🔄 Étape 7 : Déploiements Futurs

### Déploiements Automatiques

Une fois connecté à GitHub, **chaque push** sur la branche `main` déclenchera un déploiement automatique !

```bash
# Faire des modifications
git add .
git commit -m "✨ Ajout d'une nouvelle fonctionnalité"
git push

# Vercel déploiera automatiquement ! 🚀
```

### Déploiements de Preview

Chaque pull request créera une **preview URL** unique pour tester avant de merger.

### Rollback

Si un déploiement a des problèmes :

1. Allez dans **Deployments** sur Vercel
2. Trouvez le dernier déploiement qui fonctionnait
3. Cliquez sur les 3 points → **Promote to Production**

---

## 📊 Étape 8 : Monitoring et Maintenance

### Analytics Vercel

Vercel fournit gratuitement :
- Nombre de visiteurs
- Temps de chargement
- Bande passante utilisée
- Erreurs

Accès : Dashboard Vercel → Votre projet → **Analytics**

### Mises à Jour

```bash
# Mettre à jour les dépendances
npm update

# Vérifier les vulnérabilités
npm audit

# Corriger les vulnérabilités
npm audit fix

# Tester
npm run build

# Déployer
git add .
git commit -m "⬆️ Update dependencies"
git push
```

---

## 🆘 Troubleshooting

### Problème : Build Failed

**Solution :**
1. Vérifiez les logs de build dans Vercel
2. Testez localement : `npm run build`
3. Vérifiez les variables d'environnement

### Problème : Images ne s'affichent pas

**Solution :**
1. Vérifiez que les images sont dans `public/images/` (pas `public/images-source/`)
2. Les chemins doivent commencer par `/images/` (avec le slash)

### Problème : EmailJS ne fonctionne pas

**Solution :**
1. Vérifiez les variables d'environnement dans Vercel
2. Testez les clés EmailJS sur https://www.emailjs.com
3. Vérifiez que le template existe
4. Assurez-vous que toutes les variables sont préfixées par `VITE_`

### Problème : Analytics ne fonctionne pas

**Solution :**
1. Vérifiez le Measurement ID dans les variables d'environnement
2. Attendez 24-48h pour voir les données dans Google Analytics
3. Utilisez le mode "Real-time" pour tester immédiatement

---

## 📞 Support

**Vercel Documentation :** https://vercel.com/docs
**Vite Documentation :** https://vitejs.dev/guide/
**EmailJS Documentation :** https://www.emailjs.com/docs/

---

## 🎉 Félicitations !

Votre site **Zonca Global Investment** est maintenant en ligne et accessible dans le monde entier !

**URLs d'exemple après déploiement :**
- Production : `https://zonca-global-investment.vercel.app`
- Avec domaine personnalisé : `https://zoncaglobal.com`

---

## 📝 Checklist Finale

Avant de célébrer, vérifiez :

- [ ] Site accessible publiquement
- [ ] Domaine personnalisé configuré (optionnel)
- [ ] Google Analytics configuré et fonctionnel
- [ ] EmailJS configuré et testé
- [ ] Toutes les images affichées correctement
- [ ] Formulaire de contact testé
- [ ] WhatsApp button testé
- [ ] Site testé sur mobile
- [ ] Performance > 90 sur Lighthouse
- [ ] SEO vérifié

---

**Dernière mise à jour :** Décembre 2025
**Version :** 1.0.0
**Statut :** ✅ Prêt pour la production
