const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(query) {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;

    if (!apiKey) {
        throw new Error("Saknar OMDb API-nyckel.");
    }

    const response = await fetch(
        `${BASE_URL}?apikey=${apiKey}&s=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
        throw new Error("Kunde inte kontakta OMDb.");
    }

    const data = await response.json();

    if (data.Response === "False") {
        return [];
    }

    return data.Search;
}