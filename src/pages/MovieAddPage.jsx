import axios from "axios";
import { useState } from "react";

const MovieAddPage = () => {

    const initialValues = {
        title: '',
        director: '',
        genre: '',
        release_year: '',
        abstract: '',
        image: null
    }

    const [formData, setFormData] = useState(initialValues);

    const handleFormData = (e) => {

        const { name, value, files } = e.target;

        let currentValue = value;

        if (name === 'image') {
            currentValue = files[0];
        } else {
            currentValue = value;
        }

        setFormData((formData) => ({
            ...formData,
            [name]: currentValue,
        }))
    }

    const sendData = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post(`http://127.0.0.1:3000/api/movies`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                setFormData(initialValues);
            })
            .catch(err => console.log(err))

    }


    return (
        <article className="mb-4">

            <h1 className="text-center mb-3 p-2">Aggiungi un nuovo film</h1>

            <form onSubmit={sendData}>

                <div className="mb-3">
                    <label htmlFor="movie-title" className="form-label">Titolo</label>
                    <input type="text" className="form-control" id="movie-title" name="title"
                        placeholder="Inserisci titolo" value={formData.title} onChange={handleFormData} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="movie-director" className="form-label">Regia</label>
                    <input type="text" className="form-control" id="movie-director" name="director"
                        placeholder="Inserisci regista" value={formData.director} onChange={handleFormData} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="movie-genre" className="form-label">Genere</label>
                    <input type="text" className="form-control" id="movie-genre" name="genre"
                        placeholder="Inserisci genere" value={formData.genre} onChange={handleFormData} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="movie-release_year" className="form-label">Anno di uscita</label>
                    <input type="number" className="form-control" id="movie-release_year" name="release_year" placeholder="Inserisci anno di uscita" rows="3" value={formData.release_year} onChange={handleFormData} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="movie-abstract" className="form-label">Trama</label>
                    <textarea className="form-control" id="movie-abstract" name="abstract" placeholder="Inserisci trama" rows="3" value={formData.abstract} onChange={handleFormData} required></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="movie-image" className="form-label">Copertina</label>
                    <input className="form-control" type="file" id="movie-image" name="image" onChange={handleFormData} required />
                </div>

                <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-primary p-3">Aggiungi Libro</button>
                </div>

            </form>

        </article>
    )
};

export default MovieAddPage;