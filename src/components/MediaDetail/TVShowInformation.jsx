/* eslint-disable react/prop-types */
const TVShowInformation = ({ title, country, status, network }) => {
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
          <p className="font-bold">Network</p>
          <img
            src={`https://media.themoviedb.org/t/p/h30/${network?.[0]?.logo_path || "1E5baAaEse26fej7uHcjOgEE2t2.jpg"}`}
            alt=""
            className="mt-3"
          />
        </div>
      </div>
    </div>
  );
};
export default TVShowInformation;
