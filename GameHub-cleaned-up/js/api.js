import { accessToken, apiKey } from "./localStorage.js";

const apiUrl = "https://v2.api.noroff.dev/gamehub";

async function fetchAPIData(apiKey) {
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Noroff-API-Key": apiKey,
    },
  };

  try {
    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      throw new Error("Failed to fetch protected data");
    }

    const apiData = await response.json();

    return apiData.data;

  } catch (error) {
    console.error("Error fetching api data:", error);
  }
}

export const apiData = fetchAPIData(apiKey);
