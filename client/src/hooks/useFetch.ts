import { useEffect, useState } from "react";
import axios                   from "axios";

const useFetch = (url: string) => {
  const [data, setData] = useState<any[] | null>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataFetching = async () => {
      try {
        const response = await axios.get(url); // wait until the promise resolves

        setData(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
        console.log("nice")
      }
    };

    dataFetching();
  }, []);

  return {
    data,
    loading,
    error
  };
};

export default useFetch;
