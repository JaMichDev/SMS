Projet Final React

Description
Dans ce projet, vous allez finaliser l’application de gestion des étudiants, cours et notes que vous avez commencée en TP.

MODULE 1
Authentification
Mettre en place un module d’authentification en utilisant le protocole OAUTH 2 permettant l’authentification des utilisateurs avant d’accéder aux fonctionnalités de base de l’application.

Gestion de roles :
- ADMIN : Administration des comptes
- SCOLARITÉ : Administrative des étudiants, cours et notes
- STUDENT : Visualisation de ses propres données
Une fois connectée:
- Un administrateur doit avoir accès en lecture et en écriture à toutes les données du site
- Un membre de la scolarité a accès uniquement aux données des étudiants, cours et notes. Ils doivent pouvoir saisir des notes, éditer des profils étudiants, saisir des cours, associer des étudiants à des cours etc….
- Un étudiant peut visualiser uniquement ses notes et voir les statistiques relatives à son dossier étudiant.


MODULE 2
Statistiques améliorées
Développez des dashboards de statistiques en fonction des profils utilisateur.
- Un administrateur doit avoir une vision globale sur toutes les entités
- Un membre de la scolarité doit avoir une vision uniquement sur les dossiers des étudiants, cours et notes
- Un étudiant doit avoir une vision uniquement sur son dossier


MODULE 3
Containerisation et déploiement
- Mécanisme de containerisation des application react et node en utilisant Docker
- Mise en place d’une pipeline de déploiement de l’application dans le cloud (eg. AWS, Hostinger, …)
