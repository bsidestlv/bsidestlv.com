---
key: le_design_de_l_erreur
title: Le design de l'erreur
id: pAMZmFT2wrfqPr9IdeXv
language: French
format: conference
tags:
  - _method___tools
level: beginner
speakers:
  - francois_teychene
videoId: 9P8FZIqUuTM
presentation: null
draft: false
---
Nos systèmes sont designés de manière optimiste, de la gestion technique des erreurs à la modélisation de nos interfaces.  
Que ce soient les codes d'erreurs, les exceptions ou les modélisations plus avancées, elles servent pour arrêter un traitement et _potentiellement_ afficher un message d'information à un utilisateur.

Mais avec les architectures microservices, la distribution des traitements ou une simple volonté de résilience, la gestion des erreurs est devenue un enjeu important de tous les systèmes afin qu’ils restent accessibles de tous, tout le temps tout en maintenant le système dans un état cohérent.

Que fait-on lorsqu’une erreur intervient ? Peut-on compenser voire gérer l’erreur depuis le système pour l’utilisateur ?

La réponse à ces questions se trouve autant dans la définition du produit que dans le choix technique.
Un outil bien conçu est un outil intelligent qui peut faire les bons choix au bon moment pour l'utilisateur. Et si on apprenait ensemble à concevoir nos erreurs ?
