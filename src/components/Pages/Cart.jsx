import React, { useContext ,useState,useEffect} from 'react'; 
import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from "./UserContext";
import { CartContext } from '../../App';

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext); // Access cartItems and setCartItems from context
const { user, logoutUser } = useContext(UserContext);
const navigate = useNavigate();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Increase quantity of a product
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity of a product
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove a product from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // PayPal Buttons setup
  useEffect(() => {
    // Only initialize PayPal if there are cart items
    if (window.paypal && cartItems.length > 0) {
      if (document.getElementById('paypal-button-container')) {
        document.getElementById('paypal-button-container').innerHTML = ''; // Clear previous buttons
      }

      // Create and render PayPal buttons
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: calculateTotal().toFixed(2), // Total cart amount
                },
                description: "Your purchase at Furni Store",
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
            setCartItems([]); // Clear cart on successful payment
          });
        },
        onError: (err) => {
          console.error("PayPal Checkout Error:", err);
        },
      }).render("#paypal-button-container");
    }
  }, [cartItems]); // Run effect when cartItems changes

  return (
    <div>
      <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark fixed-top" arial-label="Furni navigation bar">

<div className="container">
	<Link className="navbar-brand" to='/'>Furni<span>.</span></Link>

	<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
	</button>

	<div className="collapse navbar-collapse" id="navbarsFurni">
		<ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
			<li className="nav-item active">
				<Link className="nav-link" to='/'>Home</Link>
			</li>
			<li><Link className="nav-link" to='/shop'>Shop</Link></li>
			<li><Link className="nav-link" to='/about'>About us</Link></li>
			<li><Link className="nav-link" to='/services'>Services</Link></li>
			<li><Link className="nav-link" to='/blog'>Blog</Link></li>
			<li><Link className="nav-link" to='/contact.html'>Contact us</Link></li>
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
{/* End Header/Navigation */}

{/* Start Hero Section */}
<div class="hero">
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-lg-5">
        <div class="intro-excerpt">
          <h1>Cart</h1>
        </div>
      </div>
      <div class="col-lg-7">
        
      </div>
    </div>
  </div>
</div>
{/* End Hero Section */}

 {/* Cart Section */}
 <div className="cart-container">
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>NO</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td> {/* Displaying the ID starting from 1 */}
                    <td>
                      <img src={item.image} alt={item.title} width="50" />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <button className="quantity" onClick={() => decreaseQuantity(item.id)}>-</button>
                      {item.quantity}
                      <button className="quantity" onClick={() => increaseQuantity(item.id)}>+</button>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button className="remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2>Total: ${calculateTotal().toFixed(2)}</h2>
            <div id="paypal-button-container"></div> 
          </div>
        )}
      </div>

{/* pay pal */}



{/* Start Footer Section */}
<footer class="footer-section">
<div class="container relative">


  <div class="row">
    <div class="col-lg-8">
      <div class="subscription-form">
        <h3 class="d-flex align-items-center"><span class="me-1"><img src="images/envelope-outline.svg" alt="Image" class="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>

        <form action="#" class="row g-3">
          <div class="col-auto">
            <input type="text" class="form-control" placeholder="Enter your name"/>
          </div>
          <div class="col-auto">
            <input type="email" class="form-control" placeholder="Enter your email"/>
          </div>
          <div class="col-auto">
            <button class="btn btn-primary">
              <span class="fa fa-paper-plane"></span>
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>

  <div class="row g-5 mb-5">
    <div class="col-lg-4">
      <div class="mb-4 footer-logo-wrap"><a href="#" class="footer-logo">Furni<span>.</span></a></div>
      <p class="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

      <ul class="list-unstyled custom-social">
        <li><a href="#"><span class="fa fa-brands fa-facebook-f"></span></a></li>
        <li><a href="#"><span class="fa fa-brands fa-twitter"></span></a></li>
        <li><a href="#"><span class="fa fa-brands fa-instagram"></span></a></li>
        <li><a href="#"><span class="fa fa-brands fa-linkedin"></span></a></li>
      </ul>
    </div>

    <div class="col-lg-8">
      <div class="row links-wrap">
        <div class="col-6 col-sm-6 col-md-3">
          <ul class="list-unstyled">
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        <div class="col-6 col-sm-6 col-md-3">
          <ul class="list-unstyled">
            <li><a href="#">Support</a></li>
            <li><a href="#">Knowledge base</a></li>
            <li><a href="#">Live chat</a></li>
          </ul>
        </div>

        <div class="col-6 col-sm-6 col-md-3">
          <ul class="list-unstyled">
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Our team</a></li>
            <li><a href="#">Leadership</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div class="col-6 col-sm-6 col-md-3">
          <ul class="list-unstyled">
            <li><a href="#">Nordic Chair</a></li>
            <li><a href="#">Kruzo Aero</a></li>
            <li><a href="#">Ergonomic Chair</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>

  <div class="border-top copyright">
    <div class="row pt-4">
      <div class="col-lg-6">
        <p class="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>  {/* License information: https://untree.co/license/ */}
      </p>
      </div>

      <div class="col-lg-6 text-center text-lg-end">
        <ul class="list-unstyled d-inline-flex ms-auto">
          <li class="me-4"><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

    </div>
  </div>

</div>
</footer>
    </div>
  )
}

export default Cart
