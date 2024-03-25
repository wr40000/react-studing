import React, { useContext } from "react";
import { connect } from "react-redux";
// import ThemeContext from '../ThemeContext'
import actions from "../store/actions";

function Footer(props) {
  // let {store:{dispatch}} = useContext(ThemeContext)
  // let agreeAdd = () => {
  //   dispatch(personNumActions.agreeAdd());
  // };
  // let oppAdd = () => {
  //   dispatch(personNumActions.oppAdd());
  // };

  // 使用react-redux
  let {agreeAdd,oppAdd} = props
  return (
    <div>
      <div style={{ width: "20px", height: "20px" }}></div>
      <button style={{ marginRight: "20px" }} onClick={agreeAdd}>
        同意
      </button>
      <button onClick={oppAdd}>反对</button>
    </div>
  );
}

export default connect(null, actions.personNumActions)(Footer);
