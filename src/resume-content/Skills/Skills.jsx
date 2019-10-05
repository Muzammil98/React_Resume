import React from "react";
import Heading from "../utils/Heading";
import Items from "./Items";
import "./Skills.styles.css";

function Skills() {
  return (
    <div className="col-md-6 ">
      <div className="skills-wrapper mt-2 rounded bg-light">
        <Heading name="Skills" />
        <div className="d-flex justify-content-start">
          <Items
            names={[
              "HTML5",
              "CSS3",
              "JavaScript",
              "SQL",
              "Jquery",
              "Adobe Illustrator",
              "Docker",
              "Kubernetes",
              "React js",
              "Mongo DB"
            ]}
            stars={[
              "⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫",
              "⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫",
              "⚫⚫⚫⚫⚫⚫⚫⚫⚫⚪",
              "⚫⚫⚫⚫⚫⚫⚫⚫⚪⚪",
              "⚫⚫⚫⚫⚫⚫⚫⚫⚪⚪",
              "⚫⚫⚫⚫⚫⚫⚫⚫⚫⚪",
              "⚫⚫⚫⚫⚫⚫⚫⚫⚫⚪",
              "⚫⚫⚫⚫⚫⚫⚫⚫⚪⚪",
              "⚫⚫⚫⚫⚫⚫⚫⚫⚫⚪",
              "⚫⚫⚫⚫⚪⚪⚪⚪⚪⚪"
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
