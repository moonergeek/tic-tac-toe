import Circle from "../Circle/Circle";
import Cross from "../Cross/Cross";
import "./Square.css";

const Square = ({ position, value, takeTurn }) => {
  const handleClick = () => {
    if (value == "empty") takeTurn(position);
  };

  return (
    <div className="square" onClick={handleClick}>
      {value == "circle" && <Circle />}
      {value == "cross" && <Cross />}
    </div>
  );
};

export default Square;
