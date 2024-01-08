import React from "react";

const AboutUs = () => {
  return (
    <div className=" about-us">
      <div className="about-img-container">
        <img src="images/about.png" alt="img" />
      </div>
      <div className="about-text-container">
        <div>
          <div className="headingPage-2">About Us</div>
          <div className="paraPage-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </div>
          <button className="btnPage-2">
            <p className="bt-text">Read More</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
