/*
 * @Author: Chris
 * @Date: 2021-10-15 17:23:28
 * @LastEditors: Chris
 * @LastEditTime: 2021-10-19 18:32:18
 * @Descripttion: 传入各种参数的params
 * 使用useReducder使fetch以来的状态脱离出来，在reducer中处理
 */
import { useState, useEffect, useReducer } from 'react';
import axios from 'axios'
const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
}

const useFetchData = (initParams = { url: 'https://randomuser.me/api' }, initialData = {}) => {
  console.log(initParams)
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  })

  const [params, setParams] = useState(
    initParams
  );

  useEffect(() => {
    // 取消（解决请求先后出现的竟态问题）
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const result = await axios({
          url: 'https://randomuser.me/api',
          method: 'get',
          ...params
        });

        console.log(result, 9999)
        if (!didCancel) {
          if (result.status === 200) {
            dispatch({ type: 'FETCH_SUCCESS', payload: { data: result.data, total: 200 } });
          } else {
            // 非200的状态
            dispatch({ type: 'FETCH_FAILURE' });
          }
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true
    }
  }, [params]);

  return [state, params, setParams];
}

export default useFetchData;