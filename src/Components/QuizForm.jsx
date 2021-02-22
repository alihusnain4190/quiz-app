import React from "react";

const QuizForm = () => {
  return (
    <form>
      <label>
        Number of question
        <input type="number" min="1" max="10"></input>
      </label>
      <label>
        Select Category
        <select>
          <option id="21">sport</option>
          <option id="22">Geography</option>
          <option id="23">History</option>
        </select>
      </label>
      <label>
        select difficulty level
        <select>
          <option>easy</option>
          <option>hard</option>
          <option>medium</option>
        </select>
      </label>
      <button>Search</button>
    </form>
  );
};

export default QuizForm;
