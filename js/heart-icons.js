document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("allGamesLoaded", function () {
    const heartIcons = document.querySelectorAll(".heart-icon");
    const emptyHeart = "./resources/images/icons/heart-empty.png";
    const filledHeart = "./resources/images/icons/heart-filled.png";

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    heartIcons.forEach((icon) => {
      const gameID = icon.dataset.id;

      if (favorites.includes(gameID)) {
        icon.src = filledHeart;
      }

      icon.addEventListener("click", function () {
        if (favorites.includes(gameID)) {
          favorites = favorites.filter((id) => id !== gameID);
          icon.src = emptyHeart;
        } else {
          favorites.push(gameID);
          icon.src = filledHeart;
        }
        localStorage.setItem("favorites", JSON.stringify(favorites));
      });
    });
  });
});
