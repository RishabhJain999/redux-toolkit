import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.css";
const NavBar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <nav className="nav">
      <Link to="/">
        <h1> Redux Store</h1>
      </Link>
      <h3>Cart Items : {items && items.length}</h3>
      <div className="nav__items">
        <Link className="home__link" to="/">
          Home
        </Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default NavBar;
