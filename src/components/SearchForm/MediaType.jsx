import { useModalContext } from "@context/ModalProvider";

const MediaType = () => {
  const { mediaType, typeFilm, setTypeFilm } = useModalContext();
  return (
    <div className="">
      <h1 className="text-[1.5vw] font-bold">Media Type</h1>
      <div className="mt-2">
        {mediaType?.map((item) => (
          <div
            className="flex cursor-pointer items-center gap-x-2"
            key={item.id}
          >
            <input
              type="radio"
              id={item.id}
              checked={typeFilm === item.name}
              onChange={() => setTypeFilm(item.name)}
              className="cursor-pointer"
            />
            <label htmlFor={item.id} className="cursor-pointer">
              {item.name}
            </label>
          </div>
        )) || []}
      </div>
    </div>
  );
};
export default MediaType;
