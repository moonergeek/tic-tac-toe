import React, { useState } from "react";
import Square from "./components/Square/Square";
import Result from "./components/Result/Result";
import "./App.css";

const App = () => {
  const [state, setState] = useState({
    player: "circle",
    positions: [
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
    ],
  });

  const takeTurn = (position) => {
    const positions = [...state.positions];
    positions[position] = state.player;

    setState({
      player: state.player === "circle" ? "cross" : "circle",
      positions,
    });
  };

  const detectWinner = (p) => {
    if (p[0] === "circle" && p[1] === "circle" && p[2] === "circle")
      return "circle";
    if (p[3] === "circle" && p[4] === "circle" && p[5] === "circle")
      return "circle";
    if (p[6] === "circle" && p[7] === "circle" && p[8] === "circle")
      return "circle";

    if (p[0] === "circle" && p[3] === "circle" && p[6] === "circle")
      return "circle";
    if (p[1] === "circle" && p[4] === "circle" && p[7] === "circle")
      return "circle";
    if (p[2] === "circle" && p[5] === "circle" && p[8] === "circle")
      return "circle";

    if (p[0] === "circle" && p[4] === "circle" && p[8] === "circle")
      return "circle";
    if (p[2] === "circle" && p[4] === "circle" && p[6] === "circle")
      return "circle";

    if (p[0] === "cross" && p[1] === "cross" && p[2] === "cross")
      return "cross";
    if (p[3] === "cross" && p[4] === "cross" && p[5] === "cross")
      return "cross";
    if (p[6] === "cross" && p[7] === "cross" && p[8] === "cross")
      return "cross";

    if (p[0] === "cross" && p[3] === "cross" && p[6] === "cross")
      return "cross";
    if (p[1] === "cross" && p[4] === "cross" && p[7] === "cross")
      return "cross";
    if (p[2] === "cross" && p[5] === "cross" && p[8] === "cross")
      return "cross";

    if (p[0] === "cross" && p[4] === "cross" && p[8] === "cross")
      return "cross";
    if (p[2] === "cross" && p[4] === "cross" && p[6] === "cross")
      return "cross";

    if (p.every((position) => position !== "empty")) return "Its tie";
  };

  const winner = detectWinner(state.positions);

  function reset() {
    setState({
      player: "circle",
      positions: [
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ],
    });
  }

  return (
    <div className="app">
      <div className="grid">
        <Square position={0} value={state.positions[0]} takeTurn={takeTurn} />
        <Square position={1} value={state.positions[1]} takeTurn={takeTurn} />
        <Square position={2} value={state.positions[2]} takeTurn={takeTurn} />
        <Square position={3} value={state.positions[3]} takeTurn={takeTurn} />
        <Square position={4} value={state.positions[4]} takeTurn={takeTurn} />
        <Square position={5} value={state.positions[5]} takeTurn={takeTurn} />
        <Square position={6} value={state.positions[6]} takeTurn={takeTurn} />
        <Square position={7} value={state.positions[7]} takeTurn={takeTurn} />
        <Square position={8} value={state.positions[8]} takeTurn={takeTurn} />
      </div>
      {winner && <Result winner={winner} reset={reset} />}
    </div>
  );
};

export default App;
