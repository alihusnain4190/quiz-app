import "./App.scss";
import { useGlobalContext } from "./context";
import QuizForm from "./Components/QuizForm";
import QuizShow from "./Components/QuizShow";
function App() {
  const { formInput } = useGlobalContext();
  if (formInput === true)
    return (
      <div className="quiz__show">
        <QuizShow />;
      </div>
    );
  return (
    <div className="quiz__form">
      <QuizForm />
    </div>
  );
}

export default App;
