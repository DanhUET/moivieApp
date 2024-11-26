import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
import useFetch from "@hooks/useFetch";
const FeatureMovie = () => {
  const [order, setOrder] = useState(0);
  const { data } = useFetch({
    url: "/movie/popular",
  });
  const movies = (data?.results || []).slice(0, 4);
  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prevOrder) => (prevOrder + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);
  return (
    <div className="relative">
      <Movie data={movies[order] || {}} />
      <PaginateIndicator setOrder={setOrder} movies={movies} order={order} />
    </div>
  );
};
export default FeatureMovie;
