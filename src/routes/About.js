import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        리액트로 영화 사이트 만들기
      </span>
      <span>2201</span>
    </div>
  );
}

export default About;
