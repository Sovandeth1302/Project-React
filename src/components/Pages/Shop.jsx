import React, { useState, useEffect, useContext } from 'react';
import { Link ,  useNavigate } from 'react-router-dom'; // Import CartContext
import axios from 'axios';
import { CartContext } from "/src/App.jsx";
import { UserContext } from "./UserContext";

function Shop() {
  const { addToCart } = useContext(CartContext); // Access addToCart function
  const [products, setProducts] = useState([]);
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
const { cartItems } = useContext(CartContext);
const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

return(
    <div>

<nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark fixed-top" arial-label="Furni navigation bar">

     <div className="container">
               <Link className="navbar-brand" to="/">Darem<span>.</span></Link>
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
      <div class="hero">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt">
                <h1>Modern Style <span clsas="d-block">Design Collections</span></h1>
                <p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <p>
                  <Link to="/shop" className="btn btn-secondary me-2">
                    Shop Now
                  </Link>
                  <Link to="/about" className="btn btn-white-outline">
                    Explore
                  </Link>
                </p>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="hero-img-wrap">
                <img src="/src/assets/images/offer_img.png" class="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      <div className="shop-container">
      <h1>Shop</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} className="product-thumbnail" />
            <h3>{product.title}</h3>
            <div className="price-btn-container">
              <span>Price: ${product.price}</span>
              <button onClick={() => addToCart(product)}>
                <img src="/src/assets/images/shopping-cart.png" alt="Add to Cart" id="shop_img" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>


      

      {/* Start Footer Section */}
      <footer class="footer-section">
        <div class="container relative">

          <div class="sofa-img">
            <img src="images/sofa.png" alt="Image" class="img-fluid"/>
          </div>

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
                <p class="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a>  Distributed By <a href="https://themewagon.com">ThemeWagon</a> {/* License information: https://untree.co/license/ */}
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
      {/* End Footer Section */}	


      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/tiny-slider.js"></script>
      <script src="js/custom.js"></script>
    </div>
  )
}

export default Shop
