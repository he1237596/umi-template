/*
 * @Author: Chris
 * @Date: 2021-09-17 13:14:00
 * @LastEditors: Chris
 * @LastEditTime: 2021-09-22 14:41:23
 * @Descripttion: **
 */
import { useRef, useEffect } from 'react'
const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(() => savedCallback.current(id), delay || 0);
      return () => clearInterval(id);
    }
  }, [delay]);
}
export default useInterval