import { useMovieContext } from "../contexts/MovieContext";
import "../css/movieCard.css";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

function MovieCard({ movie }: { movie: Movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.imdbID); // using imdbID

  function onFavoriteClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.imdbID);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            <i className={favorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
