import { createContext, useState, useContext, useEffect, ReactNode } from "react";

// 1. Define a type for a Movie
interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

// 2. Define a type for the Context value
interface MovieContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: string) => void; // corrected
  isFavorite: (movieId: string) => boolean;       // corrected
}

// 3. Create the context with a default value (null for now)
const MovieContext = createContext<MovieContextType | null>(null);

// 4. Custom Hook (with proper typing)
export const useMovieContext = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};

// 5. Type for Provider's props
interface MovieProviderProps {
  children: ReactNode;
}

// 6. MovieProvider component
export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {
    setFavorites(prev => [...prev, movie]);
  };

  const removeFromFavorites = (movieId: string) => {
    setFavorites(prev => prev.filter(movie => movie.imdbID !== movieId));
  };

  const isFavorite = (movieId: string) => {
    return favorites.some(movie => movie.imdbID === movieId);
  };

  const value: MovieContextType = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
