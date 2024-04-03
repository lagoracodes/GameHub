import { accessToken, apiKey, apiURL } from "./localStorage.js";

async function fetchAPIData(apiKey) {
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Noroff-API-Key": apiKey,
    },
  };

  try {
    const response = await fetch(apiURL, options);

    if (!response.ok) {
      throw new Error("Failed to fetch protected data");
    }

    const results = await response.json();

    return results; // Return the data
  } catch (error) {
    console.error("Error fetching api data:", error);
    throw error;
  }
}

export const usableData = await fetchAPIData(apiKey)
  .then((data) => {
    // You can use 'data' further here if needed
    return data.data;
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
