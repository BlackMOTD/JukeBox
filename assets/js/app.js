// app.js

const audioPlayer = document.getElementById('audioPlayer');
const lecteur = document.querySelector('#audioPlayer');
const playlist = document.getElementById("playlist");
const playPauseButton = document.getElementById('playPauseButton');
const titreEnCoursText = document.getElementById("titre-en-cours-text");
const vueButton = document.getElementById('vue-button');
const themeButton = document.getElementById('theme-button');
const container = document.getElementById('container');
const config = {
    urlCover: "./upload/cover/",
    urlSound: "./upload/music/",
    urlIcone: "./assets/ico/"
};

let allLi;
let vuePlaylist = 'default'; // 'default' ou 'liste'

// Affichage des musiques 
const getData = async () => {
    const req = await fetch("./assets/json/_data.json");
    console.log(req);
    const dbMusic = await req.json();
    console.log("result ", dbMusic);
    dbMusic.forEach((music) => {
        if (vuePlaylist === 'liste') {
playlist.innerHTML += `
    <li class="playlist-item liste" id="${music.id}">
        <img class="cover" src="${config.urlCover}${music.cover}" alt="${music.title}">
        <div class="music-details">
            <h2 class="playlist-music-details-text">${music.title}  -  </h2>
            <h3 class="playlist-music-details-text">${music.artiste}</h3>
        </div>
        <div class="play-icon"></div> <!-- Ajout de l'élément pour l'icône play -->
    </li>
`;
        } else { // Affichage par défaut
            playlist.innerHTML += `
                <li class="playlist-item default" id="${music.id}">
                    <div class="music-details">
                        <h2 class="playlist-music-title">${music.title}</h2>
                        <h3 class="playlist-music-artist">${music.artiste}</h3>
                    </div>
                    <img class="cover" src="${config.urlCover}${music.cover}" alt="${music.title}">
                </li>
            `;
        }
    });
    allLi = document.querySelectorAll(".playlist-item");

    allLi.forEach((li) => {
        li.addEventListener("click", function(elem) {
            const id = parseInt(li.id);
            const searchById = dbMusic.find((element) => element.id === id);
            if (searchById) {
                console.log(searchById);
                titreEnCoursText.textContent = `${searchById.artiste} - ${searchById.title}`;
               // alert(`Veux-tu écouter le titre : ${searchById.title}`);
                lecteur.src = `${config.urlSound}${searchById.sound}`;
                lecteur.play();
                playPauseButton.style.backgroundImage = 'url("' + config.urlIcone + 'pause.png")';
                titreEnCoursText.style.animation = 'colorAnimation 5s infinite'; // Démarrer l'animation
            } else {
                console.log("Aucune musique trouvée avec cet ID.");
            }
        });
    });
}

// ------------------------------ HEADER ---------------------------------

let animationPlayState = 'paused'; // État de l'animation

// PLAY - PAUSE
playPauseButton.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.style.backgroundImage = 'url("' + config.urlIcone + 'pause.png")';
        titreEnCoursText.style.animationPlayState = animationPlayState; // Reprendre l'animation
    } else {
        audioPlayer.pause();
        playPauseButton.style.backgroundImage = 'url("' + config.urlIcone + 'play.png")';
        animationPlayState = getComputedStyle(titreEnCoursText).animationPlayState; // Obtenir l'état de l'animation
        titreEnCoursText.style.animationPlayState = 'paused'; // Mettre en pause l'animation
    }
});

//RANDOM
const playRandomMusic = () => {
    const randomIndex = Math.floor(Math.random() * allLi.length);
    const randomLi = allLi[randomIndex];
    randomLi.click();
};
const randomButton = document.querySelector('#random-button');
randomButton.addEventListener('click', playRandomMusic);

// Ajoutez un gestionnaire d'événements au bouton "vue-button" pour basculer entre les vues
vueButton.addEventListener('click', () => {
    vuePlaylist = vuePlaylist === 'default' ? 'liste' : 'default';
    playlist.innerHTML = ''; // Efface le contenu actuel de la playlist
    getData(); // Regénère la playlist avec la nouvelle vue
});


getData();
