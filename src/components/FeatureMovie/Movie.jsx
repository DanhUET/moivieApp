import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ImageComponent from "@components/ImageComponent";
import { useModalContext } from "@context/ModalProvider";
import useFetch from "@hooks/useFetch";
import { Link } from "react-router-dom";
import Loading from "@components/Loading";
const Movie = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    data: { backdrop_path, original_title, overview, release_date, id },
  } = props;
  const { data: idMovie } = useFetch(
    {
      url: `/movie/${id}?append_to_response=videos`,
    },
    { enabled: !!id },
  );
  const trailer =
    ((idMovie?.videos || {})?.results || [])?.filter(
      (item) => item.type === "Trailer",
    ) || [];
  const { openModal } = useModalContext();
  const handleClickTrailer = () => {
    openModal(
      <iframe
        title="Trailer"
        className="aspect-video w-[50vw]"
        src={`https://www.youtube.com/embed/${trailer[0]?.key || ""}`}
      />,
    );
  };
  if (!backdrop_path) return <Loading />;
  return (
    <>
      <ImageComponent
        src={
          backdrop_path &&
          `https://image.tmdb.org/t/p/original/${backdrop_path}`
        }
        className="aspect-video w-full object-cover brightness-50"
        width={850}
        height={1500}
      />
      <div className="absolute bottom-[15%] left-10 w-1/2 text-white sm:w-1/3">
        <h2 className="mb-2 font-bold sm:text-[2vw]">{original_title}</h2>
        <div className="mt-[1.8vw]">
          <p className="inline-block border border-[#ccc] px-2 py-1">PG13</p>
          <p className="mt-[1.2vw] text-[1.2vw]">{release_date}</p>
          <div className="hidden text-[1.2vw] lg:block">
            <p className="font-bold">Overview</p>
            <p className="mt-4">{overview}</p>
          </div>
          <div className="mt-6 flex gap-x-[1vw] text-[1.2vw] text-base">
            <button
              className="flex items-center justify-center rounded-lg bg-white px-[3vw] py-[2vw] text-black transition-transform duration-200 hover:scale-105 sm:px-[1.5vw] sm:py-[1vw]"
              onClick={handleClickTrailer}
            >
              <FontAwesomeIcon icon={faPlay} />
              <span className="ml-2">Trailer</span>
            </button>
            <Link to={`/movie/${id}`}>
              <button className="ml-5 flex items-center justify-center rounded-lg bg-gray-300/30 px-[3vw] py-[2vw] text-white transition-transform duration-200 hover:scale-105 sm:px-[1.5vw] sm:py-[1vw]">
                Thông tin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Movie;
