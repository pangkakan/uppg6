import { useState } from "react";

export default function MovieForm({ onAddMovie }) {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("0");

    function handleSubmit(e) {
        e.preventDefault();

        if (title.trim() === "") {
            alert("Du måste ange en titel för att kunna spara filmen");
            return;
        }

        if (rating === "0") {
            alert("Du måste ange ett betyg för att kunna spara filmen");
            return;
        }

        onAddMovie({
            id: crypto.randomUUID(),
            title,
            rating: Number(rating),
        });

        setTitle("");
        setRating("0");
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Lägg till en film</legend>

                <label htmlFor="title-field">Titel:</label>
                <input
                    type="text"
                    id="title-field"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="rating-field">Betyg:</label>
                <select
                    id="rating-field"
                    className="form-control"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                >
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <button type="submit" className="btn btn-success mt-3">
                    Spara film
                </button>
            </fieldset>
        </form>
    );
}