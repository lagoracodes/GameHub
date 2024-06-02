const cartBubble = document.querySelector("#cart-bubble");

document.addEventListener("DOMContentLoaded", function () {
  async function retrieveDataFromLocalStorage(key) {
    return new Promise((resolve, reject) => {
      try {
        const data = localStorage.getItem(key);
        resolve(JSON.parse(data));
      } catch (error) {
        reject(error);
      }
    });
  }

  async function initDataRetrieval() {
    try {
      const chosenSeller = await retrieveDataFromLocalStorage("chosenSeller");
      const chosenGame = await retrieveDataFromLocalStorage("chosenGame");

      if (chosenGame && chosenSeller) {
        cartBubble.classList.remove("hide");
      } else if (!chosenGame || chosenGame.length === 0) {
        cartBubble.classList.add("hide");
      }
    } catch (error) {
      checkOut.innerHTML += console.error(
        "Error retrieving data from localStorage:",
        error
      );
    }
  }

  initDataRetrieval();
});
