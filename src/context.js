import React, { useEffect, useReducer, useState, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import { SET_LOADING, SET_QUIZ, SET_QUESTION, SET_SCORE } from "./actions";

//create App context
const AppContext = React.createContext();
//create AppProvider function

const initState = {
  isLoading: true,
  amount: 10,
  // category: 21,
  // difficulty: "easy",
  // type: "multiple",
  questions: [],
  start: 0,
  question: {},
  endQuestion: false,
  totalCorrect: 0,
  // quiz: { amount: 10, category: 21, difficulty: "easy" },
};
const url = "https://opentdb.com/api.php?";
const AppProvider = ({ children }) => {
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 21,
    difficulty: "easy",
  });
  const [state, dispatch] = useReducer(reducer, initState);
  // const handleIncrement = () => {
  //   let newNumber = 0;
  //   if (state.start < 10) {
  //     newNumber = state.start + 1;
  //     dispatch({ type: SET_QUESTION, payload: newNumber });
  //   }
  // };
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
        `${url}&amount=${state.amount}&category=${state.category}&difficulty=${state.difficulty}&type=${state.type}`
      );
      dispatch({ type: SET_QUIZ, payload: data.results });
    } catch (error) {}
  };
  const handleChange = (e) => {
    const name = e.target.name;
    console.log(name);
    const value = e.target.value;
    console.log(value);
    setQuiz({ ...quiz, [name]: value });
    console.log(quiz);
  };
  useEffect(() => {
    fetchQuiz(url);
  }, []);
  return (
    <AppContext.Provider
      value={{ ...state, quiz, handleCorrectAnswer, handleChange }}
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
