export const showGameInfo = () => {
  const gameInfoCon = document.querySelector("#game-info-con");
  const gameInfoBtn = document.querySelectorAll(".game-info-btn");

  function handleGameInfoClick(event) {
    const button = event.target;
    const gameCard = button.closest(".game-card");
    const gameTitle = gameCard.dataset.title;
    const gameImg = gameCard.dataset.img;
    const gameGenre = gameCard.dataset.genre;
    const gameAgeRating = gameCard.dataset.age;
    const gameDescription = gameCard.dataset.description;
    const gameYear = gameCard.dataset.released;

    history.pushState({}, "", `?gameTitle=${encodeURIComponent(gameTitle)}`);

    gameInfoCon.classList.remove("hide");

    gameInfoCon.innerHTML = `<div class="overlay-content flex fd-col gap f-ai-c f-jc-c">
                              <h3 class="game-title">${gameTitle}</h3>
                              <img
                                class="game-cover"
                                src="${gameImg}"
                                alt="video game cover"
                              />
                              <p>
                                <strong>GENRE:</strong> ${gameGenre} <br />
                                <strong>YEAR OF RELEASE:</strong> ${gameYear} <br />
                                <strong>AGE RATING:</strong> ${gameAgeRating} <br />
                                <strong>DESCRIPTION:</strong> ${gameDescription} <br />
                              </p>
                              <div id="close-overlay" class="flex f-jc-c f-ai-c">Close</div>
                            </div>`;

    const closeOverlayBtn = document.querySelector("#close-overlay");

    function closeOverlay() {
      gameInfoCon.classList.add("hide");
      history.pushState({}, "", window.location.pathname);
    }

    closeOverlayBtn.addEventListener("click", closeOverlay);
  }

  gameInfoBtn.forEach((button) => {
    button.addEventListener("click", handleGameInfoClick);
  });
};
