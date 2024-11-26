import { useModalContext } from "@context/ModalProvider";
import useFetch from "@hooks/useFetch";

/* eslint-disable react/prop-types */
const Genres = () => {
  const { typeFilm, genres, setGenres } = useModalContext();
  const { data } = useFetch({ url: `/genre/${typeFilm}/list` });
  console.log(genres);
  const handleClick = (id) => {
    if (genres.includes(id)) {
      setGenres(genres.filter((item) => item !== id));
    } else {
      setGenres((pre) => [...pre, id]);
    }
  };
  return (
    <div>
      <h1 className="text-[1.5vw] font-bold">Genres</h1>
      <div className="mt-2 flex flex-wrap gap-1">
        {(data?.genres || []).map((item) => (
          <div
            key={item.id}
            className={`cursor-pointer rounded-lg border border-gray-200 px-2 py-1 ${
              genres.includes(item.id) ? "border bg-black text-white" : ""
            }`}
            onClick={() => handleClick(item.id)}
          >
            <p>{item.name}</p>
          </div>
        )) || {}}
      </div>
    </div>
  );
};
export default Genres;
