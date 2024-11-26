/* eslint-disable react/prop-types */
const MovieInformation = ({ title, country, status, budget, revenue }) => {
  return (
    <div className="px-5 pt-3">
      <h1 className="text-[2vw] font-bold">Information</h1>
      <div>
        <div className="mb-4">
          <p className="mt-[1.5vw] font-bold">Original title</p>
          <p>{title}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Origin Country</p>
          <p>
            {(country || []).map((country) => (
              <img
                key={country}
                src={`https://flagcdn.com/48x36/${country.toLowerCase()}.png`}
                className="mr-1 mt-1 w-[1.5vw]"
              />
            ))}
          </p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Status</p>
          <p>{status}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Budget</p>
          <p>{`$ ${budget?.toLocaleString() || 0}`}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Revenue</p>
          <p>{`$ ${revenue?.toLocaleString() || 0}`}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieInformation;
