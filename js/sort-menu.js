import { showMoreGames } from "./show-more-games.js";

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("allGamesLoaded", function () {
    const sortBtn = document.querySelector("#sort-btn");
    const sortDropDown = document.querySelector("#sort-dropdown");
    const items = Array.from(document.querySelectorAll(".game-card"));
    const itemsContainer = document.querySelector("#all-games");
    const sortOptions = document.querySelectorAll("#sort-dropdown a");
    const sortArrow = document.querySelector(".arrow-down");

    sortBtn.addEventListener("click", function () {
      sortArrow.classList.toggle("rotate");
      sortDropDown.classList.toggle("hide");
    });

    document.addEventListener("click", function (event) {
      if (
        !sortDropDown.contains(event.target) &&
        !sortBtn.contains(event.target)
      ) {
        sortArrow.classList.remove("rotate");
        sortDropDown.classList.add("hide");
      }
    });

    sortDropDown.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        const sortType = event.target.getAttribute("data-sort");

        sortOptions.forEach((option) => option.classList.remove("underline"));

        event.target.classList.add("underline");

        sortItems(sortType);
      }
    });

    function sortItems(sortType) {
      items.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute("data-price"));
        const priceB = parseFloat(b.getAttribute("data-price"));

        if (sortType === "priceAsc") {
          return priceA - priceB;
        } else if (sortType === "priceDsc") {
          return priceB - priceA;
        }
      });

      itemsContainer.classList.add("sort-fade-out");

      setTimeout(() => {
        while (itemsContainer.firstChild) {
          itemsContainer.removeChild(itemsContainer.firstChild);
        }

        items.forEach((item) => itemsContainer.appendChild(item));

        void itemsContainer.offsetWidth;

        itemsContainer.classList.remove("sort-fade-out");
        itemsContainer.classList.add("sort-fade-in");
        showMoreGames();
      }, 300);
    }
  });
});
