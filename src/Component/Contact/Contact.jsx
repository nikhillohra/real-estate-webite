import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill } from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi2"
import {HiVideoCamera} from "react-icons/hi";

import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/*  Left Side*/}

        <div className="c-left">
          <span className="orangeText">Our Contact</span>
          <br></br>
          <span className="primaryText">Easy to Contact us</span>
          <br></br><br/>
          <span className="seondaryText">
            We are always ready to help by providing the best services to ensure
            a better quality of life. </span>
          <br />
       

        <div className="flexColStart contactModes">

          {/*First row */}
          <div className="flexStart row">
            <div className="flexColStart mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <MdCall size={26} />
                </div>

                <div className="flexColStart detail">
                  <span className="primaryText">Call</span>
                  <span className="secondaryText">098-123-4567</span>
                </div>
              </div>
              <div className="flexCenter button b2">Call Now</div>
              </div>


        {/*Second mode*/} <div className="flexColStart mode">
              <div className="flexStart ">
                <div className="flexCenter icon ">
                  <BsFillChatDotsFill size={26} />
                </div>

                <div className="flexColStart detail">
                  <span className="primaryText">Chat</span>
                  <span className="secondaryText">098-123-4567</span>
                </div>
              </div>
              <div className="flexCenter button b2">Chat Now</div>
              </div>



            </div>

            <div className="flexStart row">
            <div className="flexColStart mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <HiVideoCamera size={26} />
                </div>

                <div className="flexColStart detail">
                  <span className="primaryText">Video Call</span>
                  <span className="secondaryText">098-123-4567</span>
                </div>
              </div>
              <div className="flexCenter button b2">Video Call Now</div>
              </div>


        {/*Second mode*/} <div className="flexColStart mode">
              <div className="flexStart row">
                <div className="flexCenter icon ">
                  <FaEnvelope size={26} />
                </div>

                <div className="flexColStart detail">
                  <span className="primaryText">Message</span>
                  <span className="secondaryText">098-123-4567</span>
                </div>
              </div>
              <div className="flexCenter button b2">Text Now</div>
              </div>



            </div>
          </div>
        </div>

        {/*  right Side*/}
        <div className="c-rigth">
          <div className="image-container">
            <img src="./contact.jpg " alt="none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
