import MovieCard from "../components/MovieCard";

const MoviesPage = () => {
    return (
        <>
            <h1>Films</h1>
            <section>
                <h2>Best Movies Ever</h2>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <MovieCard />
                    </div>
                </div>
            </section>
        </>
    )
};

export default MoviesPage;