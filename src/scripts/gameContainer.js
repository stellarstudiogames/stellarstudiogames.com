"use strict";
class Cards {
    constructor(imgGame, nameGame, urlApp) {
        this.imgGame = "";
        this.nameGame = "";
        this.urlApp = "";
        this.imgGame = imgGame;
        this.nameGame = nameGame;
        this.urlApp = urlApp;
    }
    createCardElement() {
        const cardDiv = document.createElement("div");
        cardDiv.className = "game-card";
        const imgElement = document.createElement("img");
        imgElement.src = this.imgGame;
        const titleElement = document.createElement("h2");
        titleElement.className = "name-app-title";
        titleElement.textContent = this.nameGame;
        const linkElement = document.createElement("a");
        linkElement.className = "btn-google-play";
        linkElement.href = this.urlApp;
        linkElement.target = "_blank";
        cardDiv.appendChild(imgElement);
        cardDiv.appendChild(titleElement);
        cardDiv.appendChild(linkElement);
        return cardDiv.outerHTML;
    }
}
function load(cards) {
    const container = document.getElementById("games-container");
    if (!container)
        return;
    for (let i = 0; i < cards.length; i++) {
        container.innerHTML += cards[i].createCardElement();
    }
}
const cardsArray = [
    new Cards("https://play-lh.googleusercontent.com/bifZx6kAyYXMrAnnUsoSm7OzQwNB6UG7nn1hgSiktbyiA_ey6i-hxRn3fysa6CPJ8g=w240-h480-rw", "Angry Crusher Catapult", "https://play.google.com/store/apps/details?id=com.StellarStudioGames.ABCandyBirds"),
    new Cards("https://play-lh.googleusercontent.com/vysJ1BugPAKYW7JXl8oW9nm8tFIy9bMZ9GAZuIe17xoIoehnKCwo8dT4fR4u4M6Di6Q=w240-h480-rw", "Hit Bottles Knock Down", "https://play.google.com/store/apps/details?id=com.StellarStudioGame.HitBottlesKnockDown"),
    new Cards("https://play-lh.googleusercontent.com/OUm30juvg7zKH12rlstc3vNXlgu1vWCEGYHglJ0RqmDXUvct8inobT78cptZIES_e7M=w240-h480-rw", "Angry Monsters", "https://play.google.com/store/apps/details?id=com.StellarStudioGames.AngryCrusherMonsters"),
    new Cards("https://play-lh.googleusercontent.com/RnwqFjG5CDmHOvHtUszqOOb5T4ozyi0m6vDKFGS-aJY73X2XL_Ay8Ga8vbE5zSSdzVXt=w240-h480-rw", "Crusher Birds Catapult", "https://play.google.com/store/apps/details?id=com.StellarStudioGames.AngryCrusherClassic"),
];
load(cardsArray);
