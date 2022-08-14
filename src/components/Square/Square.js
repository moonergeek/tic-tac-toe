import Circle from "../Circle/Circle";
import Cross from "../Cross/Cross";
import "./Square.css";

const Square = ({ position }) => {
  return (
    <div className="square">
      <Cross />
    </div>
  );
};

export default Square;
