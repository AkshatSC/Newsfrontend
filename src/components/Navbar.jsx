import React from "react";
import "./Navbar.css";

import logo from "../images/logo.svg";

function Navbar(){
  return(
    <div className="mydiv">
      <header>
          <div class="container-fluid">

              <div class="navb-logo">
                  <img src={logo} alt="Logo"/>
              </div>

              <div class="navb-items">

                  <div class="item">
                      <a href="/">Home</a>
                  </div>

                  <div class="item">
                      <a href="/New">New</a>
                  </div>

                  <div class="item">
                      <a href="/Popular">Popular</a>
                  </div>

                  <div class="item">
                      <a href="/Trending">Trending</a>
                  </div>

                  <div class="item">
                      <a href="/Categories">Categories</a>
                  </div>
              </div>


            <div class="mobile-toggler">
                <a href="#" className="hamburger" data-bs-toggle="modal" data-bs-target="#navbModal">
                    <i class="fa-solid fa-bars "></i>
                </a>
            </div>


            <div class="modal fade" id="navbModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">

                  <div class="modal-dialog">

                      <div class="modal-content">

                          <div class="modal-header">
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                          </div>

                          <div class="modal-body">

                              <div class="modal-line">
                                  <a href="/">Home</a>
                              </div>

                              <div class="modal-line">
                                  <a href="/new">New</a>
                              </div>

                              <div class="modal-line">
                                  <a href="/popular">Popular</a>
                              </div>

                              <div class="modal-line">
                                  <a href="/trending">Trending</a>
                              </div>

                              <div class="modal-line">
                                  <a href="/categories">Categories</a>
                              </div>


                          </div>

                      </div>

                  </div>

              </div>

          </div>
        </header>
    </div>
  );
}

export default Navbar;
