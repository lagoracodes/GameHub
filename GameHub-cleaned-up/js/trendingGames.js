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
    <div class="game-card flex f-ai-c">
      <div class="img-wrapper">
        <img
          class="game-picture"
          src= ${imgUrl}
          alt="video game cover picture"
        />
      </div>
        <div class="flex lower-panel">
          <h3 id="game-title" class="game-title letter-spacing">${gameTitle}</h3>
      
              <a class="btn-2 flex f-ai-c f-jc-c" href="#">
                <span class="btn-span uppercase letter-spacing">game info</span>
              </a>

          <div class="flex f-jc-c f-ai-c gap">
            <div>
              <h4 class="uppercase letter-spacing">
                current <br />
                lowest price
              </h4>
              <h3 class="letter-spacing">${price}</h3>
            </div>
            <a class="btn-1 flex f-ai-c f-jc-c" href="/browse-sellers.html">
                <span class="btn-span uppercase letter-spacing">browse <br />
                sellers</span>
              </a>
          </div>
      </div>
    </div>
      `;
  }
}
