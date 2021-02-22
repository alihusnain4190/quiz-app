import "./App.css";
import { useGlobalContext } from "./context";
import QuizForm from "./Components/QuizForm";
import QuizShow from "./Components/QuizShow";
function App() {
  const name = useGlobalContext();
  return (
    <>
      <QuizShow />
      {/* <QuizForm /> */}
    </>
  );
}

export default App;
