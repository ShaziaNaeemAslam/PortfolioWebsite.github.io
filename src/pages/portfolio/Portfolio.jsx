import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import "./Portfolio.scss";
import Pageheader from "../../components/pageHeaderContainer/Pageheader";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="portfolio">
        <Pageheader
          headerText="My Portfolio"
          icon={<BsInfoCircleFill size={40} />}
        />
      </section>
    </>
  );
};

export default Portfolio;
