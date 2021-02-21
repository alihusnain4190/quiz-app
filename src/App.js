import "./App.css";
import { useGlobalContext } from "./context";
function App() {
  const name = useGlobalContext();
  return <div className="App">hallo{name} </div>;
}

export default App;
