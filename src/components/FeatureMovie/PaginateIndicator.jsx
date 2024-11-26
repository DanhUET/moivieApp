/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const PaginateIndicator = ({ setOrder, movies, order }) => {
  return (
    <>
      <ul className="absolute bottom-[10%] right-[10%] flex gap-x-2">
        {movies.map((item, index) => (
          <li
            key={item.id}
            className={`h-1 w-6 cursor-pointer ${order === index ? "bg-slate-100" : "bg-slate-600"}`}
            onClick={() => setOrder(index)}
          ></li>
        ))}
      </ul>
    </>
  );
};
export default PaginateIndicator;
