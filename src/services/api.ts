const API_KEY = "3d3d9093";
const BASE_URL  = "http://www.omdbapi.com/";

// Get popular movies
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}?s=movie&apikey=${API_KEY}`);
    const data = await response.json();
    return data.Search || []; // <-- change from results to Search
};

// Search movies
export const searchMovies = async (query: string) => {
    const response = await fetch(`${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`);
    const data = await response.json();
    return data.Search || []; // <-- again Search not results
};

