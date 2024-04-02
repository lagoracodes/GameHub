import { usableData } from "./api.js";

const trendingGames = document.querySelector("#trending-games");
const loadingCircle = document.querySelector("#loading-circle");

console.log(usableData);

for (let i = 0; i < usableData.length; i++) {
  const imgUrl = usableData[i].image.url;
  const gameTitle = usableData[i].title;
  const price = usableData[i].discountedPrice;

  loadingCircle.remove();

  if (
    gameTitle === "Forge Legend" ||
    gameTitle === "Cyberpunk" ||
    gameTitle === "Space War"
  ) {
    trendingGames.innerHTML += `
<div class="game-card flex">
            <div class="img-wrapper">
              <img
                class="game-picture"
                src=${imgUrl}
                alt="forge legend video game cover"
              />
            </div>
            <div class="lower-panel">
              <h3 class="game-title letter-spacing">${gameTitle}</h3>
              <div class="flex f-jc-c f-ai-c">
                <div>
                  <h4 class="uppercase letter-spacing">
                    current <br />
                    lowest price
                  </h4>
                  <h3 class="letter-spacing">${price}</h3>
                </div>
                <button>
                  <a class="uppercase letter-spacing" href="#"
                    >browse <br />
                    sellers</a
                  >
                </button>
              </div>
            </div>
          </div>
      `;
  }
}
