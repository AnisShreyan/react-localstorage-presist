import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    const a = parseInt(localStorage.getItem("val"));

    isNaN(a) ? setState(state) : setState(a);
  }, []);

  useEffect(() => {
    localStorage.setItem("val", state);
  }, [state]);

  return (
    <div className="App">
      <h1>React Presist Local Storage</h1>
      <h1>{state}</h1>
      <button onClick={() => setState(state + 1)}>+</button>
      <button onClick={() => setState(state - 1)}>-</button>
    </div>
  );
}

export default App;
