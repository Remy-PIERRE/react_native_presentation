# React native

## Qu'est-ce que React Native ?

React Native est un framework Javascript open-source, hybride et multi-plateforme, dérivé de ReactJS et développé par Facebook qui permet de créer des applications mobiles pour iOS et Android. Il offre une approche efficace pour développer des applications mobiles avec une base de code unique, tout en conservant les performances natives.

**Multiplateforme**
Il permet la production d'applications IOS et Android véritablement natives, avec une même base de code et ne compromet pas l'expérience de vos utilisateurs. Le code React (Javascript) est interprété dynamiquement lors de l'exécution de l'application par le biais d'un pont afin de communiquer avec les API natives tout en rendant des composants graphiques eux aussi natifs.

**Performance Native**
Les applications développées sous React Native offrent une expérience très similaire à celles développées en natif, les éléments affichés à l'écran découlant de la plateforme utilisée. Cela se traduit par une prise en main naturelle ainsi que par des temps de chargement rapides. React Native est rapide à installer et facile à prendre en main.

**Composants Réutilisables**
Les composants de React Native sont basés sur les composants de base de l'interface utilisateur, permettant une grande réutilisabilité et une cohérence entre les plateformes.

**Hot Reloading**
Cette fonctionnalité permet aux développeurs de voir immédiatement les modifications apportées au code sans avoir à recompiler l'application entière, ce qui accélère le cycle de développement.

**Grande Communauté et Écosystème**
React Native bénéficie d'une vaste communauté de développeurs ce qui induit une vaste collections de bibliothèques disponibles ainsi qu'une documentation accessible et riche.

**Mise à jour et maintenance**
Le framework évolue vite et le maintient au niveau des applications peut être parfois compliqué.

**Code natif**
Bien que le framework propose énormement de solutions, le développement de certaines fonctionnalités complexes nécessitera l’intervention d’un développeur natif.

**Accessibilité**
Généralement, il faut avoir de l’expérience, notamment en JavaScript et en programmation d’applications natives pour maîtriser ce framework. React Native n’est donc pas un outil facilement accessible.

## Alternatives

**Flutter**

- multi-plateforme (Android, IOS, web)
- basé sur le langage Dart
- utilise des widget personnalisés (non natifs)
- hot reloading
- performances proche du natif
- coommunauté plus faible, bien que en forte croissance

**Swift**

- spécifique à IOS en MacOS
- langage Swift
- performances optimales
- accès à tous les composants natifs
- pas de hot reloading
- forte communauté

## Démarer un nouveau projet

Expo est un framework qui facilite le développement d'applications Android et iOS. Ce framework fournit un routage basé sur des fichiers, une bibliothèque standard de modules natifs et bien plus encore. Expo est open source avec une communauté active sur GitHub et Discord.

- Node.js requis
- Windows, macOs et Linux suportés

**Création du projet**

<code>npx create-expo-app@latest</code>

**Démarage du serveur**

<code>npx expo start</code>

- QRCode pour ouvrir depuis son mobile
- ctrl + click G pour ouvrir sur navigateur

**Réinitialiser le projet**

Vous pouvez supprimer le code passe-partout et repartir à zéro avec un nouveau projet. Exécutez la commande suivante pour réinitialiser votre projet :

<code>npm run reset-project</code>

## Structure de l'application

**app**
Contient la navigation de l'application, basée sur la structure des fichiers du répertoire.
L'application dispose de deux itinéraires définis par : app/(tabs)/index.tsx et app/(tabs)/explore.tsx. Le fichier de mise en page dans app/(tabs)/\_layout.tsx configure le navigateur d'onglets.

**assets**
Le dossier Assets contient adaptive-icon.png utilisé pour Android et un icon.png utilisé pour iOS comme icônes d'application. Il contient également splash.png qui est une image pour l'écran de démarrage du projet et un favicon.png si l'application s'exécute dans un navigateur.

**components**
Contient des composants React Native, comme ThemedText.tsx, qui crée des éléments de texte qui utilisent le jeu de couleurs de l'application en modes clair et sombre.

**constants**
Contient Colors.ts, qui contient une liste de valeurs de couleur dans toute l’application.

**hooks**
Contient des React Hooks, qui permettent de partager un comportement commun entre les composants. Par exemple, useThemeColor() est un hook qui renvoie une couleur basée sur le thème actuel.

**scripts**
Contient reset-project.js, qui peut être exécuté avec npx run reset-project. Ce script déplacera le répertoire de l'application vers app-example et créera un nouveau répertoire d'application avec un fichier index.tsx.

**app.json**

Contient les options de configuration du projet et est appelé configuration de l'application. Ces options modifient le comportement de votre projet lors du développement, de la création, de la soumission et de la mise à jour de votre application.

**babel.config.js**

Applique le préréglage babel-preset-expo qui étend le préréglage React Native par défaut et ajoute la prise en charge des décorateurs, des packages Web d'arborescence et le chargement d'icônes de police avec des dépendances natives facultatives si elles sont installées. Vous pouvez également modifier ce fichier pour ajouter des plugins ou des préréglages Babel supplémentaires.

**package.json**

Le fichier package.json contient les dépendances, les scripts et les métadonnées du projet. Chaque fois qu'une nouvelle dépendance est ajoutée à votre projet, elle sera ajoutée à ce fichier.

**tsconfig.json**

Contient les règles que TypeScript utilisera pour appliquer la sécurité des types tout au long du projet.

## Fonctionnalités par defaut

**File base routing**

L'application dispose de deux écrans : app/(tabs)/index.tsx et app/(tabs)/explore.tsx. Le fichier de mise en page dans app/(tabs)/\_layout.tsx configure le navigateur d'onglets.

**Android, IOS, Web support**

Vous pouvez ouvrir ce projet sur Android, iOS et le Web. Pour ouvrir la version Web, appuyez sur w dans le terminal après avoir exécuté le projet.

**Images**

Pour les images statiques, vous pouvez utiliser les suffixes @2x et @3x pour fournir des images pour différentes densités d'écran.

**Custom fonts**

Ouvrez app/\_layout.tsx pour voir comment charger des polices personnalisées.

**Light && Dark mode**

Ce modèle prend en charge les modes clair et sombre. Le hook useColorScheme() vous permet d'inspecter le jeu de couleurs actuel de l'utilisateur, afin que vous puissiez ajuster les couleurs de l'interface utilisateur en conséquence.

**Animations**

Le composant composants/HelloWave.tsx utilise l'API Animated pour créer une animation de main agitante. Sur iOS, le composant/ParallaxScrollView.tsx crée un effet de parallaxe pour l'image d'en-tête.

## La suite

**TODO List**

Illustre la création d'un composant.

**Routing**

Illustre l'utilisation du routing de Expo simplement.
