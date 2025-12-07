# 🚀 DÉMARRAGE RAPIDE - ZONCA GLOBAL INVESTMENT

**Version:** 1.0 - Post Phase 1
**Date:** 6 Décembre 2025

---

## ⚡ DÉMARRAGE EN 3 ÉTAPES

### 1️⃣ Installer les dépendances (si pas déjà fait)
```bash
npm install
```

### 2️⃣ Configurer EmailJS (optionnel mais recommandé)

**Créer le fichier `.env.local` à la racine:**
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

> **Note:** Sans cette configuration, le formulaire affichera une erreur. Voir ci-dessous pour configurer EmailJS.

### 3️⃣ Lancer l'application
```bash
npm run dev
```

**Ouvrir dans le navigateur:** http://localhost:5173

---

## 📧 CONFIGURATION EMAILJS (5 minutes)

### Étape 1: Créer un compte
1. Aller sur https://www.emailjs.com/
2. Cliquer sur "Sign Up" (gratuit)
3. Confirmer votre email

### Étape 2: Ajouter un service email
1. Dans le dashboard, cliquer sur "Email Services"
2. Cliquer "Add New Service"
3. Choisir votre fournisseur (Gmail recommandé)
4. Suivre les instructions de connexion
5. **Copier le Service ID**

### Étape 3: Créer un template
1. Cliquer sur "Email Templates"
2. Cliquer "Create New Template"
3. Utiliser ce template:

```
Subject: New Contact Request - {{from_name}}

---
Contact Information:
---
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}

Project Type: {{project_type}}

---
Message:
---
{{message}}

---
This email was sent from the Zonca Global Investment contact form.
Received: {{to_email}}
```

4. **Copier le Template ID**

### Étape 4: Obtenir la clé publique
1. Aller dans "Account" → "General"
2. Trouver "Public Key"
3. **Copier la Public Key**

### Étape 5: Mettre à jour .env.local
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

### Étape 6: Redémarrer le serveur
```bash
# Arrêter le serveur (Ctrl+C)
npm run dev
```

**✅ Le formulaire est maintenant fonctionnel !**

---

## 🧪 TESTER LE FORMULAIRE

1. Aller sur http://localhost:5173
2. Cliquer sur "Contact" dans le menu
3. Remplir le formulaire:
   - First Name: Test
   - Last Name: User
   - Email: votre@email.com
   - Project Type: Choisir une option
   - Message: "This is a test message" (minimum 20 caractères)
4. Cliquer "Submit Request"
5. Vérifier votre boîte email (celle configurée dans EmailJS)

**Si ça fonctionne:**
- ✅ Message de succès vert
- ✅ Formulaire se réinitialise
- ✅ Email reçu dans votre boîte

**Si erreur:**
- Vérifier les clés dans `.env.local`
- Vérifier la console navigateur (F12)
- Relancer le serveur

---

## 📱 TESTER WHATSAPP

1. Cliquer sur le bouton vert en bas à droite
2. WhatsApp s'ouvre avec un message pré-rempli
3. **Sur mobile:** Lance l'app WhatsApp
4. **Sur desktop:** Ouvre WhatsApp Web

---

## 🔍 EXPLORER L'APPLICATION

### Pages disponibles
- **Home** (/) - Page d'accueil complète
- **Products** - Catalogue de 4 produits
- **Services** - Services offerts + FAQ
- **Projects** - Projets réalisés
- **Leadership** - Profil du CEO Emmanuel Senameh
- **Contact** - Formulaire de contact

### Fonctionnalités
- ✅ Navigation responsive (mobile + desktop)
- ✅ Formulaire avec validation temps réel
- ✅ Détails produits cliquables
- ✅ FAQ avec accordéon
- ✅ Bouton WhatsApp flottant
- ✅ Animations au survol

---

## 🛠️ COMMANDES UTILES

### Développement
```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run preview      # Prévisualiser le build
```

### Informations
```bash
npm list             # Voir les dépendances installées
npm outdated         # Voir les packages à mettre à jour
```

---

## 📂 STRUCTURE DU PROJET

```
ZONCA-GLOBAL-INVESTMENT/
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── common/      # Logo, boutons, etc.
│   │   ├── layout/      # TopBar, Navbar, Footer
│   │   ├── sections/    # Hero, Stats, etc.
│   │   └── products/    # Composants produits
│   ├── pages/          # Pages de l'application
│   ├── constants/      # Données (products, config)
│   ├── types/          # Types TypeScript
│   ├── utils/          # Utilitaires (validation)
│   ├── services/       # Services (email)
│   ├── App.tsx         # App principale
│   └── main.tsx        # Point d'entrée
├── public/             # Fichiers statiques
├── index.html          # HTML principal
├── package.json        # Dépendances
├── .env.local          # Variables d'environnement
└── Documentation/      # Docs complètes
```

---

## 🎨 PERSONNALISATION

### Changer les couleurs
**Fichier:** `index.html` (ligne 14-20)
```javascript
zonca: {
  red: '#8B0000',      // Couleur principale
  redLight: '#A52A2A',
  grey: '#A9A9A9',
  dark: '#1A1A1A',
  light: '#F5F5F5',
}
```

### Modifier les produits
**Fichier:** `src/constants/products.ts`

### Modifier les informations de l'entreprise
**Fichier:** `src/constants/config.ts`

---

## ⚠️ TROUBLESHOOTING

### Le serveur ne démarre pas
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Le formulaire ne s'envoie pas
1. Vérifier `.env.local` existe et contient les bonnes clés
2. Vérifier la console navigateur (F12) pour les erreurs
3. Tester les clés EmailJS sur leur site
4. Redémarrer le serveur après modification de `.env.local`

### Build échoue
```bash
# Vérifier les erreurs TypeScript
npm run build

# Si erreurs, vérifier les imports dans les fichiers
```

### Page blanche
1. Ouvrir la console navigateur (F12)
2. Vérifier les erreurs JavaScript
3. Vérifier que `src/main.tsx` existe
4. Vérifier que `index.html` pointe vers `/src/main.tsx`

---

## 📖 DOCUMENTATION COMPLÈTE

### Fichiers de documentation créés
1. **AMELIORATION-ROADMAP.md** - Plan d'amélioration complet (5 phases)
2. **MIGRATION-REACT18-RAPPORT.md** - Rapport de migration vers React 18
3. **VERSIONS.md** - Versions des dépendances et politique de mise à jour
4. **PHASE1-COMPLETE.md** - Rapport complet Phase 1
5. **DEMARRAGE-RAPIDE.md** - Ce fichier

### Roadmap des phases
- ✅ **Phase 1:** Fondations (TERMINÉE)
- 🔜 **Phase 2:** Performance & SEO
- 🔜 **Phase 3:** Contenu Réel
- 🔜 **Phase 4:** Polish & Production
- 🔜 **Phase 5:** Monitoring & Maintenance

---

## 🎯 CHECKLIST PREMIÈRE UTILISATION

- [ ] Dependencies installées (`npm install`)
- [ ] `.env.local` créé avec clés EmailJS
- [ ] Serveur démarré (`npm run dev`)
- [ ] Application ouverte (http://localhost:5173)
- [ ] Navigation testée (toutes les pages)
- [ ] Formulaire testé et email reçu
- [ ] WhatsApp testé et fonctionne
- [ ] Build de production testé (`npm run build`)

---

## 💡 CONSEILS

### Pour développer
1. Garder le serveur de dev ouvert
2. Les modifications sont reflétées instantanément
3. Vérifier la console pour les erreurs
4. Utiliser React DevTools (extension navigateur)

### Pour débugger
1. Ouvrir DevTools (F12)
2. Onglet "Console" pour les erreurs JavaScript
3. Onglet "Network" pour les requêtes HTTP
4. Onglet "Elements" pour le HTML/CSS

---

## 🚀 PRÊT POUR LA PRODUCTION

### Avant de déployer
1. ✅ Configurer EmailJS
2. ⏳ Remplacer images placeholder
3. ⏳ Installer Tailwind CSS compilé (Phase 2)
4. ⏳ Ajouter analytics
5. ⏳ Tester sur mobile réel

### Build de production
```bash
npm run build
```

Les fichiers optimisés seront dans `dist/`

---

## 📞 BESOIN D'AIDE ?

### Ressources
- **React:** https://react.dev/
- **Vite:** https://vitejs.dev/
- **EmailJS:** https://www.emailjs.com/docs/
- **React Hook Form:** https://react-hook-form.com/
- **Zod:** https://zod.dev/

### Documentation du projet
Consultez les fichiers .md dans le dossier racine

---

**Bon développement ! 🎉**

**Votre application est maintenant prête à être utilisée et personnalisée !**
