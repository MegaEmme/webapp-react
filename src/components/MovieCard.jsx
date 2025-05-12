const MovieCard = () => {
    return (
        <>
            <div className="card">
                image
                <div className="card-body">
                    <h5 className="card-title">Titolo</h5>
                    <p>Author: <strong>Autore</strong></p>
                    <p className="card-text">Descrizione</p>
                    <a href="#" className="btn btn-primary">Vai a </a>
                </div>
            </div>
        </>
    )
};

export default MovieCard;