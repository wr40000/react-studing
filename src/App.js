import "./App.css";
import MyUseState from "./MyUseState";
import MyUseEffect from "./MyUseEffect";
import ReduxStudy from "./views/ReduxStudy";
import RouterView from "./router";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <div className="App">
        <hr />
        <MyUseEffect />
        <hr />
        <MyUseState />
        <hr />
        <ReduxStudy />
        <hr />
        <h3>Router</h3>
        <div className="routerContainer">
          <RouterView></RouterView>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
