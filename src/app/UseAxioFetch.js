import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const UseAxioFetch = (url) => {
  const [data, setData] = useState(null);
  //in any case data fetch is taking long time, we should show a loading message
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const history = useHistory();

  //creating an instance of axios to remember the url we're using
  // const client = axios.create(url);

  //using axios
  useEffect(() => {
    //error handling using axios
    const source = axios.CancelToken.source();
    setTimeout(() => {
      axios
        .get(url, {
          cancelToken: source.token,
        })
        .then((res) => {
          // console.log(res.status);
          if (res.status === 200) {
            setData(res.data);
            setIsLoading(false);
          } else {
            throw Error("can't fetch");
          }
        })
        .catch((error) => {
          //way to have status code - error.response.status

          //error handling using axios
          if (error.message !== undefined) {
            setIsLoading(true);
            setError(error.message);
            history.push("*");
          }
        });
    }, 1000);

    return () => source.cancel();
  }, [url, history]);

  return { data, isLoading, error };
};

export default UseAxioFetch;
