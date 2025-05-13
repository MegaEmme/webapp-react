import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    function getMovies() {
        axios.get('http://localhost:3000/api/movies', {
            params: {
                search
            }
        })
            .then(response => {
                setMovies(response.data);
            })
            .catch(err => console.log(err));
    };

    function searchMovies(e) {
        e.preventDefault();
        getMovies();
    };

    useEffect(getMovies, []);

    return (
        <>
            <h1 className="text-center mb-4">Films</h1>
            <section>
                <div className="d-flex justify-content-between">
                    <h2>Lista film:</h2>
                    <form className="row g-1" onSubmit={searchMovies}>
                        <div className="col-auto">
                            <label className="visually-hidden">Ricerca film</label>
                            <input type="text" className="form-control" placeholder="Ricerca film..." value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Cerca</button>
                        </div>
                    </form>
                </div>
                <div className="row mt-auto h-100">
                    {movies.length ? movies.map(movie => (
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={movie.id}>
                            <MovieCard data={movie} />
                        </div>
                    )) : <div>Film non trovato </div>}
                </div>
            </section>
        </>
    )
};

export default MoviesPage;