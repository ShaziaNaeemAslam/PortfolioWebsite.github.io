import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

const Home = () => {
  const navigate = useNavigate();
  // console.log(navigate);

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <>
      <section id="home" className="home">
        <div className="home_text-wrapper">
          <h2>
            Hello, I'm Shazia
            <br />
            Mern stack developer
          </h2>
        </div>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)",
          }}
          and={{
            transform: "translatex(0px",
          }}
        >
          <div className="home_contact-me">
            <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          </div>
        </Animate>
      </section>
    </>
  );
};

export default Home;
