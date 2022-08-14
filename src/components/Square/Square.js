import Styles from "./Square.module.css";
import Circle from "../Circle/Circle";
import Cross from '../Cross/Cross';

const Square = ({ position }) => {
  return (
    <div className={Styles.square}>
      <Cross />
    </div>
  );
};

export default Square;
