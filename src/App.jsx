import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((prevValue) => prevValue + 1);
    }, 100);
  }, []);

  return (
    <div className="app">
      <ProgressBar value={value} />
    </div>
  );
}

export default App;
