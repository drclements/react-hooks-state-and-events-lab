import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)
  function handleClick() {
    setIsInCart((isInCart) => !isInCart)
  }

  const cartClass = isInCart ? "in-cart" : ""

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
