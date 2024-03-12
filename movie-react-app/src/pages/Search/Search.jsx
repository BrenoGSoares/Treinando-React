import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../../components/MovieCard/MovieCard"

const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import { Title, MoviesContainer } from "../Home/styles"


const Search = () => {
    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get('q')

    const getSearchMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    };

    useEffect(() => {
        const searchWithQueryURL = `${searchUrl}?${apiKey}&query=${query}`;
        getSearchMovies(searchWithQueryURL);
    }, [query]);


    return (
        <div className="container">
            <Title>Resultados para: <span className="query-text">{query}</span></Title>
            <MoviesContainer>
                {movies.length > 0 &&
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </MoviesContainer>
        </div>
    )
}

export default Search
