import React from "react";
import Pageheader from "../../components/pageHeaderContainer/Pageheader";
import "./Resume.scss";
import { GrResume } from "react-icons/gr";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import data from "./resumeUtils";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";

const Resume = () => {
  return (
    <>
      <section id="resume" className="resume">
        <Pageheader headerText="My Resume" icon={<GrResume size={40} />} />
        <div className="timeline">
          <div className="timeline_education">
            <h3 className="timeline_education_header-text ">Education</h3>
            <VerticalTimeline
              layout={"1column"}
              lineColor="var(--yellow-theme-main-color)"
            >
              {data.education.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline_education_vertical-timeline-element"
                  contentStyle={{
                    background: "none",
                    color: "var(--yellow-theme-sub-text-color)",
                    border: "1.5px solid var(--yellow-theme-main-color)",
                  }}
                  // date="2020-2022"
                  icon={<MdWork />}
                  iconStyle={{
                    background: "#181818",
                    color: "var(--yellow-theme-main-color)",
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                  </div>
                  <p className="vertical-timeline-element-title-wrapper-description">
                    {item.description}
                  </p>
                  <span>{item.date}</span>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
