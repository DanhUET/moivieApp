import ImageComponent from "@components/ImageComponent";
// import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import { GENDER } from "@libs/constants";
import { lazy } from "react";
import { useLoaderData } from "react-router-dom";
const RelatedMediaList = lazy(
  () => import("@components/MediaDetail/RelatedMediaList"),
);
const PeoplePage = () => {
  const data = useLoaderData();
  const movies = (data?.combined_credits || {})?.cast || [];
  console.log(movies);
  return (
    <div className="flex gap-x-5 bg-black p-10 text-white">
      <div className="flex-1">
        <ImageComponent
          src={
            data.profile_path &&
            `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${
              data.profile_path
            }`
          }
          width={300}
          height={450}
        />
        <div className="mx-3 mb-6 mt-3 text-[1.3vw]">
          <p className="font-bold">Personal info</p>
          <div className="mt-3">
            <p className="font-bold">Known For</p>
            <p className="text-[1.2vw]">{data.known_for_department}</p>
          </div>
          <div className="mt-3">
            <p className="font-bold">Gender</p>
            <p className="text-[1.2vw]">{GENDER[data.gender]}</p>
          </div>
          <div className="mt-3">
            <p className="font-bold">Place of birth</p>
            <p className="text-[1.2vw]">{data.place_of_birth}</p>
          </div>
          <div className="mt-3">
            <p className="font-bold">Birthday</p>
            <p className="text-[1.2vw]">{data.birthday}</p>
          </div>
        </div>
      </div>
      <div className="flex-[2]">
        <div>
          <h2 className="mb-6 text-[2vw] font-bold">{data.name}</h2>
          <h3 className="mb-4 text-[1.4vw] font-bold">Biography</h3>
          <p className="whitespace-pre-line">{data.biography}</p>
        </div>
        <div className="mt-11">
          <RelatedMediaList
            relatedMedia={movies}
            isLoading={true}
            title={"Known For"}
          />
        </div>
      </div>
    </div>
  );
};
export default PeoplePage;
