import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {

    const { id, title, director, genre, release_year, abstract, review_vote, imagePath } = data;

    return (
        <>
            <div className="card mb-5 bg-tertiary">
                <img src={imagePath} alt={title} className="w-50 mx-auto p-2" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>Voto: <strong>{review_vote}</strong></p>
                    <p>Regia: <strong>{director}</strong></p>
                    <p>Genere: <strong>{genre}</strong></p>
                    <p>Anno uscita: <strong>{release_year}</strong></p>
                    <p className="card-text">{abstract}</p>
                    <Link to={`/movies/${id}`} className="btn btn-primary">Scheda Film</Link>
                </div>
            </div>
        </>
    )
};

export default MovieCard;