import "./App.css";
import MyUseState from "./MyUseState";
import MyUseEffect from "./MyUseEffect";
import ReduxStudy from "./views/ReduxStudy";

function App() {
  return (
      <div className="App">
        <hr />
        <h3>MyUseEffect</h3>
        <MyUseEffect />
        <hr />
        <h3>MyUseState</h3>
        <MyUseState />
        <hr />
        <ReduxStudy />
      </div>
  );
}

export default App;
