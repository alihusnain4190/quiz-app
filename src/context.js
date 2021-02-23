import React, { useEffect, useReducer, useState, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import { SET_LOADING, SET_QUIZ, SET_QUESTION, SET_AGAIN } from "./actions";

//create App context
const AppContext = React.createContext();
//create AppProvider function

const initState = {
  isLoading: true,
  formInput: false,
  amount: 10,
  questions: [],
  start: 0,
  question: {},
  endQuestion: false,
  totalCorrect: 0,
};
const url = "https://opentdb.com/api.php?";
const AppProvider = ({ children }) => {
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "21",
    difficulty: "easy",
    type: "multiple",
  });
  const [state, dispatch] = useReducer(reducer, initState);

  const handleCorrectAnswer = (bool) => {
    let total = 0;
    if (bool === true) {
      total = state.totalCorrect + 1;
    } else {
      total = state.totalCorrect;
    }
    let newNumber = 0;
    if (state.start < 10) {
      newNumber = state.start + 1;

      dispatch({
        type: SET_QUESTION,
        payload: { start: newNumber, totalCorrect: total },
      });
    }
  };
  const fetchQuiz = async (url) => {
    try {
      dispatch({ type: SET_LOADING });

      const { data } = await axios.get(
        `${url}?&amount=${quiz.amount}&category=${quiz.category}&difficulty=${quiz.difficulty}&type=${quiz.type}`
      );
      dispatch({ type: SET_QUIZ, payload: data.results });
    } catch (error) {}
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };
  const handleQuestions = () => {
    fetchQuiz(url);
  };
  const handlePlayAgain=()=>{
    dispatch({type:SET_AGAIN})
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        quiz,
        handleCorrectAnswer,
        handleChange,
        handleQuestions,
        handlePlayAgain
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
//export
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
