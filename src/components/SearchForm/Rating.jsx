import { useModalContext } from "@context/ModalProvider";

const Rating = () => {
  const { setStatusRating } = useModalContext();

  return (
    <div>
      <h1 className="mt-2 text-[1.5vw] font-bold">Rating</h1>
      <select
        className="mt-1 cursor-pointer rounded-lg border border-gray-500 px-2 py-1 outline-none"
        onChange={(e) => setStatusRating(e.target.value)}
      >
        <option value="all">All</option>
        <option value="0-49">0- 49</option>
        <option value="50-69">50 - 69</option>
        <option value="70-100">70 - 100</option>
      </select>
    </div>
  );
};
export default Rating;
