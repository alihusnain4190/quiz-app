import React from "react";
import { useGlobalContext } from "../context";

const QuizForm = () => {
  const { handleChange, quiz } = useGlobalContext();
  return (
    <form>
      <label>
        Number of question
        <input
          type="number"
          name="amount"
          value={quiz.amount}
          min="1"
          max="10"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Select Category
        <select name="category" onChange={handleChange} value={quiz.category}>
          <option value="21">sport</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
        </select>
      </label>
      <label>
        select difficulty level
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
      </label>
      <button>Search</button>
    </form>
  );
};

export default QuizForm;
