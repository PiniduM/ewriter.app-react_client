import React from "react";

import classes from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <div className={classes.heading}>
          <div className={classes.logo}>
            <img
              src="./resources/eWriterLogo1Black.png"
              alt="eWriter logo"
              className={classes.logo}
            />
          </div>
          <div className={classes.topic}>
            <h1>e Writer</h1>
            <p className={classes.slogon}>Writing made easy</p>
          </div>
        </div>
        <nav className={classes.nav}></nav>
      </div>

      <div className={classes.description}>
        <p>
          power up your writings with
          <br />
          <span className={classes.purpleText}>cutting edge technolgies</span>
        </p>
        <img src="./resources/laptopMan1.png" alt="smart guy" />
      </div>

      <div className={classes.writers_links}>
        <h2 className={classes.links_heading}>Our writers</h2>
        <div className={classes.writer_link}>
          <div className={classes.link_description}>
            <h3>Essay writer</h3>
            <p>
              write amaizing essays <br />
              with the help of AI
            </p>
            <a href="./sub/Essay_writer/client/Essaywriter/public/index.html">
              <button className={classes.linkButton}>Let's go</button>
            </a>
          </div>
          <div className={classes.link_img}>
            <img src="./resources/smilingGirl1.png" alt="smart girl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
