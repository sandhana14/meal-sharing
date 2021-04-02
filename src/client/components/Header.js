import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src="https://img.icons8.com/fluent/48/000000/real-food-for-meals.png" />
        </div>
        <div className="title">
          <h1 className="main-title">Meal-sharing</h1>
          <p className="subtitle">
            - - -Life is all about exploring and sharing food with your family
            and friends
          </p>
        </div>
        <div className="links column-two">
          <ul>
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/about" className="link">
              <li>About</li>
            </Link>
            <Link to="/contact" className="link">
              <li>Contact us</li>
            </Link>
            <Link to="/meals" className="link">
              <li>Meals</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
