import { useState, useCallback, forwardRef, useImperativeHandle, useRef } from 'react'
// 父子实时共享数据的一种写法
// 通常数据流是从上到下，可以在子组件里改变父组件的数据
function TextInputWithFocusButton() {
  const [value, setValue] = useState("");
  // useRef 如果需要父组件需要取到子组件的值，通过ref属性，可以读取到，但是无法响应式的自动获取，只能主动触发读取
  // const inputEl = useRef(null);
  // useEffect(() => {
  //   setValue(inputEl.current.value);
  // }, [inputEl]);
  // const onButtonClick = () => {
  //   // `current` 指向已挂载到 DOM 上的文本输入元素
  //   console.log("input值", inputEl.current.value);
  //   setValue(inputEl.current.value);
  // };

  // useCallback 使用useCallback可以实时获取子组件的值
  const inputEl = useCallback(node => {
    if (node !== null) {
      console.log("TCL: TextInputWithFocusButton -> node.value", node.value)
      setValue(node.value);
    }
  }, []);


  return (
    <>
      <div>
        子组件: <TextInput ref={inputEl}></TextInput>
      </div>
      <div>
        父组件: <input type="text" value={value} onChange={() => {}} />
      </div>
      {/* <button onClick={onButtonClick}>获取子组件输入框的值</button> */}
    </>
  );
}
const TextInput =  forwardRef((props,ref) => {
  const [value, setValue] = useState('')
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    value: inputRef.current.value
  }));
  const changeValue = (e) =>{
    setValue(e.target.value);
  }
  return <input ref={inputRef} value={value} onChange={changeValue}></input>
})
export default TextInputWithFocusButton