import { useState } from "react";
import { flushSync } from "react-dom";

function MyUseState() {
  // console.log("MyUseState--RENDER渲染");

  let [x, setX] = useState(10),
    [y, setY] = useState(20),
    [z, setZ] = useState(30);

  const handle = () => {
    // setTimeout(() => {
    //   setX(x + 1);
    //   setY(y + 1);
    //   setZ(z + 1);
    // }, 1000);
    // setZ(z + 1);
    // flushSync(() => {
    //   setX(x + 1);
    //   setY(y + 1);
    // });
    for (let i = 0; i < 10; i++) {
      flushSync(() => {
        setX(x + 1);
      });
      // setX((pre) => pre + 1);
    }
  };
  return (
    <div>
      <div>x: {x}</div>
      <div>y: {y}</div>
      <div>z: {z}</div>
      <button onClick={handle}>点击</button>
    </div>
  );
}

export default MyUseState;