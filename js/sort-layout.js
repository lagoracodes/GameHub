import { showGameInfo } from "./show-game-info.js";

const lines = document.querySelector(".sb-1");
const threeLines = document.querySelectorAll(".three-lines");
const grid = document.querySelector(".sb-2");
const gridBlocks = document.querySelectorAll(".dot");

const gameCardContainer = document.querySelector("#all-games");
const gameCards = document.getElementsByClassName("game-card");
const gameImages = document.getElementsByClassName("game-picture");
const lowerPanels = document.getElementsByClassName("lower-panel");
const gameInfoBtnCon = document.getElementsByClassName("game-info-btn-con");
const gameInfoBtn = document.getElementsByClassName("game-info-btn");
const gameTitles = document.getElementsByClassName("game-title");

// LINES
lines.addEventListener("click", function () {
  gridBlocks.forEach((block) => {
    block.classList.remove("active-glow");
  });

  gameCardContainer.classList.remove("grid-wrapper");
  gameCardContainer.classList.add("flex-col");
  gameCardContainer.classList.add("gap-3");

  threeLines.forEach((line) => {
    line.classList.add("active-glow");
  });

  Array.from(gameCards).forEach((card) => {
    card.style.flexDirection = "row";
  });

  Array.from(gameImages).forEach((image) => {
    image.style.borderRadius = "40px 0 0 40px";
  });

  Array.from(lowerPanels).forEach((panel) => {
    panel.classList.add("lower-panel-lines");
  });

  Array.from(gameInfoBtn).forEach((button) => {
    button.classList.add("hide");
  });

  Array.from(gameInfoBtnCon).forEach((con) => {
    const gameInfoBtnCon = con.closest(".game-card");

    const gameGenre = gameInfoBtnCon.dataset.genre;
    const gameAgeRating = gameInfoBtnCon.dataset.age;
    const gameDescription = gameInfoBtnCon.dataset.description;
    const gameYear = gameInfoBtnCon.dataset.released;
    con.innerHTML += `<div class="game-info-btn-p-con"><p>
      <strong>GENRE:</strong> ${gameGenre} <br />
      <strong>YEAR OF RELEASE:</strong> ${gameYear} <br />
      <strong>AGE RATING:</strong> ${gameAgeRating} <br />
      <strong>DESCRIPTION:</strong> ${gameDescription} <br />
    </p></div>`;
    con.classList.add("disabled-pointer-events"); // Disable pointer events
  });

  Array.from(gameTitles).forEach((title) => {
    title.classList.add("game-title-lines");

    if (title.classList.contains("margin")) {
      title.classList.remove("margin");
    }

    if (title.innerText.length >= 20) {
      const gameTitleCon = title.closest(".game-title-con-target");
      if (gameTitleCon) {
        gameTitleCon.classList.add("game-title-con");
      }
      title.style.gap = "4rem";
    } else {
      title.style.gap = "10rem";
    }
  });
});

// GRID
grid.addEventListener("click", function () {
  gameCardContainer.classList.remove("flex-col");
  gameCardContainer.classList.remove("gap-3");
  gameCardContainer.classList.add("grid-wrapper");

  threeLines.forEach((line) => {
    line.classList.remove("active-glow");
  });

  gridBlocks.forEach((block) => {
    block.classList.add("active-glow");
  });

  Array.from(gameCards).forEach((card) => {
    card.style.flexDirection = "column";
  });

  Array.from(gameImages).forEach((image) => {
    image.style.borderRadius = "40px 40px 0 0 ";
  });

  Array.from(lowerPanels).forEach((panel) => {
    panel.classList.remove("lower-panel-lines");
    panel.style.gap = "0.75rem";
  });

  Array.from(gameInfoBtn).forEach((button) => {
    button.classList.remove("hide");
  });

  Array.from(gameInfoBtnCon).forEach((con) => {
    con.innerHTML = `<span class="btn-span uppercase letter-spacing game-info-btn">game info</span>`;
    con.classList.remove("disabled-pointer-events"); // Enable pointer events
  });

  Array.from(gameTitles).forEach((title) => {
    title.classList.remove("game-title-lines");

    if (title.classList.contains("margin") === true) {
      title.classList.add("margin");
      console.log(title);
    }

    if (title.innerText.length >= 20) {
      const gameTitleCon = title.closest(".game-title-con-target");
      if (gameTitleCon) {
        gameTitleCon.classList.remove("game-title-con");
      }
      title.classList.remove("long-title");
    }
  });
});

showGameInfo();
