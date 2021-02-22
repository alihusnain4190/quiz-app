import React from "react";
import { useGlobalContext } from "../context";
import { randomSelection } from "../utills";
const QuizShow = () => {
  const {
    isLoading,
    question,
    handleIncrement,
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
  else if (endQuestion === true) return "success";
  else {
    return (
      <section>
        <div>
          <label>
            Totla correct answer is {totalCorrect}/ {amount}
          </label>
        </div>
        <div>
          <p>{question.question}</p>
        </div>
        <div>
          {result.map((val, index) => {
            return (
              <button value={val} key={index} onClick={hadnleAnswer}>
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
