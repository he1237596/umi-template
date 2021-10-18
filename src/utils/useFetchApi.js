/*
 * @Author: Chris
 * @Date: 2021-10-15 17:23:28
 * @LastEditors: Chris
 * @LastEditTime: 2021-10-18 16:32:32
 * @Descripttion: 不适用useReducer
 */
import { useState, useEffect } from 'react';
import axios from 'axios'
const useFetchApi = (initialUrl = 'https://hn.algolia.com/api/v1/search?query=redux', initialData = { hits: [] }) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(
    initialUrl
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
}

export default useFetchApi;