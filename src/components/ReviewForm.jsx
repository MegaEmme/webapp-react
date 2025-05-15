import axios from "axios";
import { useState } from "react";

const ReviewForm = ({ movieId, refreshMovie }) => {

    const initialValues = {
        name: '',
        text: '',
        vote: 1
    }

    const [formData, setFormData] = useState(initialValues);

    const handleFormData = (e) => {
        const { name, value } = e.target;
        let currentValue = value
        if (name === 'vote') {
            currentValue = parseInt(value)
        }

        setFormData((formData) => ({
            ...formData,
            [name]: currentValue,
        }))
    }

    const sendData = (e) => {
        e.preventDefault();
        axios.post(`http://127.0.0.1:3000/api/movies/${movieId}/reviews`, formData)
            .then(response => {
                setFormData(initialValues)
                refreshMovie()
            })
            .catch(err => console.log(err))

    }

    return (

        <form onSubmit={sendData} className="bg-warning rounded">
            <h2 className="p-4 text-center">Aggiungi Recensione</h2>
            <div className="mb-3 p-4">
                <label htmlFor="review-name" className="form-label">Il tuo nome</label>
                <input type="text" name="name" className="form-control" required id="review-name" placeholder="Inserisci nome" value={formData.name} onChange={handleFormData} />
            </div>
            <div className="mb-3 p-4">
                <label htmlFor="review-text" className="form-label">Testo recensione</label>
                <textarea type="text" name="text" className="form-control" required rows={3} id="review-text" placeholder="Inserisci recensione" value={formData.text} onChange={handleFormData} />
            </div>
            <div className="p-4">
                <label htmlFor="review-vote" className="form-label">Il tuo voto</label>
                <input type="number" min={1} max={5} name="vote" className="form-control" id="review-vote" value={formData.vote} onChange={handleFormData} />
            </div>
            <div className="text-center mb-3 p-4"><button type="submit" className="btn btn-primary p-2 px-5">Invia</button></div>
        </form>
    )
};

export default ReviewForm;