import React from "react";
import { useGlobalContext } from "../context";
const Success = ({ totalAnswer }) => {
  const { handlePlayAgain } = useGlobalContext();
  return (
    <section>
      {totalAnswer}
      <button onClick={handlePlayAgain}>Play Again</button>
    </section>
  );
};

export default Success;
