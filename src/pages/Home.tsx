import MovieCard from "../components/MovieCard";
import { FormEvent, useState ,useEffect} from "react";
import { searchMovies, getPopularMovies } from "../services/api";


import "../css/home.css";
interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies,setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchMovies = async () => {
      try{
        const data = await getPopularMovies();
        setMovies(data);  
      }catch (error) {
        console.error("Error fetching movies:", error); 
        setError("Failed to fetch movies. Please try again later.");
      } finally {
        setLoading(false);
      }}
      fetchMovies()
    }, []);

 



  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(searchTerm);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies...."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
<button type="submit" className="search-button">Search</button>
</form>



      <div className="movies-grid">
        {movies
        //   .filter((movie) =>
        //     movie.title.toLowerCase().startsWith(searchTerm.toLowerCase())
        //   )
          .map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
      </div>
    </div>
  );
}

export default Home;
