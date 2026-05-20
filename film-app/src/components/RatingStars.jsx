import starIcon from "../assets/star.png";

export default function RatingStars({ rating }) {
    return (
        <>
            {Array.from({ length: rating }).map((_, index) => (
                <img key={index} src={starIcon} alt="star" />
            ))}
        </>
    );
}