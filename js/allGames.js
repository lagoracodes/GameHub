import { usableData } from "./api.js";

const chosenGame = [];

const allGames = document.querySelector("#all-games");
const loadingCircle = document.querySelector("#loading-circle");

console.log(usableData);
for (let i = 0; i < usableData.length; i++) {
  const gameID = usableData[i].id;
  const gameTitle = usableData[i].title;
  const gameImg = usableData[i].image.url;
  const gamePrice = usableData[i].discountedPrice;
  const gameFavorite = usableData[i].favorite;
  const gameAgeRating = usableData[i].ageRating;
  const gameDescription = usableData[i].description;
  const gameReleaseYear = usableData[i].released;

  loadingCircle.remove();
  allGames.classList.remove("flex");
  allGames.classList.add("grid-wrapper");

  allGames.innerHTML += `
    <div class="game-card flex f-ai-c" data-id="${gameID}" data-title="${gameTitle}" data-img="${gameImg}" data-price="${gamePrice}" data-favorite="${gameFavorite}" data-age="${gameAgeRating}" data-description="${gameDescription}" data-released="${gameReleaseYear}">
      <div class="img-wrapper">
        <img
          class="game-picture"
          src= ${gameImg}
          alt="video game cover picture"
        />
      </div>
        <div class="flex lower-panel">
          <h3 class="game-title letter-spacing">${gameTitle}</h3>
      
              <a class="btn-2 flex f-ai-c f-jc-c game-info-btn" href="#">
                <span class="btn-span uppercase letter-spacing">game info</span>
              </a>

          <div class="flex f-jc-c f-ai-c gap">
            <div>
              <h4 class="uppercase letter-spacing">
                current <br />
                lowest price
              </h4>
              <h3 class="game-price letter-spacing">${gamePrice}</h3>
            </div>
            <a class="btn-1 flex f-ai-c f-jc-c browse-sellers-btn" href="./browse-sellers.html">
                <span class="btn-span uppercase letter-spacing">browse <br />
                sellers</span>
              </a>
          </div>
      </div>
    </div>
      `;

  const gameTitleH3 = document.querySelectorAll(".game-title");

  if (gameTitleH3[i].innerText.length >= 20) {
    gameTitleH3[i].classList.add("margin");
  } else {
    continue;
  }
}

function handleClickEvent(event) {
  const button = event.target;
  const gameCard = button.closest(".game-card");

  const gameID = gameCard.dataset.id;
  const gameTitle = gameCard.dataset.title;
  const gameImg = gameCard.dataset.img;
  const gamePrice = gameCard.dataset.price;
  const gameFavorite = gameCard.dataset.favorite;
  const gameAgeRating = gameCard.dataset.age;
  const gameDescription = gameCard.dataset.description;
  const gameReleaseYear = gameCard.dataset.released;

  const gameInfo = {
    id: gameID,
    title: gameTitle,
    img: gameImg,
    price: gamePrice,
    favorite: gameFavorite,
    ageRating: gameAgeRating,
    description: gameDescription,
    released: gameReleaseYear,
  };

  addToChosenGame(gameInfo);
}

function addToChosenGame(game) {
  chosenGame.length = 0;
  chosenGame.push(game);
  return chosenGame;
}

const browseSellerBtn = document.querySelectorAll(".browse-sellers-btn");

browseSellerBtn.forEach((button) => {
  button.addEventListener("click", handleClickEvent);
});

export { chosenGame };

// });
