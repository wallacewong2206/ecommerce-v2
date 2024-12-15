import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mt-5">
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between align-items-center mb-3"
        >
          <span>{item.name}</span>
          <span>${item.price}</span>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              console.log("Removing item ID:", item.id);
              removeFromCart(item.id);
            }}
          >
            Remove
          </button>
        </div>
      ))}
      {cart.length === 0 && <p>Your cart is empty.</p>}
    </div>
  );
}
