import { usableData } from "./api.js";
import { showGameInfo } from "./show-game-info.js";

const favoritesContainer = document.querySelector("#favorites");
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
const loadingCircle = document.querySelector("#loading-circle");

if (favorites.length === 0) {
  loadingCircle.remove();
  favoritesContainer.innerHTML = "<p>No favorite games added yet.</p>";
} else {
  loadingCircle.remove();
  favoritesContainer.classList.remove("flex");
  favoritesContainer.classList.add("grid-wrapper");
  fetchGameDetails(favorites)
    .then((games) => {
      games.forEach((game) => {
        const gameID = game.attributes[3].options.toString();
        const gameTitle = game.name;
        const gameImg = game.images[0].src;
        const gameGenre = game.attributes[2].options;
        const gamePrice = game.price;
        const gameAgeRating = game.attributes[0].options;
        const gameDescription = game.description;
        const gameReleaseYear = game.attributes[4].options;
        favoritesContainer.innerHTML += `
          <div class="game-card flex f-ai-c" data-id="${gameID}" data-title="${gameTitle}" data-img="${gameImg}" data-price="${gamePrice}" data-favorite="true" data-age="${gameAgeRating}" data-description="${gameDescription}" data-released="${gameReleaseYear}" data-genre=${gameGenre}>
            <div class="img-wrapper">
              <img
                class="game-picture"
                src= ${gameImg}
                alt="${gameTitle} cover picture"
              />
            </div>
            <div class="flex lower-panel">
              <div class="game-title-con-target"><h3 class="game-title letter-spacing">${gameTitle}</h3></div>
              <div class="flex f-jc-c f-ai-c gap">
                <a class="btn-2 flex f-ai-c f-jc-c game-info-btn-con" href="#">
                  <span class="btn-span uppercase letter-spacing game-info-btn">game info</span>
                </a>
                <img class="heart-icon" src="./resources/images/icons/heart-filled.png" data-id="${gameID}" alt="heart icon"/>
              </div>
              <div class="flex f-jc-c f-ai-c gap price-con">
                <div>
                  <h4 class="uppercase letter-spacing">
                    current <br />
                    lowest price
                  </h4>
                  <h3 class="game-price letter-spacing">${gamePrice}</h3>
                </div>
                <a class="btn-1 flex f-ai-c f-jc-c browse-sellers-btn" href="./browse-sellers.html">
                  <span class="btn-span letter-spacing">Browse <br />
                  Sellers</span>
                </a>
              </div>
            </div>
          </div>
        `;
      });

      const heartIcons = document.querySelectorAll(".heart-icon");

      heartIcons.forEach((icon) => {
        icon.addEventListener("click", function () {
          const gameID = icon.dataset.id;
          favorites = favorites.filter((id) => id !== gameID);
          localStorage.setItem("favorites", JSON.stringify(favorites));
          icon.closest(".game-card").remove();
          if (favorites.length === 0) {
            favoritesContainer.classList.remove("grid-wrapper");
            favoritesContainer.classList.add("flex");
            favoritesContainer.innerHTML =
              "<p>No favorite games added yet.</p>";
          }
        });
      });

      const browseSellerBtns = document.querySelectorAll(".browse-sellers-btn");
      browseSellerBtns.forEach((button) => {
        button.addEventListener("click", handleClickEvent);
      });

      showGameInfo();
    })
    .catch((error) => {
      console.error("Error fetching game details:", error);
    });
}

async function fetchGameDetails(favoriteIDs) {
  const matchedGames = usableData.filter((game) =>
    favoriteIDs.includes(game.attributes[3].options.toString())
  );
  return matchedGames;
}

function handleClickEvent(event) {
  const button = event.target;
  const gameCard = button.closest(".game-card");

  const gameID = gameCard.dataset.id;
  const gameTitle = gameCard.dataset.title;
  const gameImg = gameCard.dataset.img;
  const gamePrice = gameCard.dataset.price;
  const gameGenre = gameCard.dataset.genre;
  const gameFavorite = gameCard.dataset.favorite;
  const gameAgeRating = gameCard.dataset.age;
  const gameDescription = gameCard.dataset.description;
  const gameYear = gameCard.dataset.released;

  const gameInfo = {
    id: gameID,
    title: gameTitle,
    img: gameImg,
    price: gamePrice,
    genre: gameGenre,
    favorite: gameFavorite,
    ageRating: gameAgeRating,
    description: gameDescription,
    released: gameYear,
  };

  localStorage.setItem("chosenGame", JSON.stringify([gameInfo]));
}

showGameInfo();
