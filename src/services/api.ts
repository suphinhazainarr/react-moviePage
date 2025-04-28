const API_KEY = "3d3d9093";
const BASE_URL  = "http://www.omdbapi.com/";

// Define the Movie interface
interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

// Get popular movies
export const getPopularMovies = async () => {
    let allMovies: Movie[] = [];
    for (let page = 1; page <= 3; page++) {  // Fetch first 3 pages
      const response = await fetch(`${BASE_URL}?s=movie&apikey=${API_KEY}&page=${page}`);
      const data = await response.json();
      if (data.Search) {
        allMovies = [...allMovies, ...data.Search];
      } else {
        break;
      }
    }
    return allMovies;
  };
  

// Search movies
export const searchMovies = async (query: string) => {
    const response = await fetch(`${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`);
    const data = await response.json();
    return data.Search || []; // <-- again Search not results
};

