/* eslint-disable react/prop-types */
import Loading from "@components/Loading";
import MovieCard from "@components/MovieCard";

const RelatedMediaList = ({ relatedMedia, isLoading, title }) => {
  let related =
    relatedMedia.results?.filter((item) => item.backdrop_path) || [];
  if (title === "Known For") {
    related = relatedMedia;
  }
  return (
    <div>
      <p className="mb-4 text-[1.5vw] font-bold">{title}</p>
      {!isLoading ? (
        <Loading />
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-[2.5vw] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <MovieCard allMovie={related} />
        </div>
      )}
    </div>
  );
};
export default RelatedMediaList;
