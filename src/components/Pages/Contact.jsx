import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { CartContext } from "/src/App.jsx"; 
function contact() {
  const { cartItems } = useContext(CartContext);
  const { user, logoutUser } = useContext(UserContext);
      const navigate = useNavigate();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
     <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark fixed-top" aria-label="Furni navigation bar">
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
      {/* End Hero Section */}


      {/* Start Contact Form */}
      <div className="untree_co-section">
      <div className="container">

        <div className="block">
          <div className="row justify-content-center">


            <div className="col-md-8 col-lg-8 pb-4">


              <div className="row mb-5">
                <div className="col-lg-4">
                  <div  className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>
                    </div> {/* /.icon */}
                    <div className="service-contents">
                      <p>chaom chau 2, Pur Senchey, Phnom Pneh</p>
                    </div> {/* /.service-contents*/}
                  </div> {/* /.service */}
                </div>

                <div className="col-lg-4">
                  <div  className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                      </svg>
                    </div> {/* /.icon */}
                    <div className="service-contents">
                      <p>sovandeth@gmail.com</p>
                    </div> {/* /.service-contents*/}
                  </div> {/* /.service */}
                </div>

                <div className="col-lg-4">
                  <div  className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg>
                    </div> {/* /.icon */}
                    <div className="service-contents">
                      <p>+855 98 647 787</p>
                    </div> {/* /.service-contents*/}
                  </div> {/* /.service */}
                </div>
              </div>

              <form>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" for="fname">First name</label>
                      <input type="text" className="form-control" id="fname"/>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" for="lname">Last name</label>
                      <input type="text" className="form-control" id="lname"/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-black" for="email">Email address</label>
                  <input type="email" className="form-control" id="email"/>
                </div>

                <div className="form-group mb-5">
                  <label className="text-black" for="message">Message</label>
                  <textarea name="" className="form-control" id="message" cols="30" rows="5"></textarea>
                </div>

                <button type="submit" className="btn btn-primary-hover-outline">Send Message</button>
              </form>

            </div>

          </div>

        </div>

      </div>


      </div>

{/* End Contact Form */}



{/* Start Footer Section */}
<footer className="footer-section">
<div className="container relative">

  <div className="sofa-img">
    <img src="images/sofa.png" alt="Image" className="img-fluid"/>
  </div>

  <div className="row">
    <div className="col-lg-8">
      <div className="subscription-form">
        <h3 className="d-flex align-items-center"><span className="me-1"><img src="images/envelope-outline.svg" alt="Image" className="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>

        <form action="#" className="row g-3">
          <div className="col-auto">
            <input type="text" className="form-control" placeholder="Enter your name"/>
          </div>
          <div className="col-auto">
            <input type="email" className="form-control" placeholder="Enter your email"/>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary">
              <span className="fa fa-paper-plane"></span>
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>

  <div className="row g-5 mb-5">
    <div className="col-lg-4">
      <div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Furni<span>.</span></a></div>
      <p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

      <ul className="list-unstyled custom-social">
        <li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
        <li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
        <li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
        <li><a href="#"><span className="fa fa-brands fa-linkedin"></span></a></li>
      </ul>
    </div>

    <div className="col-lg-8">
      <div className="row links-wrap">
        <div className="col-6 col-sm-6 col-md-3">
          <ul className="list-unstyled">
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        <div className="col-6 col-sm-6 col-md-3">
          <ul className="list-unstyled">
            <li><a href="#">Support</a></li>
            <li><a href="#">Knowledge base</a></li>
            <li><a href="#">Live chat</a></li>
          </ul>
        </div>

        <div className="col-6 col-sm-6 col-md-3">
          <ul className="list-unstyled">
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Our team</a></li>
            <li><a href="#">Leadership</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="col-6 col-sm-6 col-md-3">
          <ul className="list-unstyled">
            <li><a href="#">Nordic Chair</a></li>
            <li><a href="#">Kruzo Aero</a></li>
            <li><a href="#">Ergonomic Chair</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>

  <div className="border-top copyright">
    <div className="row pt-4">
      <div className="col-lg-6">
        <p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>  {/* License information: https://untree.co/license/ */}
      </p>
      </div>

      <div className="col-lg-6 text-center text-lg-end">
        <ul className="list-unstyled d-inline-flex ms-auto">
          <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
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

export default contact
