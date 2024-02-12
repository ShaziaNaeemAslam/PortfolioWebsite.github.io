import React from "react";
import "./Pageheader.scss";

  const Pageheader = (props) => {
  const { headerText, icon } = props;

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default Pageheader;
