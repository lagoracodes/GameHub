export const showGameInfo = () => {
  const gameInfoBtn = document.querySelectorAll(".game-info-btn");

  function handleClickEvent(event) {
    const button = event.target;
    const gameCard = button.closest(".game-card");
    const gameTitle = gameCard.dataset.title;
    const gameImg = gameCard.dataset.img;
    const gamePrice = gameCard.dataset.price;
    const gameGenre = gameCard.dataset.genre;
    const gameFavorite = gameCard.dataset.favorite;
    const gameAgeRating = gameCard.dataset.age;
    const gameDescription = gameCard.dataset.description;
    const gameYear = gameCard.dataset.released;

  }

  gameInfoBtn.forEach((button) => {
    button.addEventListener("click", handleClickEvent);
  });
};

// for (let i = 0; i < gameInfo.length; i++) {
//   gameInfo[i];
// }
