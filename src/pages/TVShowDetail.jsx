import { useParams } from "react-router-dom";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@/components/MediaDetail/RelatedMediaList";

import useFetch from "@hooks/useFetch";
import TVShowInformation from "@components/MediaDetail/TVShowInformation";
import SeasonList from "@components/MediaDetail/SeasonList";

const TVShowDetail = () => {
  const { id } = useParams();
  const { data: idTv } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos`,
  });
  const { data: relatedMedia, loading: isLoading } = useFetch({
    url: `/tv/${id}/recommendations`,
  });
  const certification = (idTv.content_ratings?.results || [])[0]?.rating || "";
  const genres = (idTv?.genres || []).map((item) => item.name).join(" , ");
  const crews = (idTv.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map((j) => j.job);
      return ["Director", "Writer"].some((job) => jobs.find((j) => j === job));
    })
    .slice(0, 5)
    .map((crew) => ({ id: crew.id, job: crew.jobs[0].job, name: crew.name }));
  const trailer =
    (idTv.videos?.results || [])?.filter((item) => item.type === "Trailer") ||
    [];

  return (
    <div>
      <Banner
        backdropPath={idTv.backdrop_path}
        title={idTv.name}
        posterPath={idTv.poster_path}
        overview={idTv.overview}
        genres={genres}
        point={Math.round(idTv.vote_average * 10)}
        releaseDate={idTv.first_air_date}
        certification={certification}
        crews={crews}
        trailer={trailer[0]}
      />
      <div className="bg-black px-12 pt-7 text-[1.3vw] text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6">
          <div className="flex-[2]">
            <ActorList
              actors={(idTv.aggregate_credits?.cast || []).map((item) => ({
                ...item,
                character: item.roles[0]?.character,
              }))}
            />
            <SeasonList seasonList={idTv.seasons?.reverse() || []} />
            <RelatedMediaList
              relatedMedia={relatedMedia}
              isLoading={isLoading}
              title={"More like this"}
            />
          </div>
          <div className="flex-1">
            <TVShowInformation
              status={idTv.status}
              title={idTv.name}
              country={idTv.origin_country}
              network={idTv.networks}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TVShowDetail;
