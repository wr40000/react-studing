import "./App.css";
import { useState, useEffect } from "react";
import { flushSync } from "react-dom";

function App() {
  console.log("RENDER渲染");

  let [num, setNum] = useState(0),
    [x, setX] = useState(100);

  useEffect(() => {
    // 获取最新的状态值
    console.log("@1", num);
  });

  useEffect(() => {
    console.log("@2", num);
  }, []);

  useEffect(() => {
    console.log("@3", num);
  }, [num]);

  useEffect(() => {
    return () => {
      // 获取的是上一次的状态值
      console.log("@4", num);
    };
  });

  const handle = () => {
    setNum(num + 1);
  };
  return (
    <div className="App">
      <span className="num">{num}</span>
      <button onClick={handle}>点击</button>
    </div>
  );
}

export default App;
