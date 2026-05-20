import RatingStars from "./RatingStars";
import deleteIcon from "../assets/delete.png";

export default function MovieItem({ movie, onDeleteMovie }) {
    return (
        <li data-grade={movie.rating} data-title={movie.title}>
            {movie.title}

            <img
                src={deleteIcon}
                alt="Delete movie"
                className="delete-movie-icon"
                onClick={() => onDeleteMovie(movie.id)}
            />

            <RatingStars rating={movie.rating} />
        </li>
    );
}