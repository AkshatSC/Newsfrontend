import React from "react";
import "./Navbar.css";

import logo from "../images/logo.png";
import logovariant from "../images/logo-variant.png";

function Navbar(){
  return(
    <header>
    <div class="container-fluid">

        <div class="navb-logo">
            <img src={logo} alt="Logo"/>
        </div>

        <div class="navb-items d-none d-xl-flex">

            <div class="item">
                <a href="/">Home</a>
            </div>

            <div class="item">
                <a href="/services">Services</a>
            </div>

            <div class="item">
                <a href="/cases">Cases</a>
            </div>

            <div class="item">
                <a href="/about">About</a>
            </div>

            <div class="item-button">
                <a href="/contact" type="button">Let's talk</a>
            </div>
        </div>


        <div class="mobile-toggler d-lg-none">
            <a href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
                <i class="fa-solid fa-bars"></i>
            </a>
        </div>

        
        <div class="modal fade" id="navbModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">

              <div class="modal-dialog">

                  <div class="modal-content">

                      <div class="modal-header">
                          <img src={logovariant} alt="Logo"/>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                      </div>

                      <div class="modal-body">

                          <div class="modal-line">
                              <i class="fa-solid fa-house"></i><a href="/">Home</a>
                          </div>

                          <div class="modal-line">
                              <i class="fa-solid fa-bell-concierge"></i><a href="/services">Services</a>
                          </div>

                          <div class="modal-line">
                              <i class="fa-solid fa-file-lines"></i> <a href="/cases">Cases</a>
                          </div>

                          <div class="modal-line">
                              <i class="fa-solid fa-circle-info"></i><a href="/about">About</a>
                          </div>

                          <a href="/contact" class="navb-button" type="button">Let's talk</a>
                      </div>

                    <div class="mobile-modal-footer">

                        <a target="_blank" href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a target="_blank" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a target="_blank" href="#"><i class="fa-brands fa-youtube"></i></a>
                        <a target="_blank" href="#"><i class="fa-brands fa-facebook"></i></a>
                    </div>

                </div>

            </div>

        </div>

    </div>
    </header>
  );
}

export default Navbar;
