import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
// import ThemeContext from "../ThemeContext";

function Header(props) {
  // let { store } = useContext(ThemeContext);
  // let { num, agree, opp } = store.getState().personNumReducer;
  // let [_, setRandom] = useState(0)

  // useEffect(()=>{
  //   let unsubscribe = store.subscribe(()=>{
  //     setRandom(Math.random())
  //   })
  //   return unsubscribe
  // },[])

  // 使用react-redux
  let { num, agree, opp } = props;
  return (
    <div>
      <div>总人数: {num}</div>
      <div>同意人数: {agree}</div>
      <div>反对人数: {opp}</div>
    </div>
  );
}

export default connect((state) => {
  return state.personNumReducer;
})(Header);
