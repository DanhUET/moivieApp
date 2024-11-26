/* eslint-disable react/prop-types */
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../MediaList/CircularProgressBar";
import ImageComponent from "@components/ImageComponent";
import { useModalContext } from "@context/ModalProvider";
import Loading from "@components/Loading";

const Banner = ({
  backdropPath,
  posterPath,
  title,
  certification,
  releaseDate,
  genres,
  overview,
  point = 0,
  crews = {},
  trailer,
}) => {
  const { openModal } = useModalContext();
  const handleClickTrailer = () => {
    openModal(
      <iframe
        title="Trailer"
        className="aspect-video w-[50vw]"
        src={`https://www.youtube.com/embed/${trailer?.key || ""}`}
      />,
    );
  };
  if (!backdropPath) return <Loading />;
  return (
    <div className="relative overflow-hidden shadow-md shadow-slate-700">
      <ImageComponent
        src={
          backdropPath &&
          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${backdropPath}`
        }
        className="aspect-video w-full object-cover brightness-[0.2]"
        width={850}
        height={1500}
      />

      <div className="absolute bottom-0 left-0 right-0 top-9 mx-auto flex max-w-screen-xl gap-6 px-12 text-white">
        <div className="flex-1">
          <ImageComponent
            src={
              posterPath &&
              `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${posterPath}`
            }
            alt=""
            width={600}
            height={900}
          />
        </div>
        <div className="flex-[2]">
          <p className="text-[22px] font-bold">{title}</p>
          <div className="mt-2 flex items-center gap-3">
            <span className="border border-[#ccc] px-[1vw] py-[0.6vw] text-gray-100">
              {certification}
            </span>
            <p className="font-bold">{releaseDate}</p>
            <p className="">{genres}</p>
          </div>
          <div className="mt-2 flex items-center gap-5">
            <div className="flex items-center gap-x-3">
              <CircularProgressBar percent={point || 0} />
              <span className="text-[24px] font-bold">Rating</span>
            </div>
            <button
              className="px-[1vw] py-[0.5vw] transition-transform duration-200 hover:scale-105 hover:rounded-lg hover:bg-[#ccc]"
              onClick={handleClickTrailer}
            >
              <FontAwesomeIcon icon={faPlay} />
              <span className="ml-[0.7vw] text-[23px]">Trailer</span>
            </button>
          </div>
          <p className="mt-[1vw] text-[23px]">Overview</p>
          <p className="text-[18px] text-gray-300">{`${overview}`}</p>
          <div className="mt-[2vw] flex justify-between">
            <div>
              <p className="font-bold">{crews[0]?.job || ""}</p>
              <p>{crews[1]?.name || ""}</p>
            </div>
            <div>
              <p className="font-bold">{crews[1]?.job || ""}</p>
              <p>{crews[1]?.name || ""}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
