# Todo List App avec Timer Pomodoro et Statistiques

## Introduction

Cette application est une **Todo List** avec des fonctionnalités supplémentaires comme un Timer Pomodoro, des statistiques, et des rappels pour les dates d'échéance. Elle permet de gérer efficacement les tâches quotidiennes avec un mode sombre intégré pour un meilleur confort visuel.

## Tags

Ce projet est étiqueté avec les tags suivants pour faciliter la découverte et encourager les contributions :

[![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9C%94-brightgreen)](https://github.com/votre-utilisateur/todo-list-app)
[![Beginner Friendly](https://img.shields.io/badge/Beginner%20Friendly-%E2%9C%94-blue)](https://github.com/votre-utilisateur/todo-list-app/blob/main/CONTRIBUTING.md)
[![Good First Issue](https://img.shields.io/badge/Good%20First%20Issue-%F0%9F%91%8C-blueviolet)](https://github.com/votre-utilisateur/todo-list-app/issues)
[![React](https://img.shields.io/badge/React-%E2%9D%A4-61DAFB)](https://reactjs.org/)
[![Pomodoro](https://img.shields.io/badge/Pomodoro-Timer-red)](#timer-pomodoro)
[![Todo List](https://img.shields.io/badge/Todo%20List-Tasks-yellow)](#ajouter-une-tache)



## Fonctionnalités

- **Ajouter, modifier, supprimer des tâches**
- **Priorisation des tâches** (basse, moyenne, haute)
- **Minuteur Pomodoro** pour la gestion du temps
- **Graphique en camembert** pour visualiser les tâches terminées et en attente
- **Mode sombre et clair**
- **Filtrage des tâches** (toutes, actives, complétées)
- **Sauvegarde locale** des tâches via `localStorage`

## Structure du Projet

```bash
.
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── EditTodo.js
│   │   ├── PomodoroTimer.js
│   │   ├── Stats.js
│   │   └── TodoItem.js
│   ├── context
│   │   └── ThemeContext.js
│   ├── pages
│   │   └── TodoApp.js
│   ├── App.js
│   └── index.js
├── README.md
└── package.json
```

## Installation et Configuration

### Prérequis

- **Node.js** (v12+)
- **npm** ou **yarn**

### Étapes d'installation

1. Cloner le dépôt :
    ```bash
    git clone https://github.com/Bayou76/todo-list
    ```

2. Accéder au répertoire du projet :
    ```bash
    cd todo-list
    ```

3. Installer les dépendances :
    ```bash
    npm install
    # ou
    yarn install
    ```

4. Lancer l'application :
    ```bash
    npm start
    # ou
    yarn start
    ```

L'application sera accessible sur `http://localhost:3000`.

## Utilisation

### Ajouter une tâche
1. Saisissez la description de la tâche.
2. Sélectionnez une priorité et une date d'échéance (facultatif).
3. Cliquez sur **Ajouter** ou appuyez sur **Entrée**.

### Modifier ou supprimer une tâche
- **Modifier** : Cliquez sur le bouton "Modifier" pour changer la description.
- **Supprimer** : Utilisez le bouton "Supprimer" pour effacer la tâche.

### Timer Pomodoro
1. Ajustez la durée avec les boutons "+" et "-".
2. Cliquez sur **Démarrer** pour lancer le timer, puis sur **Pause** pour l'arrêter.

### Statistiques
- Accédez à la section **Statistiques** pour voir un graphique en camembert des tâches complétées et non complétées.

### Mode sombre
- Cliquez sur l'icône du soleil ou de la lune pour basculer entre les modes sombre et clair.

## Sauvegarde des données

L'application utilise **localStorage** pour sauvegarder vos tâches localement. Vous retrouverez toutes vos tâches après actualisation de la page.

## Technologies Utilisées

- **React** : pour la gestion de l'interface utilisateur
- **Chart.js** : pour afficher des graphiques
- **React Icons** : pour les icônes
- **CSS** : pour le stylage des composants et la gestion des thèmes

## Améliorations Futures

- Notifications et rappels
- Gestion de sous-tâches
- Authentification pour synchronisation des tâches

## Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier, et contribuer en soumettant des pull requests.
