import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";
import StarRating from "../components/StarRating";
import ReviewForm from "../components/ReviewForm";

import { useContext } from "react";
import GlobalContext from "../contexts/globalContext";

const MovieDetailPage = () => {

    const { slug } = useParams();

    const [movie, setMovie] = useState({});

    const { setIsLoading } = useContext(GlobalContext)

    function getMovie() {

        setIsLoading(true);

        axios.get(`http://localhost:3000/api/movies/${slug}`)
            .then(response => setMovie(response.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    };

    useEffect(getMovie, [slug]);

    function renderReviews() {
        return movie.reviews?.map(review => <ReviewCard key={review.id} data={review} />)
    };

    return (
        <article id="movie">
            {movie ? <>
                <header>
                    <h1>{movie.title}</h1>
                    <h2>Regia: {movie.director}</h2>
                    <p>{movie?.abstract}</p>
                </header>
                {movie?.id && <section id="reviews">
                    <header className="mb-4 d-flex justify-content-between align-items-center">
                        <h4>Le nostre recensioni</h4>
                        <div>
                            Average: {movie.reviews_vote} <StarRating vote={movie.reviews_vote} />
                        </div>
                    </header>
                    {movie.reviews?.length ? renderReviews() : <h2 className="text-center mb-4">Nessuna recensione trovata</h2>}
                </section>}

                {movie?.id && <section id="add-review">
                    <ReviewForm movieId={movie.id} refreshMovie={getMovie} />
                </section>}
            </> : 'Film non trovato'}
        </article>
    )
};

export default MovieDetailPage;