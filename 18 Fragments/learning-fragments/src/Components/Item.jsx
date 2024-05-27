import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li
      classNameName={`${styles["kg-item"]} list-group-item ${
        bought && "active"
      }`}
    >
      <span classNameName="kg-span">{foodItem}</span>
      <button
        classNameName={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
