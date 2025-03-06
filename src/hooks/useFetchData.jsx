import { useState, useEffect } from "react";
import { getData } from "../utils/api";

const useFetchData = (url = "", shouldFetch = true, defaultData = []) => {
  const [apiData, setApiData] = useState(defaultData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (shouldFetch) {
      setLoading(true);

      try {
        const response = await getData(url);
        setApiData(response);
      } catch (error) {
        setError(error.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, shouldFetch, defaultData]);

  return { apiData, loading, error };
};

export default useFetchData;
