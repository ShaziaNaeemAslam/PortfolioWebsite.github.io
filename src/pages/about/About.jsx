import React from "react";
import Pageheader from "../../components/pageHeaderContainer/Pageheader";
import { BsInfoCircleFill } from "react-icons/bs";
import "./About.scss";
import { Animate } from "react-simple-animate";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const personalDetaial = [
  {
    label: "Name",
    value: "Shazia Aslam",
  },
  {
    label: "Age",
    value: "33",
  },
  {
    label: "Adress",
    value: "Lahore, Pakistan",
  },
  {
    label: "Email",
    value: "muaznaeem1414@gmail.com",
  },
  {
    label: "Contact No.",
    value: "+92 3017394929",
  },
];
const jobSummary =
  "Seasoned and independent Full stack and Mern Stack Developer havin skill of programming to deliver an immensive and efficient website development, proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design. It is imperative that you provide a through and professional approach to your resume. As a Mern Stack Developer you'll be judged by your ability to use UX and UI concepts and follow design guidelines. It's about expressing your attention to detail and how you can help implement design ideas for your future employer.";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <Pageheader
          headerText="About Me"
          icon={<BsInfoCircleFill size={40} />}
        />
        <div className="about_content">
          <div className="about_content_personalWrapper">
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform: "translateX(-900px)",
              }}
              and={{
                transform: "translatex(0px",
              }}
            >
              <h3>Mern Stack Developer</h3>
              <p>{jobSummary}</p>
            </Animate>

            <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform: "translateX(500px)",
              }}
              and={{
                transform: "translatex(0px",
              }}
            >
              <h3 className="personalinfoHeaderText">Personal Information</h3>
              <ul>
                {personalDetaial.map((item, i) => (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </Animate>
          </div>
          <div className="about_content_servicesWrapper">
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform: "translateX(500px)",
              }}
              and={{
                transform: "translatex(0px",
              }}
            >
              <div className="about_content_servicesWrapper_innerContent">
                <div>
                  <SiExpress size={70} color="var(--yellow-theme-main-color)" />
                </div>
                <div>
                  <SiMongodb size={70} color="var(--yellow-theme-main-color)" />
                </div>
                <div>
                  <FaNodeJs size={70} color="var(--yellow-theme-main-color)" />
                </div>
                <div>
                  <FaReact size={70} color="var(--yellow-theme-main-color)" />
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
