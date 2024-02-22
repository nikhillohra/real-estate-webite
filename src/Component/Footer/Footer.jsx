import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="innerWidth paddings flexCenter f-container">
        {/* Left Side*/}
        <div className="f-left">
          <div className="flexColStart l-icon">
            <img src="./LL1B.png" alt="logo" width={120} />
            <div className="flexColStart f-left">
              <span className="secondaryText s1 ">
                Our Vision is to make people's lives at ease.
              </span>
            </div>
          </div>
        </div>

        {/* Right Side*/}
      

        <div className="f-menu flexCenter">
          <span>Properties</span>
          <span>Services</span>
          <span>Products</span>
          <span>About Us</span>
        </div>

        <div className="f-right">
          <div className="flexColStart f-right-content">
            <span className="primaryText p1">Information:</span>
            <span className="secondaryText">304 Kharadi, Pune, India</span>
            <span className="secondaryText"><a href='mailto:nikhillohra99@gmail.com' >Email : nikhillohra99@gmail.com</a></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
