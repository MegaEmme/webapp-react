import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";
import StarRating from "../components/StarRating";

const MovieDetailPage = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState({});

    function getMovie() {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(response => setMovie(response.data))
            .catch(err => console.log(err))
    };

    useEffect(getMovie, [id]);

    function renderReviews() {
        return movie.reviews?.map(review => <ReviewCard key={review.id} data={review} />)
    };

    console.log(movie)

    return (
        <article id="movie">
            {movie ? <>
                <header>
                    <h1>{movie.title}</h1>
                    <h2>Regia: {movie.director}</h2>
                    <p>{movie?.abstract}</p>
                </header>
                <section id="reviews">
                    <header className="mb-4 d-flex justify-content-between align-items-center">
                        <h4>Le nostre recensioni</h4>
                        <div>
                            Average: {movie.reviews_vote} <StarRating vote={movie.reviews_vote} />
                        </div>
                    </header>
                    {renderReviews()}
                </section>
            </> : 'Film non trovato'}
        </article>
    )
};

export default MovieDetailPage;