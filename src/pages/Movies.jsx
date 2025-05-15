import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../contexts/globalContext";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const { setIsLoading } = useContext(GlobalContext)

    function getMovies() {

        setIsLoading(true);

        axios.get('http://localhost:3000/api/movies', {
            params: {
                search
            }
        })
            .then(response => {
                setMovies(response.data);
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    };

    function searchMovies(e) {
        e.preventDefault();
        getMovies();
    };

    useEffect(getMovies, []);

    return (
        <>
            <header className="d-flex justify-content-between mb-3 align-items-center">
                <h1 className="text-center mb-4">Films</h1>
                <Link className="btn btn-primary" to="/movies/new" alt="Aggiungi nuovo libro">Aggiungi Libro</Link>
            </header>
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