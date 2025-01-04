import React, { useContext ,useState,useEffect} from 'react'; 
import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from "./UserContext";
import { CartContext } from '../../App';

function Login() {
   const { cartItems, setCartItems } = useContext(CartContext); // Access cartItems and setCartItems from context
  const { user, logoutUser } = useContext(UserContext);
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const { loginUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const validEmail = "sovandeth@gmail.com";
    const validPassword = "12345678";

    if (email === validEmail && password === validPassword) {
      loginUser(email);
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
    <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark " aria-label="Furni navigation bar">
    <div className="container">
      <Link className="navbar-brand" to="/">Furni<span>.</span></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li><Link className="nav-link" to="/shop">Shop</Link></li>
          <li><Link className="nav-link" to="/about">About us</Link></li>
          <li><Link className="nav-link" to="/services">Services</Link></li>
          <li><Link className="nav-link" to="/blog">Blog</Link></li>
          <li><Link className="nav-link" to="/contact">Contact us</Link></li>
        </ul>
        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          {user ? (
            <li><Link className="nav-link" to="/" onClick={() => { logoutUser(); navigate('/'); }}><img src={user.image} alt="User" /></Link></li>
          ) : (
            <li><Link className="nav-link user_login" to="/login"><img src="assets/images/user.svg" alt="User" /></Link></li>
          )}
          <li><Link className="nav-link" to="/cart"><img src="assets/images/cart.svg" alt="Cart" />
    {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span> 
              )}
    </Link></li>
        </ul>
      </div>
    </div>
  </nav>

    <div className="login-container">
      <img src="/src/assets/images/Logo.png" className=" login_logo w-25 d-flex justify-content-center" alt="" />
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <div className="error-message text-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
