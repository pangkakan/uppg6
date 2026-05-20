import { useState } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";

export default function App() {
    const [movies, setMovies] = useState([]);

    function addMovie(movie) {
        setMovies([...movies, movie]);
    }

    function deleteMovie(id) {
        setMovies(movies.filter((movie) => movie.id !== id));
    }

    function sortByTitle() {

        const sortedMovies = [...movies].sort((a, b) =>
            a.title.localeCompare(b.title));

        setMovies(sortedMovies);
    }

    function sortByRating() {
        const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);

        setMovies(sortedMovies);
    }

    return (
        <div className="container">
            <h1>Min filmlista</h1>

            <MovieForm onAddMovie={addMovie} />

            <hr />

            <h2>Filmer</h2>

            <MovieList movies={movies} onDeleteMovie={deleteMovie} />

            <button
                type="button"
                className="btn btn-primary me-2 mb-3"
                onClick={sortByTitle}
            >
                Sortera alfabetiskt
            </button>

            <button
                type="button"
                className="btn btn-primary mb-3"
                onClick={sortByRating}
            >
                Sortera efter betyg
            </button>


        </div>
    );
}