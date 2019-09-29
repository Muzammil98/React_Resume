import React from "react";

import Profile from "./resume-content/Profile";
import Skills from "./resume-content/Skills/Skills";
import Certificates from "./resume-content/Certificate/Certificates";
import Hobbies from "./resume-content/Hobbies";
import Languages from "./resume-content/Languages";
import Experience from "./resume-content/Experience/Experience";
import Education from "./resume-content/Education/Education";
import Social from "./resume-content/Social";

import Card from "./resume-content/utils/Card";
import CardGrid from "./resume-content/utils/CardGrid";

function Resume() {
  return (
    <div className="container">
      <Card component={Profile} />
      <CardGrid col1={Skills} col2={Certificates} />
      <Card component={Social} />
      <CardGrid col1={Experience} col2={Education} />
      <CardGrid col1={Hobbies} col2={Languages} />
    </div>
  );
}

export default Resume;
