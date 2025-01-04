import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { CartContext } from "/src/App.jsx"; 
function Blog() {
  const { cartItems } = useContext(CartContext);
  const { user, logoutUser } = useContext(UserContext);
      const navigate = useNavigate();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
   <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark fixed-top" arial-label="Furni navigation bar">
   
        <div className="container">
          <Link className="navbar-brand" to='/'>Darem<span>.</span></Link>
   
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
              <li><Link className="nav-link" to='/contact'>Contact us</Link></li>
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



{/* Start Blog Section */}
<div className="blog-section">
<div className="container">
  
  <div className="row">

    <div className="col-12 col-sm-6 col-md-4 mb-5">
      <div className="post-entry">
        <a href="#" className="post-thumbnail"><img src="assets/images/post-1.jpg" alt="Image" className="img-fluid"/></a>
        <div className="post-content-entry">
          <h3><a href="#">First Time Home Owner Ideas</a></h3>
          <div className="meta">
            <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
          </div>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-5">
      <div className="post-entry">
        <a href="#" className="post-thumbnail"><img src="assets/images/post-2.jpg" alt="Image" className="img-fluid"/></a>
        <div className="post-content-entry">
          <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
          <div className="meta">
            <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
          </div>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-5">
      <div className="post-entry">
        <a href="#" className="post-thumbnail"><img src="assets/images/post-3.jpg" alt="Image" className="img-fluid"/></a>
        <div className="post-content-entry">
          <h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
          <div className="meta">
            <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
          </div>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-5">
      <div className="post-entry">
        <a href="#" className="post-thumbnail"><img src="assets/images/post-1.jpg" alt="Image" className="img-fluid"/></a>
        <div className="post-content-entry">
          <h3><a href="#">First Time Home Owner Ideas</a></h3>
          <div className="meta">
            <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
          </div>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-5">
      <div className="post-entry">
        <a href="#" className="post-thumbnail"><img src="assets/images/post-2.jpg" alt="Image" className="img-fluid"/></a>
        <div className="post-content-entry">
          <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
          <div className="meta">
            <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
          </div>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-5">
      <div className="post-entry">
        <a href="#" className="post-thumbnail"><img src="assets/images/post-3.jpg" alt="Image" className="img-fluid"/></a>
        <div className="post-content-entry">
          <h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
          <div className="meta">
            <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
          </div>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-5">
      <div className="post-entry">
        <a href="#" className="post-thumbnail"><img src="assets/images/post-1.jpg" alt="Image" className="img-fluid"/></a>
        <div className="post-content-entry">
          <h3><a href="#">First Time Home Owner Ideas</a></h3>
          <div className="meta">
            <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
          </div>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-5">
      <div className="post-entry">
        <a href="#" className="post-thumbnail"><img src="assets/images/post-2.jpg" alt="Image" className="img-fluid"/></a>
        <div className="post-content-entry">
          <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
          <div className="meta">
            <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
          </div>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 mb-5">
      <div className="post-entry">
        <a href="#" className="post-thumbnail"><img src="assets/mages/post-3.jpg" alt="Image" className="img-fluid"/></a>
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
{/* End Blog Section */}	



{/* Start Testimonial Slider */}
<div className="testimonial-section before-footer-section">
<div className="container">
  <div className="row">
    <div className="col-lg-7 mx-auto text-center">
      <h2 className="section-title">Testimonials</h2>
    </div>
  </div>

  <div className="row justify-content-center">
    <div className="col-lg-12">
      <div className="testimonial-slider-wrap text-center">

        <div id="testimonial-nav">
          <span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
          <span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
        </div>

        <div className="testimonial-slider">
          
          <div className="item">
            <div className="row justify-content-center">
              <div className="col-lg-8 mx-auto">

                <div className="testimonial-block text-center">
                  <blockquote className="mb-5">
                    <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                  </blockquote>

                  <div className="author-info">
                    <div className="author-pic">
                      <img src="assets/images/person-1.png" alt="Maria Jones" className="img-fluid"/>
                    </div>
                    <h3 className="font-weight-bold">Maria Jones</h3>
                    <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                  </div>
                </div>

              </div>
            </div>
          </div> 
          {/* END item */}

          <div className="item">
            <div className="row justify-content-center">
              <div className="col-lg-8 mx-auto">

                <div className="testimonial-block text-center">
                  <blockquote className="mb-5">
                    <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                  </blockquote>

                  <div className="author-info">
                    <div className="author-pic">
                      <img src="assets/images/person-1.png" alt="Maria Jones" className="img-fluid"/>
                    </div>
                    <h3 className="font-weight-bold">Maria Jones</h3>
                    <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                  </div>
                </div>

              </div>
            </div>
          </div> 
          {/* END item */}

          <div className="item">
            <div className="row justify-content-center">
              <div className="col-lg-8 mx-auto">

                <div className="testimonial-block text-center">
                  <blockquote className="mb-5">
                    <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                  </blockquote>

                  <div className="author-info">
                    <div className="author-pic">
                      <img src="assets/images/person-1.png" alt="Maria Jones" className="img-fluid"/>
                    </div>
                    <h3 className="font-weight-bold">Maria Jones</h3>
                    <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                  </div>
                </div>

              </div>
            </div>
          </div> 
          {/* END item */}

        </div>

      </div>
    </div>
  </div>
</div>
</div>
{/* End Testimonial Slider */}



{/* Start Footer Section */}
<footer className="footer-section">
<div className="container relative">

  <div className="sofa-img">
    <img src="assets/images/sofa.png" alt="Image" className="img-fluid"/>
  </div>

  <div className="row">
    <div className="col-lg-8">
      <div className="subscription-form">
        <h3 className="d-flex align-items-center"><span className="me-1"><img src="assets/images/envelope-outline.svg" alt="Image" className="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>

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

export default Blog
