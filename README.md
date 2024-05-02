Site conçu en html, javascript et css
Prévu comme lecteur audio, il suffit de mettre : 
- le son mp3 dans le dossier upload/music
- la cover dans le dossier upload/cover

Sans oublier de modifier le fichier /assets/json/data.json , sous forme : 

    {
        "id" : X, //ID unique
        "artiste" : "NomArtiste",  
        "cover" : "cover.jpeg", //Mettre la bonne extension
        "sound" : "musique.mp3", //En MP3 de préférence
        "title" : "titreMusique", 
        "category" : "typeMusique"

    },
    
Le site s'affiche ainsi sur ordinateur : 
- au format "carte" :
<img width="800" alt="ordi1" src="https://github.com/BlackMOTD/JukeBox/assets/105824316/4b2c9427-8d69-4077-a406-8396908c366a">

- au format "liste" : 
<img width="800" alt="ordi2" src="https://github.com/BlackMOTD/JukeBox/assets/105824316/d6f4c051-58bd-46c4-bcb7-411180cbbf36">


Et sur mobile : 
- au format "carte" :
<img width="300" alt="tel1" src="https://github.com/BlackMOTD/JukeBox/assets/105824316/3526dacc-37ec-4567-9b03-cb4ed6cc6e31">


- au format "liste" : 
<img width="300" alt="tel1" src="https://github.com/BlackMOTD/JukeBox/assets/105824316/645c793d-9615-4e5f-aa31-a0b336f25fb9">


En appuyant sur une étiquette de musique, la musique se lancera automatiquement.
Une fois la musique lancé, le titre aura une petite animation qui pourra nous montrer que la musique est en lecture.
Il est possible de mettre en pause et reprendre la musique en appuyant sur le bouton "Play" et "Pause", quand le pause est activé le titre restera fixe.
Un bouton aléatoire va permettre la lecture d'une musique aléatoirement dans la liste.
Le dernier bouton permet de changer de mode de vues carte/liste.

