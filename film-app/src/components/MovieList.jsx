import MovieItem from "./MovieItem";

export default function MovieList({ movies, onDeleteMovie }) {
    return (
        <ul id="movies">
            {movies.map((movie) => (
                <MovieItem
                    key={movie.id}
                    movie={movie}
                    onDeleteMovie={onDeleteMovie}
                />
            ))}
        </ul>
    );
}