/* eslint-disable react/prop-types */
import ImageComponent from "@components/ImageComponent";
import CircularProgressBar from "@components/MediaList/CircularProgressBar";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const SeasonList = ({ seasonList }) => {
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    setShowMore(false);
  }, [seasonList]);

  return (
    <div>
      {showMore
        ? seasonList?.map((season) => (
            <div
              key={season.id}
              className="mt-5 flex gap-x-10 rounded-lg border border-gray-100 p-6 shadow-md"
            >
              <ImageComponent
                src={
                  season.poster_path &&
                  `https://image.tmdb.org/t/p/w300/${season.poster_path}`
                }
                width={220}
                height={320}
              />
              <div>
                <div>
                  <p>{season.name}</p>
                  <div className="mt-2 flex items-center gap-x-2">
                    <span>Rating</span>
                    <CircularProgressBar
                      percent={season.vote_average * 10}
                      strokeColor={
                        season.vote_average >= 7
                          ? "green"
                          : season.vote_average >= 5
                            ? "orange"
                            : "red"
                      }
                    />
                  </div>
                </div>
                <div className="mt-2 flex gap-x-3">
                  <p>Release Day: </p>
                  <p>{season.air_date}</p>
                </div>
                <p className="mt-3">{season.overview}</p>
              </div>
            </div>
          )) || []
        : seasonList?.slice(0, 3).map((season) => (
            <div
              key={season.id}
              className="mt-5 flex gap-x-10 rounded-lg border border-gray-100 p-6 shadow-md"
            >
              <ImageComponent
                src={
                  season.poster_path &&
                  `https://image.tmdb.org/t/p/w300/${season.poster_path}`
                }
                className="w-1/4 rounded-lg"
              />
              <div>
                <div>
                  <p>{season.name}</p>
                  <div className="mt-2 flex items-center gap-x-2">
                    <span>Rating</span>
                    <CircularProgressBar
                      percent={season.vote_average * 10}
                      strokeColor={
                        season.vote_average >= 7
                          ? "green"
                          : season.vote_average >= 5
                            ? "orange"
                            : "red"
                      }
                    />
                  </div>
                </div>
                <div className="mt-2 flex gap-x-3">
                  <p>Release Day: </p>
                  <p>{season.air_date}</p>
                </div>
                <p className="mt-3">{season.overview}</p>
              </div>
            </div>
          )) || []}
      <p
        className="mb-6 mt-3 cursor-pointer"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? (
          <span>
            <FontAwesomeIcon icon={faArrowUp} /> Show less
          </span>
        ) : (
          seasonList?.length >= 4 && (
            <span>
              <FontAwesomeIcon icon={faArrowDown} /> Show more
            </span>
          )
        )}
      </p>
    </div>
  );
};
export default SeasonList;
