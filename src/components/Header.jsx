import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useModalContext } from "@context/ModalProvider";
const Header = () => {
  const { setTypeFilm } = useModalContext();
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between bg-slate-950 px-10 text-white">
      <div className="flex items-center">
        <Link to="/" className="cursor-pointer px-2 py-1">
          <img src="/images/netflix.png" alt="" className="w-16 sm:h-28" />
        </Link>
        <Link
          to="/search"
          className="ml-5 px-5 py-4 hover:bg-gray-400 sm:py-4 sm:text-[20px]"
          onClick={() => setTypeFilm("movie")}
        >
          Movie
        </Link>
        <Link
          to="/search"
          className="px-5 py-4 hover:bg-gray-400 sm:py-4 sm:text-[20px]"
          onClick={() => setTypeFilm("tv")}
        >
          TV Show
        </Link>
      </div>
      <Link
        to={"/search"}
        className="px-7 py-5 duration-200 hover:scale-150 hover:transition-transform"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" />
      </Link>
    </header>
  );
};
export default Header;
