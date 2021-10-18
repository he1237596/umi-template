/*
 * @Author: Chris
 * @Date: 2021-10-15 14:48:26
 * @LastEditors: Chris
 * @LastEditTime: 2021-10-15 16:27:32
 * @Descripttion: **
 */
import {useEffect, useState} from 'react'
let i = 0
function Counter() {
  const [count, setCount] = useState(0);
  // debugger
  console.log(count)
  function handleAlertClick() {
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
    // setTimeout(() => {
    //   alert('You clicked on: ' + count);
    // }, 3000);
  }
  // if(i<5) {
  //   setCount(i)
  //   console.log('i', i)
  // }
  console.log('render')
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={handleAlertClick}>
        Show alert
      </button>
    </div>
  );
}
export default Counter