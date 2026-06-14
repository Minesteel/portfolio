# Portfolio Personnel

Une application web moderne de portefeuille personnel construite avec Next.js, React et TypeScript. Cette application présente les projets, compétences et expériences professionnelles avec support multilingue.

## 🎯 Caractéristiques

- **Interface moderne et responsive** : Conçue avec Tailwind CSS pour une expérience utilisateur optimale
- **Support multilingue** : Changement facile entre les langues via le contexte React
- **Données structurées** : Projets, compétences et expériences stockés en JSON pour faciliter la maintenance
- **Animations fluides** : Utilisation de composants réutilisables pour des transitions élégantes
- **Section de contact** : Formulaire intégré pour les demandes
- **Timeline interactive** : Affichage de l'expérience professionnelle de manière visuelle

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn

## 🚀 Installation

```bash
cd portfolio
npm install
```

## 📝 Scripts disponibles

```bash
# Démarrer le serveur de développement
npm run dev

# Construire l'application pour la production
npm run build

# Démarrer le serveur de production
npm start

# Exécuter le linter ESLint
npm run lint
```

## 📁 Structure du projet

```
portfolio/
├── app/                 # Fichiers Next.js App Router
│   ├── layout.tsx      # Layout racine
│   ├── page.tsx        # Page d'accueil principale
│   └── globals.css     # Styles globaux
├── components/         # Composants React réutilisables
│   ├── Card.tsx        # Composant carte
│   ├── Header.tsx      # En-tête de navigation
│   ├── Sidenav.tsx     # Barre de navigation latérale
│   ├── SkillBadge.tsx  # Badge de compétence
│   └── TimeLine.tsx    # Composant timeline
├── contexts/           # Contextes React
│   └── LanguageContext.tsx  # Gestion du contexte multilingue
├── data/              # Données JSON
│   ├── experiences.json    # Données d'expérience professionnelle
│   ├── projects.json       # Données des projets
│   ├── skills.json         # Données des compétences
│   └── translations.json   # Traductions multilingues
├── pages/             # Pages supplémentaires
│   └── Contact.tsx     # Section contact
├── types/             # Définitions TypeScript
│   ├── experience.ts   # Type pour l'expérience
│   ├── project.ts      # Type pour les projets
│   ├── skill.ts        # Type pour les compétences
│   └── skillbadge.ts   # Type pour les badges
├── public/            # Fichiers statiques
├── package.json       # Dépendances et scripts
├── next.config.ts     # Configuration Next.js
├── tsconfig.json      # Configuration TypeScript
├── tailwind.config.ts # Configuration Tailwind CSS
└── eslint.config.mjs  # Configuration ESLint
```

## 🛠️ Stack technologique

- **Framework** : [Next.js](https://nextjs.org/) 16.1.1
- **Bibliothèque UI** : [React](https://react.dev/) 19.2.3
- **Langage** : [TypeScript](https://www.typescriptlang.org/) 5
- **Styling** : [Tailwind CSS](https://tailwindcss.com/) 4.1.18
- **Icônes** : [Lucide React](https://lucide.dev/) 0.562.0
- **Linting** : [ESLint](https://eslint.org/) 9
- **Postcss** : [Autoprefixer](https://autoprefixer.github.io/) 10.4.23

## 📝 Ajouter du contenu

### Ajouter un projet

Modifiez `data/projects.json` et suivez la structure définie dans `types/project.ts` :

```json
{
  "projects": [
    {
      "id": "project-id",
      "title": "Titre du projet",
      "description": "Description courte",
      "longDescription": "Description détaillée",
      "technologies": ["Tech1", "Tech2"],
      "link": "https://example.com",
      "category": "perso"
    }
  ]
}
```

### Ajouter une compétence

Modifiez `data/skills.json` et suivez la structure définie dans `types/skill.ts` :

```json
{
  "skills": [
    {
      "id": "skill-id",
      "name": "Nom de la compétence",
      "level": 90,
      "category": "Frontend"
    }
  ]
}
```

### Ajouter une expérience

Modifiez `data/experiences.json` et suivez la structure définie dans `types/experience.ts`.

### Ajouter une langue

Modifiez `data/translations.json` pour ajouter les traductions de vos contenus.

## 🌐 Fonctionnalité multilingue

L'application utilise le contexte React pour gérer les langues. Pour changer de langue, utilisez le hook `useLanguage()` dans vos composants :

```typescript
import { useLanguage } from '@/contexts/LanguageContext';

export default function MonComposant() {
  const { t, language, setLanguage } = useLanguage();
  
  return <div>{t('cle_de_traduction')}</div>;
}
```

## 🎨 Personnalisation

### Styles

Les styles globaux se trouvent dans `app/globals.css`. La configuration Tailwind CSS se fait via `tailwind.config.ts`.

### Images

Les images publiques doivent être placées dans le dossier `public/`. Utilisez le composant `Image` de Next.js pour l'optimisation :

```typescript
import Image from 'next/image';

<Image src="/image.jpg" alt="Description" width={800} height={600} />
```

## 🔍 Linting et Qualité du code

```bash
# Exécuter ESLint
npm run lint

# Corriger automatiquement les erreurs ESLint (si possible)
npm run lint -- --fix
```

## 📦 Build et déploiement

```bash
# Créer la version de production
npm run build

# Tester le build localement
npm start
```

L'application est prête à être déployée sur :
- [Vercel](https://vercel.com/) (recommandé pour Next.js)
- [Netlify](https://www.netlify.com/)
- [Docker](https://www.docker.com/)
- Tout serveur Node.js

## 🐛 Dépannage

### Problème : `npm run start` ne fonctionne pas
- Assurez-vous d'avoir exécuté `npm run build` d'abord
- Vérifiez que le port 3000 n'est pas occupé

### Problème : Erreurs TypeScript
- Exécutez `npm install` pour mettre à jour les dépendances
- Vérifiez la configuration dans `tsconfig.json`

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

Loris Pineaud