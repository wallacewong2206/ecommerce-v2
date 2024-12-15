import React from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-light bg-light px-3">
      <Link to="/" className="navbar-brand">
        eCommerce
      </Link>
      <div>
        {user ? (
          <>
            <span className="me-3">Hello, {user.email}</span>
            <Link to="/products" className="btn btn-warning me-2">Home</Link>
            <Link to="/cart" className="btn btn-success me-2">Cart</Link>
            <button onClick={logout} className="btn btn-danger">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-primary me-2">Login</Link>
            <Link to="/signup" className="btn btn-secondary">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
