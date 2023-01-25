import React from "react";

import classes from "./MicroHeader.module.css";

const MicroHeader = () => {
  return (
    <div className={classes.header}>
      <div className={classes.heading}>
        <div className={classes.logo}>
          <img
            src="/resources/eWriterLogo1Black.png"
            alt="eWriter logo"
            className={classes.logo}
          />
        </div>
        <div className={classes.topic}>
          <h1 className={classes.h1}>e Writer</h1>
          <p className={classes.slogon}>Writing made easy</p>
        </div>
      </div>
    </div>
  );
};

export default MicroHeader;
