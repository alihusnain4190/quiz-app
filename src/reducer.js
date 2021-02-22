import { SET_LOADING, SET_QUIZ, SET_QUESTION } from "./actions";

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: false };
  } else if (action.type === SET_QUIZ) {
    return { ...state, questions: action.payload, question: action.payload[0] };
  } else if (action.type === SET_QUESTION) {
    return {
      ...state,
      start: action.payload,
      question: state.questions[action.payload],
    };
  }
};
export default reducer;
