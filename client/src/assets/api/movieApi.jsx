import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = "/api/v1/movie";

const useData = (url) => {
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(false);

  const getData = async () => {
    try {
      setisLoading(true);
      const { data } = await axios.get(BASE_URL + url);
      setData(data);
    } catch (error) {
      console.log(error.response);
    }
    setisLoading(false);
  };

  useEffect(() => {
    console.log(`sending to ${url}`);
    getData();
  }, []);

  return [data, isLoading, getData];
};

export default useData;
