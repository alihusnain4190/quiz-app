import React from "react";
import { useGlobalContext } from "../context";

const QuizForm = () => {
  const { handleChange, quiz, handleQuestions } = useGlobalContext();
  return (
    <section className="quiz__form__wrapper">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleQuestions();
        }}
        className="form"
      >
        <label>Number Of Question</label>
        <input
          type="number"
          name="amount"
          value={quiz.amount}
          min="1"
          max="10"
          onChange={handleChange}
        ></input>
        <label>Select Category</label>
        <select name="category" onChange={handleChange} value={quiz.category}>
          <option value="21">sport</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
        </select>
        <label>Select Difficulty Level</label>
        <select
          name="difficulty"
          value={quiz.difficulty}
          onChange={handleChange}
        >
          <option name="difficulty" value="easy">
            easy
          </option>
          <option name="difficulty" value="hard">
            hard
          </option>
          <option name="difficulty" value="medium">
            medium
          </option>
        </select>
        <button className="btn">Search</button>
      </form>
    </section>
  );
};

export default QuizForm;
