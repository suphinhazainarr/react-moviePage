interface Movie {
    id: number;
    url: string;
    title: string;
    release_date: string;
}

function MovieCard({ movie }: { movie: Movie }) {


    function onFavoriteClick(){
        console.log("Favorite clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url}  alt={movie.title}/>
            <div className="favorite-btn ">
                <button className="btn" onClick={onFavoriteClick}>
                    <i className="fa-solid fa-heart"></i>
                </button>
            </div>
        </div>

        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
             </div>
    </div>
}

export default MovieCard;