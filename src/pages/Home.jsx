import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Our E-Commerce Store</h1>
      <div className="alert alert-info mt-4">
        <h5>Instructions:</h5>
        <ol className="text-start mx-auto" style={{ maxWidth: "500px" }}>
          <li>
            <Link to="/signup">Sign up</Link> or <Link to="/login">Login</Link> to start.
          </li>
          <li>
              Go to the{" "}
            <Link to="/products">Products Page</Link> and add products to your cart.
          </li>
        </ol>
      </div>
    </div>
  );
}
