import { usableData } from "./api.js";

const allGames = document.querySelector("#all-games");
const loadingCircle = document.querySelector("#loading-circle");

console.log(usableData);
for (let i = 0; i < usableData.length; i++) {
  const imgUrl = usableData[i].image.url;
  const gameTitle = usableData[i].title;
  const price = usableData[i].discountedPrice;

  loadingCircle.remove();
  allGames.classList.remove("flex");
  allGames.classList.add("grid-wrapper");

  allGames.innerHTML += `
    <div class="game-card flex">
      <div class="img-wrapper">
        <img
          class="game-picture"
          src= ${imgUrl}
          alt="video game cover picture"
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
              <a class="uppercase letter-spacing" href="#">
                browse <br />
                sellers
              </a>
            </button>
          </div>
      </div>
    </div>
      `;
}

// allGames.innerHTML +=
//   <div class="game-card flex">
//     <div class="lower-panel">
//       <h3 class="game-title letter-spacing">forge legend</h3>
//       <div class="flex f-jc-c f-ai-c">
//         <div>
//           <h4 class="uppercase letter-spacing">
//             current <br />
//             lowest price
//           </h4>
//           <h3 class="letter-spacing">€45.99</h3>
//         </div>
//         <button>
//           <a class="uppercase letter-spacing" href="#">
//             browse <br />
//             sellers
//           </a>
//         </button>
//       </div>
//     </div>
//   </div>;
