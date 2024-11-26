/* eslint-disable react/prop-types */

import MovieCard from "@components/MovieCard";
import useFetch from "@hooks/useFetch";
import { useEffect, useState } from "react";
const MediaList = ({ title, tabs, status }) => {
  const story = localStorage.getItem(status);
  const [trending, setTrending] = useState(story || tabs[0]?.id);
  const tab = tabs.find((tab) => tab.id === trending);
  const { data } = useFetch({ url: `/${tab.url}` });
  const allMovie = (data?.results || []).slice(0, 16);
  useEffect(() => {
    localStorage.setItem(status, trending);
  }, [trending, status]);

  return (
    <div className="bg-black px-8 pt-10 text-white">
      <div className="flex items-center gap-x-10">
        <p className="text-[4vw] font-bold lg:text-[2.5vw]">{title}</p>
        <ul className="flex rounded-lg border-2 border-white">
          {tabs.map((item) => (
            <li
              key={item.id}
              className={`px-4 py-2 hover:cursor-pointer hover:bg-white hover:text-black ${trending === item.id ? "bg-white text-black" : ""}`}
              onClick={() => {
                {
                  setTrending(item.id);
                }
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-[2.5vw] sm:grid-cols-3 lg:grid-cols-5">
        <MovieCard allMovie={allMovie} trending={trending} />
      </div>
    </div>
  );
};
export default MediaList;
