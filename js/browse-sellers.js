import { sellers } from "./sellers.js";

const chosenSeller = [];
const chosenGameJSON = localStorage.getItem("chosenGame");
const chosenGame = JSON.parse(chosenGameJSON);

const browseSellers = document.querySelector("#browse-sellers");
const loadingCircle = document.querySelector("#loading-circle");

const gameTitle = chosenGame[0].title;
const gameImg = chosenGame[0].img;
const gamePrice = chosenGame[0].price;
const gameGenre = chosenGame[0].genre;
const gameYear = chosenGame[0].released;

if (sellers) {
  loadingCircle.remove();

  let sellerPrice;

  for (let i = 0; i < sellers.length; i++) {
    const sellerName = sellers[i].name;
    const sellerLocation = sellers[i].location;
    const sellerImg = sellers[i].img;

    if (sellers[i] === sellers[0]) {
      sellerPrice = parseFloat(gamePrice);
    } else {
      sellerPrice *= 1.05;
    }

    const finalSellerPrice = sellerPrice.toFixed(2);

    browseSellers.innerHTML += `<div class="browse-bg flex f-ai-c f-jc-c">
                <div class="flex gap f-jc-sb">
                  <div class="game-info flex f-ai-c gap">
                    <img
                      class="img"
                      src="${gameImg}"
                      alt="video game cover"
                    />
                    <div class="divider-line"></div>
                    <div>
                      <p>
                        <strong>GAME:</strong> "${gameTitle}" <br />
                        <strong>GENRE:</strong> ${gameGenre} <br />
                        <strong>YEAR OF RELEASE:</strong> ${gameYear} <br />
                      </p>
                    </div>
                    <div class="divider-line hide-for-desktop-devices"></div>
                  </div>
                  <div class="seller-info-con flex fd-col f-jc-c gap" data-name="${sellerName}" data-location="${sellerLocation}" data-img="${sellerImg}" data-price="${finalSellerPrice}">
                    <div class="seller-info flex gap">
                      <img
                        class="img"
                        src="${sellerImg}"
                        alt="seller image"
                      />
                      <div class="seller-buttons">
                        <div class="flex">
                          <h4 class="uppercase letter-spacing">${sellerName}</h4>
                          <img
                            class="verified"
                            src="/resources/images/icons/verified.png"
                            alt="verified icon"
                          />
                        </div>
                        <h5 class="uppercase letter-spacing">${sellerLocation}</h5>
                        <div class="flex">
                          <img
                            class="star-icon"
                            src="/resources/images/icons/gold-star.png"
                            alt="gold star icon"
                          />
                          <img
                            class="star-icon"
                            src="/resources/images/icons/gold-star.png"
                            alt="gold star icon"
                          />
                          <img
                            class="star-icon"
                            src="/resources/images/icons/gold-star.png"
                            alt="gold star icon"
                          />
                          <img
                            class="star-icon"
                            src="/resources/images/icons/gold-star.png"
                            alt="gold star icon"
                          />
                          <img
                            class="star-icon"
                            src="/resources/images/icons/gold-star.png"
                            alt="gold star icon"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="buttons flex">
                      <div class="btn-sellers price flex f-jc-c f-ai-c">
                        ${finalSellerPrice}
                      </div>
                      <a class="add-to-cart-btn btn-sellers cart flex f-jc-c f-ai-c" href="./check-out.html">
                <span class="btn-span uppercase letter-spacing">ADD TO CART</span>
              </a>
                    </div>
                  </div>
                </div>
              </div>`;
  }
} else {
  browseSellers.classList.add("flex", "fd-col", "f-ai-c");
  browseSellers.innerHTML += `
                            <div class="flex fd-col f-ai-c"><h3>UNABLE TO RETRIEVE DATA</h3>
                            <p>(we are working to fix the issue, please come back later)</p></div>`;
}

const addToCartBtn = document.querySelectorAll(".add-to-cart-btn");

function handleClickEvent(event) {
  const button = event.target;
  const sellerCard = button.closest(".seller-info-con");

  const sellerName = sellerCard.dataset.name;
  const sellerLocation = sellerCard.dataset.location;
  const sellerImg = sellerCard.dataset.img;
  const sellerPrice = sellerCard.dataset.price;

  const sellerInfo = {
    name: sellerName,
    location: sellerLocation,
    img: sellerImg,
    price: sellerPrice,
  };

  chosenSeller.length = 0;
  chosenSeller.push(sellerInfo);

  if (localStorage.getItem("chosenSeller")) {
    localStorage.removeItem("chosenSeller");
    localStorage.setItem("chosenSeller", JSON.stringify(chosenSeller));
  } else {
    localStorage.setItem("chosenSeller", JSON.stringify(chosenSeller));
  }
}

addToCartBtn.forEach((button) => {
  button.addEventListener("click", handleClickEvent);
});
