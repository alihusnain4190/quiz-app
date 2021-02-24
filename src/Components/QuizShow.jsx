import React from "react";
import { useGlobalContext } from "../context";
import { randomSelection } from "../utills";
import Success from "./Success";
const QuizShow = () => {
  const {
    isLoading,
    question,
    endQuestion,
    totalCorrect,
    handleCorrectAnswer,
    amount,
  } = useGlobalContext();
  let arr = [];
  let result = [];
  const wrong = question.incorrect_answers;
  const correct = question.correct_answer;
  arr.push(wrong);
  arr.push(correct);
  result = randomSelection(arr.flat());
  const hadnleAnswer = (e) => {
    if (e.target.value === correct) {
      handleCorrectAnswer(true);
    } else {
      handleCorrectAnswer(false);
    }
  };
  if (isLoading === true) return "...loading";
  else if (endQuestion === true)
    return <Success className="quiz__success" totalAnswer={totalCorrect} />;
  else {
    return (
      <section className="show__wrapper">
        <p className="show__p answer">
          Correct Answers: {totalCorrect}/ {amount}
        </p>
        <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
        <div className="show__buttom__wrapper">
          {result.map((val, index) => {
            return (
              <button
                className="btn"
                value={val}
                key={index}
                onClick={hadnleAnswer}
              >
                {val}
              </button>
            );
          })}
        </div>
      </section>
    );
  }
};
export default QuizShow;
