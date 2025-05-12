import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);

    function getMovies() {
        axios.get('http://localhost:3000/api/movies')
            .then(response => {
                console.log(response.data);
                setMovies(response.data);
            })
            .catch(err => console.log(err));
    }

    useEffect(getMovies, []);

    return (
        <>
            <h1>Films</h1>
            <section>
                <h2>Best Movies Ever</h2>
                <div className="row">
                    {movies.length ? movies.map(movie => (
                        <div className="col-12 col-md-4 col-lg-3" key={movie.id}>
                            <MovieCard data={movie} />
                        </div>
                    )) : <div>Film non trovato </div>}
                </div>
            </section>
        </>
    )
};

export default MoviesPage;