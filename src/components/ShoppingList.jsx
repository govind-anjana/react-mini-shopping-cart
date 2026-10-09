
import React from "react";
import ShoppingCart from "./ShoppingCart";

const ProductList = (props) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-2">
      {props.items.map((item) => (
        <ShoppingCart
          key={item.id}
          item={item}
          increaseQuantity={props.increaseQuantity}
          decreaseQuantity={props.decreaseQuantity}
          removeItem={props.removeItem}
        />
      ))}
    </div>
  );
};

export default ProductList;
