import React from "react";
import { MdContactPhone } from "react-icons/md";
import "./Contact.scss";
import Pageheader from "../../components/pageHeaderContainer/Pageheader";
import { Animate } from "react-simple-animate";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <Pageheader
          headerText="Contact Me"
          icon={<MdContactPhone size={60} />}
        />
        <div className="contact__content">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="contact__content__header-text">Let's Talk</h3>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="contact__content__form">
              <div className="contact__content__form__controlswrapper">
                <div>
                  <h1 className="inputName">Phone: +92-3074289172</h1>
                </div>
                <div>
                  <h1 className="inputEmail">Email: muaznaeem1414@gmail.com</h1>
                </div>
                <div>
                  <h1 className="inputName">Whatsapp: 03074289172</h1>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
};

export default Contact;
