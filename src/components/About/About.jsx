import React from "react";
import Acc from "../Acc/Acc.jsx";
import "../About/About.scss";

const About = () => {
  return (
    <section className="about sec" id="about">
      <div className="wrapper">
        <div className="profile">
          <img src={process.env.PUBLIC_URL + "/images/profile.png"} alt="" />
          <strong>LEE JEONG EUN</strong>
          <p className="tel">010 - 1234 - 5789</p>
          <p className="email">h00kk @ naver.com</p>
          <div className="icon-wrapper">
            <figure className="github">
              <img src={process.env.PUBLIC_URL + "/images/github.png"} alt="" />
              <span>github</span>
            </figure>
            <figure className="notion">
              <img src={process.env.PUBLIC_URL + "/images/notion.png"} alt="" />
              <span>notion</span>
            </figure>
          </div>
        </div>
        <div className="right-box">
          <p className="title">WHO AM I?</p>
          <Acc />
        </div>
      </div>

      <p className="copyright">
        Copyright © 2022. Lee Jeong Eun. All rights reserved.
      </p>
    </section>
  );
};

export default About;
