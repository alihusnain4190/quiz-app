import React from "react";
import { useGlobalContext } from "../context";
const Success = ({ totalAnswer }) => {
  const { handlePlayAgain } = useGlobalContext();
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <section className="success__wrapper">
      <p>Total Correct Answer is: {totalAnswer}</p>
      <button className="btn" onClick={handleRefresh}>
        Play Again
      </button>
    </section>
  );
};

export default Success;
