import React from "react";

const Footer = () => {
  return (
    <div className="footer flex flex-colum">
      <div className="footer-img-container">
        <img src="images/logo.png" alt="" />
      </div>
      <div className="footer-c-1">
        <span className="footer-2">Contact Us</span>
        <span className="footer-c-2-para-1">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </span>
        <span className="footer-c-2-para-2">example2020@gmail.com</span>
        <span className="footer-c-2-para-3">(904) 443-0343</span>
      </div>
      <div className="col-span-1 flex flex-col text-wrap mt-[84px]">
        <span className="footer-head-1">More</span>
        <ul>
          <li className="footer-c-3">About Us</li>
          <li className="footer-c-3">Products</li>
          <li className="footer-c-3">Career</li>
          <li className="footer-c-3"> Contact Us</li>
        </ul>
      </div>
      <div className="footer-4 col-span-1 flex flex-col text-wrap mt-[84px] mr-0 ">
        <div className="footer-4-c1">
          <span className="footer-head-3">Social Links</span>
          <div className="flex justify-between w-[109px] mt-[11px] gap-[40px]">
            <img
              className="w-[12px] h-[12px]"
              src="images/insta.png"
              alt="insta_handle"
            />
            <img
              className="w-[12px] h-[12px]"
              src="images/twitter.png"
              alt="twitter_handle"
            />
            <img
              className="w-[12px] h-[12px]"
              src="images/fb.png"
              alt="fb_handle"
            />
          </div>
        </div>

        <span className="copyright-text ">© 2022 Food Truck Example</span>
      </div>
    </div>
  );
};

export default Footer;
