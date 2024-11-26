/* eslint-disable react/prop-types */
import ImageComponent from "@components/ImageComponent";
import { Link } from "react-router-dom";
const Actor = ({ profilePath, name, character, episodeCount, id }) => {
  if (!profilePath) return <></>;
  return (
    <Link to={`/people/${id}`} className="rounded-lg border border-gray-300">
      <ImageComponent
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w138_and_h175_face/${
                profilePath
              }`
            : "/images/NoImage.svg"
        }
        className="w-full rounded-t-lg"
        width={138}
        height={175}
      />

      <div className="mt-3 px-3">
        <p className="text-[16px] font-bold">{name}</p>
        <p className="text-[14px]">{character}</p>
        {episodeCount && <p>{episodeCount} Episodes</p>}
      </div>
    </Link>
  );
};
export default Actor;
