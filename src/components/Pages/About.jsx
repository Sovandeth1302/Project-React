import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { CartContext } from "/src/App.jsx"; 
function about() {
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



{/* Start Why Choose Us Section */}
<div class="why-choose-section">
<div class="container">
  <div class="row justify-content-between align-items-center">
    <div class="col-lg-6">
      <h2 class="section-title">Why Choose Us</h2>
      <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

      <div class="row my-5">
        <div class="col-6 col-md-6">
          <div class="feature">
            <div class="icon">
              <img src="assets/images/truck.svg" alt="Image" class="imf-fluid"/>
            </div>
            <h3>Fast &amp; Free Shipping</h3>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
        </div>

        <div class="col-6 col-md-6">
          <div class="feature">
            <div class="icon">
              <img src="assets/images/bag.svg" alt="Image" class="imf-fluid"/>
            </div>
            <h3>Easy to Shop</h3>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
        </div>

        <div class="col-6 col-md-6">
          <div class="feature">
            <div class="icon">
              <img src="assets/images/support.svg" alt="Image" class="imf-fluid"/>
            </div>
            <h3>24/7 Support</h3>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
        </div>

        <div class="col-6 col-md-6">
          <div class="feature">
            <div class="icon">
              <img src="assets/images/return.svg" alt="Image" class="imf-fluid"/>
            </div>
            <h3>Hassle Free Returns</h3>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="col-lg-5">
      <div class="img-wrap">
        <img src="assets/images/why-choose-us-img.jpg" alt="Image" class="img-fluid"/>
      </div>
    </div>

  </div>
</div>
</div>
{/* End Why Choose Us Section */}

{/* Start Team Section */}
<div class="untree_co-section">
<div class="container">

  <div class="row mb-5">
    <div class="col-lg-5 mx-auto text-center">
      <h2 class="section-title">Our Team</h2>
    </div>
  </div>

  <div class="row">

    {/* Start Column 1 */}
    <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
      <img src="assets/images/person_1.jpg" class="img-fluid mb-5"/>
      <h3 clas><a href="#"><span class="">Lawson</span> Arnold</a></h3>
      <span class="d-block position mb-4">CEO, Founder, Atty.</span>
      <p>Separated they live in.
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      <p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>
    </div> 
    {/* End Column 1 */}

    {/* Start Column 2 */}
    <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
      <img src="assets/images/person_2.jpg" class="img-fluid mb-5"/>

      <h3 clas><a href="#"><span class="">Jeremy</span> Walker</a></h3>
      <span class="d-block position mb-4">CEO, Founder, Atty.</span>
      <p>Separated they live in.
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      <p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>

    </div> 
    {/* End Column 2 */}

    {/* Start Column 3 */}
    <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
      <img src="assets/images/person_3.jpg" class="img-fluid mb-5"/>
      <h3 clas><a href="#"><span class="">Patrik</span> White</a></h3>
      <span class="d-block position mb-4">CEO, Founder, Atty.</span>
      <p>Separated they live in.
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      <p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>
    </div> 
    {/* End Column 3 */}

    {/* Start Column 4 */}
    <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
      <img src="assets/images/person_4.jpg" class="img-fluid mb-5"/>

      <h3 clas><a href="#"><span class="">Kathryn</span> Ryan</a></h3>
      <span class="d-block position mb-4">CEO, Founder, Atty.</span>
      <p>Separated they live in.
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      <p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>

    
    </div> 
    {/* End Column 4 */}

    

  </div>
</div>
</div>
{/* End Team Section */}



{/* Start Testimonial Slider */}
<div class="testimonial-section before-footer-section">
<div class="container">
  <div class="row">
    <div class="col-lg-7 mx-auto text-center">
      <h2 class="section-title">Testimonials</h2>
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="col-lg-12">
      <div class="testimonial-slider-wrap text-center">

        <div id="testimonial-nav">
          <span class="prev" data-controls="prev"><span class="fa fa-chevron-left"></span></span>
          <span class="next" data-controls="next"><span class="fa fa-chevron-right"></span></span>
        </div>

        <div class="testimonial-slider">
          
          <div class="item">
            <div class="row justify-content-center">
              <div class="col-lg-8 mx-auto">

                <div class="testimonial-block text-center">
                  <blockquote class="mb-5">
                    <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                  </blockquote>

                  <div class="author-info">
                    <div class="author-pic">
                      <img src="assets/images/person-1.png" alt="Maria Jones" class="img-fluid"/>
                    </div>
                    <h3 class="font-weight-bold">Maria Jones</h3>
                    <span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                  </div>
                </div>

              </div>
            </div>
          </div> 
          {/* END item */}

          <div class="item">
            <div class="row justify-content-center">
              <div class="col-lg-8 mx-auto">

                <div class="testimonial-block text-center">
                  <blockquote class="mb-5">
                    <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                  </blockquote>

                  <div class="author-info">
                    <div class="author-pic">
                      <img src="assets/images/person-1.png" alt="Maria Jones" class="img-fluid"/>
                    </div>
                    <h3 class="font-weight-bold">Maria Jones</h3>
                    <span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                  </div>
                </div>

              </div>
            </div>
          </div> 
          {/* END item */}

          <div class="item">
            <div class="row justify-content-center">
              <div class="col-lg-8 mx-auto">

                <div class="testimonial-block text-center">
                  <blockquote class="mb-5">
                    <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                  </blockquote>

                  <div class="author-info">
                    <div class="author-pic">
                      <img src="assets/images/person-1.png" alt="Maria Jones" class="img-fluid"/>
                    </div>
                    <h3 class="font-weight-bold">Maria Jones</h3>
                    <span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
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
<footer class="footer-section">
<div class="container relative">

  <div class="sofa-img">
    <img src="assets/images/sofa.png" alt="Image" class="img-fluid"/>
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
{/* End Footer Section */}	

    </div>
  )
}

export default about
