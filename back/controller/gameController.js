import fetch from "node-fetch"; // ou axios si tu préfères

const CLIENT_ID = "de9z2m2rk52hzvu3tdrvldige8san8";
const CLIENT_SECRET = "l4yb5yistnzndvwirqdybsjav87to6";

// Fonction pour récupérer l'access token
async function getAccessToken() {
  const response = await fetch("https://id.twitch.tv/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: "client_credentials",
    }),
  });

  const data = await response.json();
  return data.access_token;
}

// Fonction pour récupérer les jeux via l'API IGDB
async function getGames(req, res) {
  const accessToken = await getAccessToken();

  const response = await fetch("https://api.igdb.com/v4/games", {
    method: "POST",
    headers: {
      "Client-ID": CLIENT_ID,
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
    body: "fields name, genres, platforms; limit 10;",
  });

  const games = await response.json();

  // Envoie des jeux récupérés au frontend
  res.json(games);
}

export default { getGames };
