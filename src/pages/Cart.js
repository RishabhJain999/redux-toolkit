import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../features/CartSlice";

const Cart = () => {
  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "30px",
  };
  const dispatch = useDispatch();
  const addedProducts = useSelector((state) => state.cart);
  const handleDeleteToCart = (productId) => {
    console.log(productId);
    dispatch(remove(productId));
  };
  return (
    <section style={{ margin: "30px" }}>
      {addedProducts.map((product) => {
        return (
          <div style={divStyle} key={product.id}>
            <img
              style={{ width: "10%" }}
              src={product.image}
              alt={product.title}
            />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <button onClick={() => handleDeleteToCart(product.id)}>
              Delete Product
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Cart;
