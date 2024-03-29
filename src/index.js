import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store/index";
// import ThemeContext from "./ThemeContext";
import { Provider } from "react-redux";
import VirtualList from './views/VirtualList'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ThemeContext.Provider value={{ store }}> */}
    <Provider store={ store }>
      <App />
      <VirtualList/>
    </Provider>
    {/* </ThemeContext.Provider> */}
  </React.StrictMode>
);
