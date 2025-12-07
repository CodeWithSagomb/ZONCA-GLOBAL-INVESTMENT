# Google Analytics 4 - Guide de Configuration

## Étape 1: Créer un compte Google Analytics

1. Allez sur https://analytics.google.com/
2. Connectez-vous avec votre compte Google
3. Cliquez sur "Commencer à mesurer" (Start measuring)
4. Créez une propriété Google Analytics 4

## Étape 2: Obtenir votre Measurement ID

1. Dans Google Analytics, allez dans **Admin** (en bas à gauche)
2. Dans la colonne **Propriété**, cliquez sur **Flux de données** (Data Streams)
3. Cliquez sur **Ajouter un flux** > **Web**
4. Entrez les informations:
   - URL du site web: `https://zoncaglobal.com`
   - Nom du flux: `Zonca Global Website`
5. Cliquez sur **Créer un flux**
6. Copiez le **ID DE MESURE** (Measurement ID) qui ressemble à `G-XXXXXXXXXX`

## Étape 3: Configurer l'application

1. Créez un fichier `.env` à la racine du projet (copiez depuis .env.example):
   ```bash
   cp .env.example .env
   ```

2. Ouvrez le fichier `.env` et remplacez `G-XXXXXXXXXX` par votre vrai Measurement ID:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. Redémarrez le serveur de développement:
   ```bash
   npm run dev
   ```

## Étape 4: Vérifier que ça fonctionne

1. Ouvrez votre navigateur sur http://localhost:5173
2. Ouvrez la Console (F12 > Console)
3. Vous devriez voir: `Google Analytics initialized successfully`
4. Dans Google Analytics, allez dans **Rapports** > **Temps réel**
5. Naviguez sur votre site - vous devriez voir l'activité en temps réel!

## Événements trackés automatiquement

L'application track automatiquement:

- **Page views**: Toutes les navigations entre pages
- **Contact form submissions**: Succès et erreurs
- **Product views**: Quand un utilisateur consulte un produit

## Note importante pour la production

Avant de déployer en production, assurez-vous que:
1. Le fichier `.env` contient le bon Measurement ID
2. Le fichier `.env` est listé dans `.gitignore` (pour ne pas exposer vos clés)
3. Votre hébergeur (Netlify, Vercel, etc.) a la variable d'environnement configurée

## Support

Si vous avez des questions:
- Documentation GA4: https://support.google.com/analytics/answer/9304153
- react-ga4: https://github.com/codler/react-ga4

