import { usableData } from "./api.js";
import { showGameInfo } from "./show-game-info.js";

const chosenGame = [];

const allGamesCon = document.querySelector("#all-games-con");
const allGames = document.querySelector("#all-games");
const loadingCircle = document.querySelector("#loading-circle");
const sort = document.querySelector("#sort");

if (usableData) {
  loadingCircle.remove();
  sort.classList.remove("hide");
  for (let i = 0; i < usableData.length; i++) {
    const gameID = usableData[i].id;
    const gameTitle = usableData[i].title;
    const gameImg = usableData[i].image.url;
    const gameGenre = usableData[i].genre;
    const gamePrice = usableData[i].discountedPrice;
    const gameFavorite = usableData[i].favorite;
    const gameAgeRating = usableData[i].ageRating;
    const gameDescription = usableData[i].description;
    const gameReleaseYear = usableData[i].released;

    allGames.classList.remove("flex");
    allGames.classList.add("grid-wrapper");

    allGames.innerHTML += `
    <div class="game-card flex f-ai-c" data-id="${gameID}" data-title="${gameTitle}" data-img="${gameImg}" data-price="${gamePrice}" data-favorite="${gameFavorite}" data-age="${gameAgeRating}" data-description="${gameDescription}" data-released="${gameReleaseYear}" data-genre=${gameGenre}>
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
} else {
  sort.remove();
  allGamesCon.innerHTML += `
                        <div class="flex fd-col f-ai-c"><h3>UNABLE TO RETRIEVE DATA</h3>
                        <p>(we are working to fix the issue, please come back later)</p></div>`;
}

if (localStorage.getItem("chosenGame")) {
  localStorage.removeItem("chosenGame");
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

  chosenGame.length = 0;
  chosenGame.push(gameInfo);

  localStorage.setItem("chosenGame", JSON.stringify(chosenGame));
}

const browseSellerBtn = document.querySelectorAll(".browse-sellers-btn");

browseSellerBtn.forEach((button) => {
  button.addEventListener("click", handleClickEvent);
});

showGameInfo();
