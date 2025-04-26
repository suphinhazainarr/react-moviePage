import MovieCard from "../components/MovieCard";

function Home() {
    const movies = [
        { id: 1, title: "Movie 1", release_date: " 2025" , url:"" },
        { id: 1, title: "Movie 1", release_date: " 2025" ,url:"" },
        { id: 1, title: "Movie 1", release_date: " 2025" ,url:""}
    ];


    return (
        <div className="home">
            <div className="movies-grid">
                {
                    movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))
                }
            </div>
        </div>
    )


}

export default Home;    