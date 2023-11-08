import React from "react";
import img1 from "../images/image-web-3-desktop.jpg";
import img2 from "../images/image-gaming-growth.jpg";
import img3 from "../images/image-retro-pcs.jpg";
import img4 from "../images/image-top-laptops.jpg";

import mobileimage from "../images/image-web-3-mobile.jpg";

import "./mainpage.css";


function MainPage(){
  return(
    <div className="main-div">
    <div className="mainpage-main-div">

          <div className="mainpage-upper-div">


                <div className="mainpage-leftbox">

                      <div className="mainpage-imagediv">

                            <img className="img1" src={img1} alt="image"/>
                            <img className="img10" src={img1} alt="image"/>

                      </div>

                      <div className="mainpage-leftbox-bottom">

                            <div className="mainpage-leftbox-box1">

                                  <p className="mainpage-leftbox-box1-p">The Bright Future Of Web 3.0?</p>

                            </div>

                            <div className="mainpage-leftbox-box2">

                                  <p className="mainpage-leftbox-box2-p">We dive into the next evolution of the web that claims to put the power of the platform back into the hands of the people.But is it really fulfilling its promise?</p>
                                  <div className="mainpage-leftbox-box2-a-div">
                                      <a href="#" className="mainpage-leftbox-box2-a">Read More</a>
                                  </div>

                            </div>

                      </div>

                </div>



                <div className="mainpage-rightbox">

                      <div className="mainpage-rightbox-heading">

                            <h1>New</h1>

                      </div>
                      <div className="mainpage-after-div">

                            <div className="mainpage-rightbox-box">

                                  <h1>Hydrogen v/s Electric cars</h1>
                                  <p>Will Hydrogen fueled cars ever catch up to EV?</p>

                            </div>


                            <hr/>


                            <div className="mainpage-rightbox-box">

                                  <h1>The Downside of AI artistry</h1>
                                  <p>What are the possible adverse effects of on-demand AI image generation?</p>

                            </div>

                            <hr/>

                            <div className="mainpage-rightbox-box">

                                  <h1>Is VC funding dying up?</h1>
                                  <p>Private funding by VC firms are down 50% YOY.We take a look at what that means.</p>

                            </div>
                      </div>

                </div>

          </div>



          <div className="mainpage-bottombox">

                <div className="mainpage-bottombox-box">

                      <div className="mainpage-bottombox-box1-image">

                            <img className="imgbox" src={img3} alt="image"/>

                      </div>
                      <div className="mainpage-bottombox-box-matter">

                            <h1>01</h1>
                            <p className="mainpage-bottombox-box-matter-p">Reviving Petro PC's</p>
                            <p>What happens when old PCs are given latest upgrades.</p>

                      </div>

                </div>
                <div className="mainpage-bottombox-box">

                      <div className="mainpage-bottombox-box1-image">

                            <img className="imgbox" src={img4} alt="image"/>

                      </div>
                      <div className="mainpage-bottombox-box-matter">

                            <h1>02</h1>
                            <p className="mainpage-bottombox-box-matter-p">Top 10 Laptops Of 2023</p>
                            <p>Our best picks for various needs and budgets</p>

                      </div>

                </div>
                <div className="mainpage-bottombox-box">

                      <div className="mainpage-bottombox-box1-image">

                            <img className="imgbox" src={img2} alt="image"/>

                      </div>
                      <div className="mainpage-bottombox-box-matter">

                            <h1>03</h1>
                            <p className="mainpage-bottombox-box-matter-p">The Growth Of Gaming</p>
                            <p>How the pandemic has sparked fresh Opportunities</p>

                      </div>

                </div>

          </div>


    </div>
    </div>
  );
}

export default MainPage;
