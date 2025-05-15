import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const MovieCard = ({ data }) => {

    const { title, director, genre, release_year, abstract, review_vote, imagePath, slug } = data;

    return (
        <>
            <div className="card mb-5 bg-tertiary">
                <img src={imagePath} alt={title} className="w-50 mx-auto p-2 mt-2" />
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <p className="text-end">Voto: <strong><StarRating vote={review_vote} /></strong></p>
                    <p>Regia: <strong>{director}</strong></p>
                    <p>Genere: <strong>{genre}</strong></p>
                    <p>Anno uscita: <strong>{release_year}</strong></p>
                    <p className="card-text">{abstract}</p>
                    <Link to={`/movies/${slug}`} className="btn btn-primary">Scheda Film</Link>
                </div>
            </div>
        </>
    )
};

export default MovieCard;