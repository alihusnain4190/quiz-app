import React from "react";
import { useGlobalContext } from "../context";
import { randomSelection } from "../utills";
const QuizShow = () => {
  const { isLoading, question, handleIncrement } = useGlobalContext();
  let arr = [];
  const wrong = question.incorrect_answers;
  const correct = question.correct_answer;
  arr.push(wrong);
  arr.push(correct);
  const result = randomSelection(arr.flat());
  
  if (isLoading === true) return "...loading";
  else {
    return (
      <section>
        <div>
          <p>{question.question}</p>
        </div>
        <div>
          {result.map((val, index) => {
            return <p key={index}>{val}</p>;
          })}
        </div>
        <div>
          <button onClick={()=>{handleIncrement()}}>Next</button>
        </div>
      </section>
    );
  }
};
export default QuizShow;
