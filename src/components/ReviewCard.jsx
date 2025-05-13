import StarRating from "./StarRating";

function ReviewCard({ data }) {

    const { name, vote, text } = data

    return (
        <div className="card mb-4">
            <div className="card-body">
                <p>"{text}"</p>
                <p>Voto <StarRating vote={vote} /> {vote}</p>
                <p>Di {name}</p>
            </div>
        </div>
    )

};

export default ReviewCard;