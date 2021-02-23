import "./App.css";
import { useGlobalContext } from "./context";
import QuizForm from "./Components/QuizForm";
import QuizShow from "./Components/QuizShow";
function App() {
  const { formInput } = useGlobalContext();
  if (formInput === true) return <QuizShow />;
  return <QuizForm />;
}

export default App;
