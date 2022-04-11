import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../features/CartSlice";
import { fetchProducts, STATUSES } from "../../features/ProductSlice";
import "./Product.css";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    // apply condition to save api call(when user return back to home page).
    if (products.length === 0) dispatch(fetchProducts());
  }, []);

  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  const showAllProducts = products.map((product, id) => {
    const { image, title, price } = product;
    return (
      <div key={id} className="products__wrapper">
        <img src={image} alt={title} />
        <h5>{title}</h5>
        <p>{price}</p>
        <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
      </div>
    );
  });

  if (status === STATUSES.LOADING) {
    return "loading...";
  } else if (status === STATUSES.ERROR) {
    return "Something went wrong!";
  }
  return (
    <section className="products">
      {products.length > 0 && showAllProducts}
    </section>
  );
};

export default Product;
