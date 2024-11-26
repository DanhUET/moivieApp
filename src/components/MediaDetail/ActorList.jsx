/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Actor from "./Actor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ActorList = ({ actors }) => {
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    setShowMore(false);
  }, [actors]);
  return (
    <div>
      <p className="text-[2.5vw] font-bold">Actor</p>
      <div className="mt-4 grid grid-cols-3 gap-3 lg:grid-cols-4">
        {showMore
          ? actors.map((actor) => (
              <Actor
                id={actor.id}
                profilePath={actor.profile_path}
                name={actor.name}
                character={actor.character}
                key={actor.id}
                episodeCount={actor.total_episode_count}
              />
            ))
          : actors
              .slice(0, 4)
              .map((actor) => (
                <Actor
                  id={actor.id}
                  profilePath={actor.profile_path}
                  name={actor.name}
                  character={actor.character}
                  key={actor.id}
                  episodeCount={actor.total_episode_count}
                />
              ))}
      </div>
      <div className="mt-10 flex justify-center">
        <button
          className="rounded-lg bg-[#ccc] px-48 py-1 text-black transition-transform duration-200 hover:scale-105"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? (
            <span>
              <FontAwesomeIcon icon={faArrowUp} /> Show less
            </span>
          ) : (
            <span>
              <FontAwesomeIcon icon={faArrowDown} /> Show more
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
export default ActorList;
