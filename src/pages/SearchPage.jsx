import SearchForm from "@components/SearchForm";
import FindFilm from "@components/SearchForm/findFilm";
const SearchPage = () => {
  return (
    <div className="px-10">
      <h1 className="mt-2 text-[1.7vw] font-bold">Search</h1>
      <div className="mt-3 flex gap-x-10">
        <div className="max-h-[70vh] flex-1 rounded-lg border border-gray-100 px-7 py-4 shadow-lg shadow-indigo-500/50">
          <SearchForm />
        </div>
        <div className="flex-[3]">
          <FindFilm />
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
