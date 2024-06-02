export function showMoreGames() {
  const btnShowMore = document.querySelector("#btn-show-more");
  const gamesPerRow = 3;

  function updateGameCards() {
    const allGames = document.querySelectorAll(".game-card");
    const totalGames = allGames.length;
    let hiddenGames = [];

    allGames.forEach((game) => game.classList.remove("hide"));
    btnShowMore.classList.add("hide");

    if (totalGames % gamesPerRow !== 0) {
      const itemsToHide = totalGames % gamesPerRow;

      for (let i = 0; i < itemsToHide; i++) {
        hiddenGames.push(allGames[totalGames - 1 - i]);
        allGames[totalGames - 1 - i].classList.add("hide");
      }
      btnShowMore.classList.remove("hide");
    }

    btnShowMore.addEventListener("click", function () {
      hiddenGames.forEach((item) => item.classList.remove("hide"));
      btnShowMore.classList.add("hide");
    });
  }

  updateGameCards();
}
