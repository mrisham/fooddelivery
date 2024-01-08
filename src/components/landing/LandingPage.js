import React from "react";
const LandingPage = () => {
  return (
    <div className="landing-conatiner">
      <div className="img-container">
        <div>
          <img src="images/logo.png" alt="logo" className="main-logo" />
        </div>
        <div className="text-container">
          <span className=" landHead ">
            Discover the <span className="text-redText">Best </span> Food <br />
            and Drinks
          </span>
          <span className="paraLand">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </span>
          <button className="btnLand ">Explore now!</button>
        </div>
      </div>
      <div className="secondary-container ">
        <div className="landingImage">
          <button className=" land-top-btn">
            <span className="land-top-btn-text">Get In Touch</span>
          </button>
          <img className="side-image" src="images/side+mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
