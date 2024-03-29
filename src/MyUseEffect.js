import "./App.css";
import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
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

function MyUseEffect(props) {
  let box = useRef(null);
  let box2 = useRef(null);
  let navigate = useNavigate();
  // useEffect(() => {
  //   console.log("box: ", box.current);
  //   console.log("box2: ", box2.current);
  // }, []);
  const handleChildren2 = useCallback(() => {
    box2.current.changeText("KKKK");
  }, []);

  return (
    <div>
      <h3>MyUseEffect</h3>
      <Child ref={box} />
      <Child2 ref={box2} />
      <button onClick={handleChildren2.bind(null, "KKKK")}>
        点我改变Child2
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        跳转到 / 路由
      </button>
      <button
        onClick={() => {
          navigate("/state");
        }}
      >
        跳转到 state 路由
      </button>
      <button
        onClick={() => {
          navigate("/redux");
        }}
      >
        跳转到 redux 路由
      </button>
    </div>
  );
}

export default MyUseEffect;
