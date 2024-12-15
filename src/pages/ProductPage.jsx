import React from "react";
import { useCart } from "../contexts/CartContext";
import ProductCard from "../components/ProductCard";
import productImage from "../assets/product-sample.svg";


export default function ProductPage() {
  const { addToCart, notification } = useCart();

  const products = [
    { id: 1, name: "Product 1", price: 100, image: productImage },
    { id: 2, name: "Product 2", price: 150, image: productImage },
    { id: 3, name: "Product 3", price: 200, image: productImage },
  ];


  return (
    <div className="container">
      <h1>Products</h1>
      {notification && <div className="alert alert-success">{notification}</div>}
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}
