import Loading from "@components/Loading";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import { useModalContext } from "@context/ModalProvider";
import useFetch from "@hooks/useFetch";

const FindFilm = () => {
  const { typeFilm, genres, statusRating } = useModalContext();
  const [minRating, maxRating] =
    statusRating === "all" ? [0, 100] : statusRating.split("-");
  const { data: relatedMedia, loading: isLoading } = useFetch({
    url: `/discover/${typeFilm}?sort_by=popularity.desc&with_genres=${genres.join(",")}&vote_average.gte=${minRating / 10}&vote_average.lte=${maxRating / 10}`,
  });
  console.log(statusRating);
  return (
    <div>
      <h1 className="text-center text-[1.7vw] font-bold">
        Danh sách phim tìm được
      </h1>
      {!relatedMedia ? (
        <Loading />
      ) : (
        <RelatedMediaList
          relatedMedia={relatedMedia}
          isLoading={isLoading}
          title={""}
        />
      )}
    </div>
  );
};
export default FindFilm;
