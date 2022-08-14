import React from "react";
import "./Result.css";

const Result = ({ winner, reset }) => {
  return (
    <div className="result">
      {winner === "circle" && "Circle won the game"}
      {winner === "cross" && "Cross won the game"}
      {winner === "Its tie" && "Its tie!"}
      <button onClick={reset} className="btn">
        Reset
      </button>
    </div>
  );
};

export default Result;
