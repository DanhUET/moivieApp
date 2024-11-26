/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
const DEFAULT_HEADER = {
  accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
};
const useFetch = (
  { url, method = "GET", headers = {} },
  { enabled } = { enabled: true },
) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (enabled) {
      fetch(`${import.meta.env.VITE_API_HOOK}${url}`, {
        method,
        headers: {
          ...DEFAULT_HEADER,
          ...headers,
        },
      }).then(async (res) => {
        const data = await res.json();
        setData(data);
        setLoading(true);
      });
    }
  }, [url, JSON.stringify(headers), method]);
  return { data, loading };
};
export default useFetch;
