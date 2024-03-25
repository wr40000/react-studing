import "./App.css";
import MyUseState from './MyUseState'
import MyUseEffect from "./MyUseEffect";

function App() {
  return (
    <div className="App">
      <hr/>
      <h3>MyUseEffect</h3>
      <MyUseEffect/>
      <hr/>
      <h3>MyUseState</h3>
      <MyUseState/>
    </div>
  );
}

export default App;
