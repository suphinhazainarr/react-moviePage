import '../css/movieCard.css';
interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

function MovieCard({ movie }: { movie: Movie }) {
    function onFavoriteClick() {
      console.log("Favorite clicked");
    }
  
    return (
      <div className="movie-card">
        <div className="movie-poster">
          <img src={movie.Poster} alt={movie.Title} />
          <button className="favorite-btn" onClick={onFavoriteClick}>
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
  
        <div className="movie-info">
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </div>
    );
  }
  

export default MovieCard;