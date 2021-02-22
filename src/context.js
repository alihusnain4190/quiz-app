import React, { useEffect, useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import { SET_LOADING, SET_QUIZ, SET_QUESTION } from "./actions";
//create App context
const AppContext = React.createContext();
//create AppProvider function

const initState = {
  isLoading: true,
  amount: 10,
  category: 21,
  difficulty: "easy",
  type: "multiple",
  questions: [],
  start: 0,
  question: {},
};
const url = "https://opentdb.com/api.php?";
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const handleIncrement = () => {
    let newNumber = 0;
    if (state.start < 10) {
      newNumber = state.start + 1;
      dispatch({ type: SET_QUESTION, payload: newNumber });
    }
    else{
      
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
  useEffect(() => {
    fetchQuiz(url);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, handleIncrement }}>
      {children}
    </AppContext.Provider>
  );
};
//export
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
