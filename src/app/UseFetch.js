import { useState, useEffect } from "react";
const UseFetch = (url) => {
  const [data, setData] = useState(null);
  //in any case data fetch is taking long time, we should show a loading message
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            //if response is not true then throw an error
            throw Error("Could not fetch the data from the resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(true);
          setError(error.message);
        });
    }, 1000);
  }, [url]);

  return { data, isLoading, error };
};

export default UseFetch;
