import { apiURL, consumerKey, consumerSecret } from "./local-storage.js";

async function fetchWPAPIData() {
  const url = `${apiURL}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch WooCommerce data");
    }

    const results = await response.json();
    return results;
  } catch (error) {
    console.error("Error fetching WooCommerce data:", error);
    throw error;
  }
}

export const usableData = await fetchWPAPIData()
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

// ---------------

// old code I used with Noroff api

// import { accessToken, apiKey, apiURL } from "./local-storage.js";

// async function fetchAPIData(apiKey) {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       "X-Noroff-API-Key": apiKey,
//     },
//   };

//   try {
//     const response = await fetch(apiURL, options);

//     if (!response.ok) {
//       throw new Error("Failed to fetch protected data");
//     }

//     const results = await response.json();

//     return results;
//   } catch (error) {
//     console.error("Error fetching api data:", error);
//     throw error;
//   }
// }

// export const usableData = await fetchAPIData(apiKey)
//   .then((data) => {
//     console.log(data.data);
//     return data.data;
//   })
//   .catch((error) => {
//     console.error("Error occurred:", error);
//   });
