import { Link } from "react-router-dom";
import CircularProgressBar from "./MediaList/CircularProgressBar";
import ImageComponent from "./ImageComponent";
const MovieCard = ({ allMovie, trending }) => {
  const handleNavigate = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return allMovie.map((movie) => {
    const point = Math.floor(movie.vote_average * 10);
    return (
      <Link
        to={
          movie.media_type === "movie"
            ? `/movie/${movie.id}`
            : `/tv/${movie.id}`
        }
        key={movie.id}
        className="rounded-lg border border-slate-800"
        onClick={handleNavigate}
      >
        <div className="relative" key={movie.id}>
          {(movie.media_type === "tv" || trending === "tv") && (
            <div className="absolute right-1 top-1 rounded-lg bg-black px-2 py-1 text-[14px] font-bold text-white">
              TV Show
            </div>
          )}
          <ImageComponent
            src={
              movie.backdrop_path &&
              `https://media.themoviedb.org/t/p/original/${movie.backdrop_path}`
            }
            className="w-full rounded-lg"
            width={170}
            height={95}
          />
          <div className="relative -top-[1.8vw] m-3 px-4">
            <CircularProgressBar
              percent={Math.floor(point) || ""}
              strokeColor={
                point / 10 >= 7 ? "green" : point >= 5 ? "orange" : "red"
              }
            />

            <p className="mt-2 text-[16px] font-bold">
              {movie.title || movie.name}
            </p>
            <p className="text-[16px] text-gray-400">
              {movie.release_date || movie.first_air_date}
            </p>
          </div>
        </div>
      </Link>
    );
  });
};
export default MovieCard;
