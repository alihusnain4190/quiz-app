import {
  SET_LOADING,
  SET_QUIZ,
  SET_QUESTION,
  SET_SCORE,
  SET_AGAIN,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: false };
  } else if (action.type === SET_QUIZ) {
    return {
      ...state,
      questions: action.payload,
      question: action.payload[0],
      formInput: true,
    };
  } else if (action.type === SET_QUESTION) {
    if (state.start === 9) {
      return { ...state, endQuestion: true };
    }
    return {
      ...state,
      start: action.payload.start,
      question: state.questions[action.payload.start],
      totalCorrect: action.payload.totalCorrect,
    };
  } else if (action.type === SET_AGAIN) {
    return { ...state, formInput: false };
  }
};
export default reducer;
