// import React from 'react'
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { CartContext } from "/src/App.jsx"; 

function Home() {
  const [products, setProducts] = useState([]);
  const { user, logoutUser } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const productLimited = products.slice(0, 8);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
      <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark fixed-top" aria-label="Furni navigation bar">
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
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Modern Style <span clsas="d-block">Design Collections</span></h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
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
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="/src/assets/images/offer_img.png" className="img-fluid"/>
							</div>
						</div>
					</div>
				</div>
			</div>
	<div className="shop-container">
      <h1>Shop</h1>
      <div className="product-list">
        {productLimited.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} className="product-thumbnail" />
            <h3>{product.title}</h3>
            <div className="price-btn-container">
              <span>Price: ${product.price}</span>
              
            </div>
          </div>
        ))}
      </div>
    </div>
		

	
		{/* End Product Section */}

		{/* Start Why Choose Us Section */}
		<div className="why-choose-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<h2 className="section-title">Why Choose Us</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

						<div className="row my-5">
							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="assets/images/truck.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>Fast &amp; Free Shipping</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="assets/images/bag.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>Easy to Shop</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="assets/images/support.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>24/7 Support</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="assets/images/return.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>Hassle Free Returns</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

						</div>
					</div>

					<div className="col-lg-5">
						<div className="img-wrap">
							<img src="/src/assets/images/about_us.jpg" alt="Image" className="img-fluid"/>
						</div>
					</div>

				</div>
			</div>
		</div>
		{/* End Why Choose Us Section */}

		{/* Start Blog Section */}
		<div className="blog-section">
			<div className="container">
				<div className="row mb-5">
					<div className="col-md-6">
						<h2 className="section-title">Recent Blog</h2>
					</div>
					<div className="col-md-6 text-start text-md-end">
						<a href="#" className="more">View All Posts</a>
					</div>
				</div>

				<div className="row">

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src="/src/assets/images/store1.jpg" alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3><a href="#">First Time Home Owner Ideas</a></h3>
								<div className="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src="/src/assets/images/store2.jpg" alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3><a href="#">How To Keep Your Furniture Clean</a></h3>
								<div className="meta">
									<span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a href="#" className="post-thumbnail"><img src="/src/assets/images/store3.jpg" alt="Image" className="img-fluid"/></a>
							<div className="post-content-entry">
								<h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
								<div className="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<script src="js/bootstrap.bundle.min.js"></script>
		<script src="js/tiny-slider.js"></script>
		<script src="js/custom.js"></script>
	</div>
	
  )
}

export default Home
