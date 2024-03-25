import "./App.css";
import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  useCallback,
} from "react";
import { flushSync } from "react-dom";

class Child extends React.Component {
  state = { x: 1000 };
  render() {
    return (
      <div className="child-box">
        <div>Child2--Function组件</div>
        {this.state.x}
      </div>
    );
  }
}

// 基于forwardRef实现ref转发，目的：获取子组件内部的某个元素
const Child2 = React.forwardRef(function Child2(props, ref) {
  let [text, setText] = useState("Child2");
  const changeText = (newText) => {
    console.log("22");
    setText(newText);
  };
  useImperativeHandle(ref, () => {
    return { changeText: changeText };
  });
  return (
    <div className="child-box">
      <div>Child2--Function组件</div>
      {text}
    </div>
  );
});

function MyUseEffect() {
  let box = useRef(null);
  let box2 = useRef(null);

  // useEffect(() => {
  //   console.log("box: ", box.current);
  //   console.log("box2: ", box2.current);
  // }, []);
  const handleChildren2 = useCallback(() => {
    box2.current.changeText("KKKK");
  }, []);

  return (
    <div>
      <Child ref={box} />
      <Child2 ref={box2} />
      <button onClick={handleChildren2.bind(null, "KKKK")}>
        点我改变Child2
      </button>
    </div>
  );
}

export default MyUseEffect;
