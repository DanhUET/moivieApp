import { useParams } from "react-router-dom";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@/components/MediaDetail/RelatedMediaList";
import MovieInformation from "@components/MediaDetail/MovieInformation";
import useFetch from "@hooks/useFetch";

const MovieDetail = () => {
  const { id } = useParams();
  const { data: idMovie } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits,videos`,
  });
  const { data: relatedMedia, loading: isLoading } = useFetch({
    url: `/movie/${id}/recommendations`,
  });
  const certification = (
    (idMovie.release_dates?.results || []).find(
      (item) => item.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((index) => index.certification)?.certification;
  const genres = (idMovie?.genres || []).map((item) => item.name).join(" , ");

  const crews = (idMovie.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  const trailer =
    (idMovie.videos?.results || [])?.filter(
      (item) => item.type === "Trailer",
    ) || [];

  return (
    <div>
      <Banner
        backdropPath={idMovie.backdrop_path}
        posterPath={idMovie.poster_path}
        title={idMovie.title}
        releaseDate={idMovie.release_date}
        overview={idMovie.overview}
        genres={genres}
        point={Math.round((idMovie?.vote_average || 0) * 10)}
        certification={certification}
        crews={crews}
        trailer={trailer[0]}
      />
      <div className="bg-black px-12 pt-7 text-[1.3vw] text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6">
          <div className="flex-[2]">
            <ActorList actors={idMovie.credits?.cast || []} />

            <RelatedMediaList
              relatedMedia={relatedMedia}
              isLoading={isLoading}
              title={"More like this"}
            />
          </div>
          <div className="flex-1">
            <MovieInformation
              title={idMovie.original_title}
              country={idMovie.origin_country}
              status={idMovie.status}
              budget={idMovie.budget}
              revenue={idMovie.revenue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
