import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import { MoviePage, Tagline, Info } from "./styles";


import MovieCard from "../../components/MovieCard/MovieCard";


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Movie = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
    }

    const formatcurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`
        getMovie(movieUrl)
    }, [])

    return (
        <MoviePage>
            {movie && (
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <Tagline>
                        {movie.tagline}
                    </Tagline>
                    <Info>
                        <h3>
                            <BsWallet2 /> Orçamento:
                        </h3>
                        <p>{formatcurrency(movie.budget)}</p>
                    </Info>
                    <Info>
                        <h3>
                            <BsGraphUp /> Receita:
                        </h3>
                        <p>{formatcurrency(movie.revenue)}</p>
                    </Info>
                    <Info>
                        <h3>
                            <BsHourglassSplit /> Duração:
                        </h3>
                        <p>{movie.runtime} minutos</p>
                    </Info>
                    <Info className="description">
                        <h3>
                            <BsFillFileEarmarkTextFill /> Descrição:
                        </h3>
                        <p>{movie.overview}</p>
                    </Info>
                </>
            )}
        </MoviePage>
    );
};

export default Movie
